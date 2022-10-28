// import express from 'express'
// import test from 'brittle'
//
// import { generateSigningKeyPairSeed } from '../../jlinx/crypto.js'
// import { App } from '../../jlinx/app.js'
// import { Agent } from '../../jlinx/agent.js'
//
// const generateApp = async () => {
//   const http = express()
//   const host = await new Promise(() => {
//     http.server = http.listen(resolve => {
//       resolve(`localhost:${http.server.address().port}`)
//     })
//   })
//   const app = await App.open({
//     secretSeed: generateSigningKeyPairSeed(),
//     host,
//   })
//
//   http.get('/api/jlinx/v1/id')
//   return app
// }
//
// test('login to app using agent email', async t => {
//   const app = await generateApp('example.com')
//   t.ok(app instanceof App)
//   t.is(app.host, 'example.com')
// })
//
