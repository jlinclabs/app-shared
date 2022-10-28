import { inspect } from 'node:util'
import test from 'brittle'

import { decodeKey, generateSigningKeypairSeed } from '../../jlinx/crypto.js'
import { JlinxApp } from '../../jlinx/app.js'

const secretSeed = decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI')

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
    secretSeed: generateSigningKeypairSeed(),
    host,
  })


test('opening an actor', async t => {
  const app = await generateApp('example.com')
  t.ok(app instanceof JlinxApp)
  t.is(app.host, 'example.com')
})

