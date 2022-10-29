#!/usr/bin/env node

// ONE BIN TO RULES THEM ALL
import Path from 'path'
import { readFile, writeFile } from 'node:fs/promises'
import childProcess from 'child-process-promise'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { packageDirectory } from 'pkg-dir'
import * as dotenv from 'dotenv'

const spawn = (cmd, args, options) => {
  options = {
    stdio: ['ignore', 'inherit', 'inherit'],
    ...options
  }
  console.log('spawn', cmd, args, options)
  return childProcess.spawn(cmd, args, options)
}

const exec = (cmd, options) => {
  console.log('exec', cmd, options)
  return childProcess.exec(cmd, options)
}

const realpath = async path => {
  const { stdout } = await exec(`npx realpath "${path}"`)
  return stdout.trim()
}

const modPath = path =>
  realpath(Path.join(process.env.APP_PATH, 'node_modules', 'app-shared', path))

const THIS_SCRIPT = fileURLToPath(import.meta.url)
const THIS_PACKAGE = Path.resolve(THIS_SCRIPT, '../..')

if (!process.env.APP_PATH)
  process.env.APP_PATH = await packageDirectory()

dotenv.config({
  path: Path.join(process.env.APP_PATH, '.env')
})

const program = new Command()

program
  .name('app-shared')
  .version('0.0.1')

program
  .command('dev-db-migrate')
  .description('migrate db in development')
  .action(devDbMigrate)

program
  .command('dev-npm-install-latest')
  .description('npm install app-shared @ latest sha on github')
  .action(devNpmInstallLatest)

program
  .command('dev-npm-link')
  .description('npm link app-shared and all peer deps')
  .argument('<path>', 'path to local checkout for app-shared')
  .action(devNpmLink)

program
  .command('dev-start')
  .description('start development servers')
  .action(devStart)

program
  .command('dev-start-client')
  .description('start development client server')
  .action(devStartClient)

program
  .command('dev-start-server')
  .description('start development api server')
  .action(devStartServer)

program
  .command('build')
  .description('build client for production')
  .action(build)

program
  .command('start')
  .description('start server for production')
  .action(start)

program.parse(process.argv)


async function devDbMigrate(){
  process.env.PRISMA_BUILD = Path.join(process.env.APP_PATH, 'server', '.prisma')
  const SCHEMA_PATH = Path.join(process.env.APP_PATH, 'server', 'schema.prisma')
  await spawn(
    'npx',
    ['prisma', 'migrate', 'dev', `--schema=${SCHEMA_PATH}`],
    {
      stdio: 'inherit',
    },
  )
}

async function devStart(){
  const {default: findPort} = await import('find-open-port')
  const {default: concurrently} = await import('concurrently')

  const serverPort = await findPort()
  const apiServerUrl = `http://localhost:${serverPort}`
  await concurrently(
    [
      {
        name: 'server',
        command: `${THIS_SCRIPT} dev-start-server`,
        env: {
          PORT: serverPort
        },
      },
      {
        name: 'client',
        command: `${THIS_SCRIPT} dev-start-client`,
        env: {
          API_SERVER: apiServerUrl,
        },
      },
    ],
    {
      killOthers: ['failure', 'success'],
      cwd: process.env.APP_PATH,
    }
  )
}

async function devStartClient(){
  if (!process.env.API_SERVER) throw new Error('ERROR: $API_SERVER is not set')
  process.env.NODE_ENV = "development"
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  await writeFile(
    Path.join(process.env.APP_PATH, '.proxyrc'),
    JSON.stringify({
      "/.well-known": {
        "target": process.env.API_SERVER,
      },
      "/api": {
        "target": process.env.API_SERVER,
      },
    }, null, 2)
  )
  await spawn(
    'npx',
    [
      'nodemon',
      '-w', `${THIS_SCRIPT}`,
      // '-w', `${process.env.APP_PATH}/node_modules/app-shared/client`,
      '-w', await modPath('client'),
      '--exec',
      'npx',
      'parcel',
      'serve',
      '--port', `${process.env.PORT}`,
      '--no-cache',
      // '--cache-dir', `${process.env.APP_PATH}/tmp/cache`,
      '--dist-dir', `${process.env.APP_PATH}/client-build`,
      `${process.env.APP_PATH}/client/index.html`
    ],
  )
}

async function devStartServer(){
  process.env.NODE_ENV = "development"
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  // await _start()
  await spawn(
    'npx',
    [
      'nodemon',
      '-w', `${THIS_SCRIPT}`,
      // '-w', `${process.env.APP_PATH}/node_modules/app-shared/bin/app-shared.js`,
      '-w', await modPath('bin/app-shared.js'),
      // '-w', `${process.env.APP_PATH}/node_modules/app-shared/server`,
      '-w', await modPath('server'),
      '-w', `${process.env.APP_PATH}/server`,
      '--exec',
      `${THIS_SCRIPT} start`
    ],
  )
}

// npx nodemon -w ./node_modules/app-shared -w ./server -- ${THIS_SCRIPT} dev-start-server
// npx nodemon -w ./node_modules/app-shared -w ./server --
async function build(){
  await spawn(
    'npx',
    [
      'parcel',
      'build',
      '--dist-dir', `${process.env.APP_PATH}/client-build`,
      `${process.env.APP_PATH}/client/index.html`
    ],
  )
}

async function start(){
  if (!process.env.NODE_ENV) process.env.NODE_ENV = "production"
  console.log(`starting server in NODE_ENV=${process.env.NODE_ENV}`)
  const { createServer } = await import('../server/index.js')
  const server = await createServer()
  await server.start()
}

async function devNpmInstallLatest(){
  const packageJson = JSON.parse(await readFile(Path.join(THIS_PACKAGE, 'package.json')))
  const origin = packageJson.repository.url.split('git+')[1]
  const packageName = 'github:' + origin.match(/github\.com\/(.+)\.git/)[1]
  const latest = await exec(`git ls-remote -h "${origin}" master`)
    .then(({ stdout }) => stdout.split(/\s+/)[0])
  await spawn(
    `npm`,
    ['install', `${packageName}#${latest}`],
  )
  //TODO install all peerDependencies
  const { peerDependencies } = JSON.parse(await readFile(await modPath('package.json')))
  const deps = Object.entries(peerDependencies).map(([name, version]) => `${name}@${version}`)
  await spawn('npm', ['install', ...deps])
}

async function devNpmLink(appSharedPath){
  const packageJson = JSON.parse(await readFile(Path.join(appSharedPath, 'package.json')))
  const packageName = packageJson.name
  if (packageName !== 'app-shared') throw new Error(`"${appSharedPath}" doesnt look like an app-shared`)
  const peerDependencies = Object.keys(packageJson.peerDependencies)
  for (const dep of peerDependencies){
    await spawn('rm', ['-rf', `${process.env.APP_PATH}/node_modules/${dep}`])
    await spawn('ln', ['-s', `${appSharedPath}/node_modules/${dep}`, `${process.env.APP_PATH}/node_modules/${dep}`])
  }
  for (const subDir of ['bin', 'server', 'jlinx', 'shared']) {
    const path = `${process.env.APP_PATH}/node_modules/${packageName}/${subDir}`
    await spawn('rm', ['-rf', path])
    await spawn('ln', ['-s', `${appSharedPath}/${subDir}`, path])
  }
  // await spawn('rm', ['-rf', `${process.env.APP_PATH}/node_modules/${packageName}`])
  // await spawn('ln', ['-s', `${appSharedPath}`, `${process.env.APP_PATH}/node_modules/${packageName}`])
}