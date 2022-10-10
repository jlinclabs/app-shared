#!/usr/bin/env node

// ONE BIN TO RULES THEM ALL
import Path from 'path'
import { promisify } from 'node:util'
import childProcess from 'node:child_process'
import { Command } from 'commander'
import { packageDirectory } from 'pkg-dir'
import * as dotenv from 'dotenv'

const spawn = promisify(childProcess.spawn)

const APP_PATH = await packageDirectory()

dotenv.config({
  path: Path.join(APP_PATH, '.env')
})

const program = new Command()

program
  .name('app-shared')
  .version('0.0.1')

program
  .command('find-open-port')
  .description('find an open port')
  .action(findOpenPort)

program
  .command('prisma')
  .description('prisma')
  .action(prisma)

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
  // .command('update', 'update installed packages', { executableFile: 'myUpdateSubCommand' })
  // .command('list', 'list packages installed', { isDefault: true })

program
  .command('build')
  .description('build client for production')
  .action(build)

program.parse(process.argv)


async function findOpenPort(){
  const {default: findPort} = await import('find-open-port')
  console.log(await findPort())
}

async function prisma(...args){
  console.log('prisma', args)
  // console.log(await packageDirectory())
  // console.log(`npx prisma migrate dev --schema=./server/schema.prisma`)
  // await spawn('npx', ['prisma', 'migrate', 'dev', `--schema=./server/schema.prisma`])
}

async function devDbMigrate(){
  const APP_PATH = await packageDirectory()
  const SCHEMA_PATH = Path.join(APP_PATH, 'server', 'schema.prisma')
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

  // process.env.NODE_ENV = "development"
  // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
  process.env.APP_PATH = await packageDirectory()

  await concurrently(
    [
      {
        name: 'server',
        command: `nodemon -w ./node_modules/app-shared -w ./server -- npx app-shared dev-start-server`,
        env: {
          PORT: serverPort
        },
      },
      {
        name: 'client',
        command: `npx app-shared dev-start-client`,
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
  // exec dotenv -e .env -- concurrently \
  //   --kill-others \
  //   --names "${APP_NAME} SERVER,${APP_NAME} CLIENT" \
  //   "PORT=${SERVER_PORT} nodemon -w ./shared -w \"${APP_PATH}\" -- dev-start-server \"${APP_PATH}\"" \
  //   "API_SERVER=${API_SERVER} dev-start-client \"${APP_PATH}\""
}

async function devStartClient(){
  console.log('devStartClient')

  if (!process.env.API_SERVER) throw new Error('ERROR: $API_SERVER is not set')

  await spawn(
    'npx',
    [
      'parcel',
      'serve',
      '--port', `${process.env.PORT}`,
      '--cache-dir', `${APP_PATH}/tmp/cache`,
      '--dist-dir', `${APP_PATH}/client-build`,
      `${APP_PATH}/client/index.html`
    ],
    { stdio: 'inherit' }
  )

// PORT=$(dotenv -e ${APP_PATH}/.env -p PORT)
// echo PORT=${PORT}

// cat > "${APP_ROOT}/.proxyrc" <<-EOF
// {
//   "/api": {
//     "target": "${API_SERVER}"
//   }
// }
// EOF

// dotenv -e "${APP_PATH}/.env" -- npx parcel serve \
//   --port ${PORT} \
//   --cache-dir "${APP_PATH}/tmp/cache" \
//   --dist-dir "${APP_PATH}/client-build" \
//   "${APP_PATH}/client/index.html"

}

async function devStartServer(){
  process.env.NODE_ENV = 'development'
  process.env.APP_PATH = APP_PATH
  console.log('process.env.APP_PATH', process.env.APP_PATH)
  const { createServer } = await import('../server/index.js')
  const server = await createServer()
  await server.start()
}

async function build(){
  await spawn(
    'npx',
    [
      'parcel',
      'build',
      '--dist-dir', `${APP_PATH}/client-build`,
      `${APP_PATH}/client/index.html`
    ],
    { stdio: 'inherit' }
  )
}

