import test from 'brittle'

import { generateSigningKeypairSeed } from '../../jlinx/crypto.js'
import { App } from '../../jlinx/app.js'

const generateApp = async host =>
  App.open({
    secretSeed: generateSigningKeypairSeed(),
    host,
  })


test('opening an actor', async t => {
  const app = await generateApp('example.com')
  t.ok(app instanceof App)
  t.is(app.host, 'example.com')
})
