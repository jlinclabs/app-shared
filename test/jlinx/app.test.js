import test from 'brittle'

import { generateSigningKeypairSeed } from '../../jlinx/crypto.js'
import { JlinxApp } from '../../jlinx/app.js'

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
