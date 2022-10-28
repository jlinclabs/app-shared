import { inspect } from 'node:util'
import test from 'brittle'

import { generateKeyPairSeed } from '../../jlinx/crypto.js'
import { JlinxApp } from '../../jlinx/app.js'

const secretSeed = Buffer.from('b74398357d9d943ddaa23bb6b608095f4fa3bc7e512b1621393facf1ec9a6649', 'hex')

test('inspecting an agent', async t => {
  const actor = await JlinxApp.open({ secretSeed, host: 'example.com' })
  t.alike(
    inspect(actor),
    `JlinxApp(\n` +
    `  did: did:web:example.com\n` +
    `)`
  )
})

const generateApp = async host =>
  JlinxApp.open({
    secretSeed: generateKeyPairSeed(),
    host,
  })


test('opening an actor', async t => {
  const app = await generateApp('example.com')
  t.ok(app instanceof JlinxApp)
  t.is(app.host, 'example.com')
})

