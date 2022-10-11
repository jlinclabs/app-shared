import Path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import Router from 'express-promise-router'

import { ExpectedError } from './errors.js'
import { loadSession } from './session.js'
import discovery from './discovery.js'
import { Context } from './Context.js'

// import { loadSession } from './controller.js'
// import { loadQueries, loadCommands } from './cqrs.js'

export async function createServer(){

  const app = express()

  console.log('LOADING QUERIES AND COMMANDS')
  Context.queries = await discovery.importQueries()
  Context.commands = await discovery.importCommands()
  console.log(Context)

  app.start = function(){
    app.server = app.listen(process.env.PORT, () => {
      const { port } = app.server.address()
      const host = `http://localhost:${port}`
      console.log(`Listening on port ${host}`)
    })
  }

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

  console.log('SERVER INDEX v7')

  // TODO
  // do most of the looking into $APP_PATH/server for stuff to load
  // - look for APP_DIR/server/routes.js and load them
  // - look for APP_DIR/server/queries/* and load them
  // - look for APP_DIR/server/commands/* and load them
  // LATER
  // - look for APP_DIR/server/index.js and expect default func to pass app
  // - rename Controller to Context
  // - look for APP_DIR/server/context.js and use it instead of Context base class

  if (await discovery.serverRoutesExists()){
    const handler = await discovery.importServerRoutesHandler()
    let router = new Router()
    router = await handler(router) || router
    app.use('/api', router)
  }

  app.use('/api/:name', async function(req, res, next) {
    const { name } = req.params
    let options, action
    if (req.method === 'GET'){
      action = 'query'
      options = req.query
    }else if (req.method === 'POST'){
      action = 'command'
      options = req.body
    }else{
      return next()
    }
    console.log(action, { name, options })
    try{
      const result = await req.context[action](name, options)
      console.error(`${action} SUCCESS`, { name, options, result })
      res.status(200).json({ result })
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
