#!/usr/bin/env node

import { Command } from 'commander'
import { packageDirectory } from 'pkg-dir'
// ONE BIN TO RULES THEM ALL
const program = new Command()

program
  .name('app-shared')
  .version('0.0.1')
program
  .command('find-open-port')
  .description('find an open port')
  .action(findOpenPort)
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

program.parse(process.argv)


async function findOpenPort(){
  const {default: findPort} = await import('find-open-port')
  console.log(await findPort())
}

async function devStart(){
  console.log('devStart')
}

async function devStartClient(){
  console.log('devStartClient')
}

async function devStartServer(){
  process.env.NODE_ENV = 'development'
  process.env.APP_PATH = await packageDirectory()
  console.log('process.env.APP_PATH', process.env.APP_PATH)
  const { createServer } = await import('../server/index.js')
  const server = await createServer()
  await server.start()
}

