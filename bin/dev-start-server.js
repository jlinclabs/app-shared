#!/usr/bin/env node

process.env.NODE_ENV = 'development'

import { packageDirectory } from 'pkg-dir'

await (async () => {
  process.env.APP_PATH = await packageDirectory()
  console.log('process.env.APP_PATH', process.env.APP_PATH)
  const { createServer } = await import('jlinx-demo-app/server/index.js')
  const server = await createServer()
  await server.start()
})()
