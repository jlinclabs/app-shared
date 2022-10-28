import { inspect } from 'node:util'
import test from 'brittle'

import { JlinxActor } from '../../jlinx/actor.js'
import { JlinxAgent } from '../../jlinx/agent.js'

const secretSeed = Buffer.from('fa3bc7e512b1621393facf1b74398357d9d943ddaa23bb6b608095f4ec9a6649', 'hex')

test('inspecting an agent', async t => {
  const agent = await JlinxAgent.open({ secretSeed })
  t.alike(
    inspect(agent),
    `JlinxAgent(\n` +
    `  did: did:key:z6Mkmb6wmuFjMV1ymxdYt9hswQa5CcAGttsmbbGDWvJ7XerH\n` +
    `)`
  )
})

test('agent is an actor', async t => {
  const agent = await JlinxAgent.open({ secretSeed })
  t.ok(agent instanceof JlinxAgent)
  t.ok(agent instanceof JlinxActor)
  t.ok(typeof agent.did === 'string')
  t.ok(typeof agent.resolveDID === 'function')
})


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
