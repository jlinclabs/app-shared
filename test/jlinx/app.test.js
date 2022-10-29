import { inspect } from 'node:util'
import test from 'brittle'
import wait from '../../shared/wait.js'

import { createHTTPSServer} from '../testServers.js'


import { generateKeyPairSeed } from '../../jlinx/crypto.js'
import { resolveDID } from '../../jlinx/dids.js'
import { JlinxApp } from '../../jlinx/app.js'

const secretSeed = Buffer.from('b74398357d9d943ddaa23bb6b608095f4fa3bc7e512b1621393facf1ec9a6649', 'hex')

test('inspecting an app', async t => {
  const app = await JlinxApp.open({ secretSeed, host: 'example.com' })
  t.alike(
    inspect(app),
    `JlinxApp(\n` +
    `  did: did:web:example.com\n` +
    `)`
  )
})

const generateApp = async t => {
  const server = await createHTTPSServer(t)
  t.teardown(() => { server.close() })

  const secretSeed = generateKeyPairSeed()

  const app = await JlinxApp.open({
    secretSeed,
    host: server.host,
  })

  server.get('/.well-known/did.json', async (req, res) => {
    const didDocument = await app.getDIDDocument()
    res.json(didDocument)
  })
  return app
}

test('opening an app', async t => {
  const app = await JlinxApp.open({ secretSeed, host: 'example.com' })
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

test('exchanging JWEs', async t => {
  const left = await generateApp(t)
  const right = await generateApp(t)
  const other = await generateApp(t)

  const jwe1 = await left.encrypt(
    {msg:'how dare you!'},
    [right.did]
  )

  t.alike(
    await right.decrypt(jwe1),
    {msg:'how dare you!'},
  )

  await t.exception(
    async () => { await other.decrypt(jwe1) },
    /Failed to decrypt/,
  )
})

test('resolving did:web dids', async t => {
  const left = await generateApp(t)
  const right = await generateApp(t)

  const { didDocument: rightDidDocument } = await left.resolveDID(right.did)
  t.is(rightDidDocument.id, right.did)
  const { didDocument: leftDidDocument } = await right.resolveDID(left.did)
  t.is(leftDidDocument.id, left.did)

  t.alike((await resolveDID(right.did)).didDocument, rightDidDocument)
  t.alike((await resolveDID(left.did)).didDocument, leftDidDocument)
})
