import Path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import Router from 'express-promise-router'
import { Observable } from 'rxjs'

import { ExpectedError } from './errors.js'
import { loadSession } from './session.js'
import discovery from './discovery.js'

export async function createServer(){

  const app = express()

  const { Context } = await discovery.serverContextExists()
    ? await import(discovery.contextPath)
    : await import('./Context.js')
  Context.queries = await discovery.importQueries()
  Context.commands = await discovery.importCommands()

  console.log({
    Context,
    queries: Context.queries,
    commands: Context.commands,
  })

  app.start = function(){
    app.server = app.listen(process.env.PORT, () => {
      const { port } = app.server.address()
      const host = `http://localhost:${port}`
      console.log(`Listening on port ${host}`)
    })
  }

  // TODO
  // - look for APP_DIR/server/index.js and expect default func to pass app
  // - rename Controller to Context
  // - look for APP_DIR/server/context.js and use it instead of Context base class

  app.use(async (req, res, next) => {
    // console.log(`${req.method} ${req.url}`)
    await loadSession(req, res)
    req.context = new Context({
      session: req.session,
      userId: req.session.userId,
      readOnly: req.session.readOnly,
    })
    console.log('HTTP REQUEST', {
      method: req.method,
      url: req.url,
      session: req.session,
    })
    next()
  })

  // app.use(uploads)
  app.use(bodyParser.json({
    limit: 102400 * 10,
  }))

  if (await discovery.serverRoutesExists()){
    const handler = await discovery.importServerRoutesHandler()
    let router = new Router()
    router = await handler(router) || router
    app.use(router)
  }

  // CQRPC Command. Query. Remote. Procedure. Call
  app.use('/api/:name', async function(req, res, next) {
    const { name } = req.params
    let options, action
    if (req.method === 'GET'){
      action = 'query'
      options = JSON.parse(req.query.o || '{}')
    }else if (req.method === 'POST'){
      action = 'command'
      options = req.body
    }else{
      return next()
    }
    console.log(action, { name, options })
    try{
      const result = await req.context.publicCall(action, name, options)
      console.log('OBSRV???', result instanceof Observable)
      if (result instanceof Observable){
        console.log('🚒 STARTING SSE STREAM!')
        await streamServerSentEvents(req, res, result)
      }else {
        console.log(`${action} SUCCESS`, { name, options, result })
        res.status(200).json({ result })
      }
    }catch(error){
      console.error(`${action} FAILED`, { name, options, error })
      renderErrorAsJSON(res, error)
    }
  })

  if (process.env.NODE_ENV === 'production') {
    const buildPath = Path.join(process.env.APP_PATH, 'client-build')
    const indexPath = Path.join(buildPath, 'index.html')
    app.use(express.static(buildPath))
    app.get('/*', function (req, res) {
      res.sendFile(indexPath);
    })
  }

  // app.use((req, res, error, next) => { }) // TODO add error handler

  const errorToJson = error => ({
    message: error.message,
    stack: error.stack,
  })

  return app
}


async function renderErrorAsJSON(res, error){
  res
    .status(
      error instanceof ExpectedError ? 400 : 500
    )
    .json({
      error: {
        message: error.message,
        stack: error.stack,
      }
    })
}


function streamServerSentEvents(req, res, observable){
  let closed = false
  let subscription
  const close = () => {
    closed = true
    res.end()
    if (subscription) subscription.unsubscribe();
  }
  req.on('close', close)

  res.set({
    'Cache-Control': 'no-cache',
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive'
  })
  res.flushHeaders()

  subscription = observable.subscribe({
    next(entry) {
      entry = JSON.stringify(JSON.parse(entry), null, 2)
      res.write(entry)
      res.write('\n')
    },
    error(error) {
      console.error('sse error', error)
      close()
    },
    complete() {
      console.log('sse done')
      close()
    },
  });
}