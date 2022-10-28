// import test from 'brittle'
//
// import { Agent } from './agent.js'
// // import {
// //   isAgentEmail,
// // } from '../../shared/agents.js'
// //
// // import {
// //   decodeKey,
// //   generateSigningKeyPairFromSeed,
// // } from '../../server/crypto.js'
// //
// // import {
// //   publicKeyToAgentEmail,
// //   agentEmailToPublicKey,
// // } from '../../server/agents.js'
//
// test('agent emails', async t => {
//   const kp = generateSigningKeyPairFromSeed(decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI'))
//   const email = publicKeyToAgentEmail(kp.publicKey, 'example.test')
//   t.is(email, 'uSVhcLK34hZu6ZjrWml9qdD2IFDUuo2shVJYBJ-a9CRg@example.test')
//   t.ok(isAgentEmail(email))
//   t.alike(agentEmailToPublicKey(email), kp.publicKey)
// })
