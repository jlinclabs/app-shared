import test from 'brittle'

import { decodeKey, generateKeyPairFromSeed } from '../../server/crypto.js'
import { publicKeyToAgentEmail } from '../../server/agents.js'
import { isAgentEmail, agentEmailToPublicKey } from '../../shared/agents.js'

test('agent emails', async t => {
  const kp = generateKeyPairFromSeed(decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI'))
  const email = publicKeyToAgentEmail(kp.publicKey, 'example.test')
  t.is(email, 'uSVhcLK34hZu6ZjrWml9qdD2IFDUuo2shVJYBJ-a9CRg@example.test')
  t.ok(isAgentEmail(email))
  t.alike(agentEmailToPublicKey(email), kp.publicKey)
})
