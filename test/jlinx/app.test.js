import { inspect } from 'node:util'
import test from 'brittle'
import wait from '../../shared/wait.js'

import { createHTTPSServer} from '../testServers.js'


import { generateKeyPairSeed } from '../../jlinx/crypto.js'
import { webResolver } from '../../jlinx/dids.js'
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

const generateApp = async t => {
  const server = await createHTTPSServer(t)
  t.teardown(() => { server.close() })

  const app =await JlinxApp.open({
    secretSeed: generateKeyPairSeed(),
    host: server.host,
  })

  server.get('/.well-known/did.json', async (req, res) => {
    const didDocument = await app.getDIDDocument()
    res.json(didDocument)
  })
  return app
}

test('opening an actor', async t => {
  const app = await generateApp(t)
  t.ok(app instanceof JlinxApp)
  t.is(app.host, 'example.com')
})

test('app.getDIDDocument returns a did:web document', async t => {
  const actor = await JlinxApp.open({
    secretSeed,
    host: 'web3.example.com',
  })
  t.is(actor.did, `did:web:web3.example.com`)
  const didDocument = await actor.getDIDDocument()
  t.is(didDocument.id, actor.did)
})

test.solo('exchanging JWEs', async t => {
  const left = await generateApp(t)
  const right = await generateApp(t)
  console.log({ left, right })

  // await wait(30_000)
  const { didDocument } = await left.resolveDID(right.did)

  const jwe1 = await left.createJWE(
    {msg:'how dare you!'},
    [right.did]
  )

  console.log('jwe1', jwe1 )

  const payload1 = await right.decryptJWE(jwe1)
  console.log('payload1', payload1 )


})
