import { inspect } from 'node:util'
import test from 'brittle'

import { JlinxAgent } from '../../jlinx/agent.js'
import { decodeKey, generateSigningKeypairSeed } from '../../jlinx/crypto.js'

const secretSeed = decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI')

test('inspecting an agent', async t => {
  const actor = await JlinxAgent.open({ secretSeed })
  t.alike(
    inspect(actor),
    `JlinxAgent(\n` +
    `  did: did:key:z6MkfYHUAqe58vjZp8kXwvmH8H5zCbSPvzLhUfSDym4RE4sN\n` +
    `)`
  )
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
