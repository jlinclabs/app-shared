#!/usr/bin/env node

// ONE BIN TO RULES THEM ALL
import Path from 'path'
import { promisify } from 'node:util'
import { writeFile } from 'node:fs/promises'
import childProcess from 'node:child_process'
import { fileURLToPath } from 'url'
import { Command } from 'commander'
import { packageDirectory } from 'pkg-dir'
import * as dotenv from 'dotenv'

const spawn = promisify(childProcess.spawn)

const THIS_SCRIPT = fileURLToPath(import.meta.url)

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
  const SCHEMA_PATH = Path.join(process.env.APP_PATH, 'server', 'schema.prisma')
  await spawn(
    'npx',
    ['prisma', 'migrate', 'dev', `--schema=${SCHEMA_PATH}`],
    { stdio: 'inherit' }
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
        command: `npx nodemon -w ./node_modules/app-shared -w ./server -- ${THIS_SCRIPT} dev-start-server`,
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
      "/api": {
        "target": process.env.API_SERVER,
      }
    }, null, 2)
  )
  await spawn(
    'npx',
    [
      'parcel',
      'serve',
      '--port', `${process.env.PORT}`,
      '--cache-dir', `${process.env.APP_PATH}/tmp/cache`,
      '--dist-dir', `${process.env.APP_PATH}/client-build`,
      `${process.env.APP_PATH}/client/index.html`
    ],
    { stdio: 'inherit' }
  )
}

async function devStartServer(){
  process.env.NODE_ENV = "development"
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  await _start()
}

async function build(){
  await spawn(
    'npx',
    [
      'parcel',
      'build',
      '--dist-dir', `${process.env.APP_PATH}/client-build`,
      `${process.env.APP_PATH}/client/index.html`
    ],
    { stdio: 'inherit' }
  )
}

async function start(){
  if (!process.env.NODE_ENV) process.env.NODE_ENV = "production"
  await _start()
}

async function _start(){
  const { createServer } = await import('../server/index.js')
  const server = await createServer()
  await server.start()
}
