import { inspect } from 'node:util'
import test from 'brittle'

import { generateKeyPairSeed } from '../../jlinx/crypto.js'
import { JlinxActor } from '../../jlinx/actor.js'

const secretSeed = Buffer.from('57d9d943ddaa23bb6b608095f4ec9a6649fa3bc7e512b1621393facf1b743983', 'hex')


const generateActor = async () =>
   await JlinxActor.open({
    secretSeed: generateKeyPairSeed()
  })

test('opening an actor', async t => {
  const actor = await JlinxActor.open({ secretSeed })
  t.ok(actor instanceof JlinxActor)
  t.is(actor.did, 'did:key:z6MkiUVFMeKUyiAvAMYkjvN1CmZ15vjZoMyDqchHekpUoLEK')
  t.is(actor.publicKey, 'z6MkiUVFMeKUyiAvAMYkjvN1CmZ15vjZoMyDqchHekpUoLEK')
  await t.exception(
    async () => await JlinxActor.open({ secretSeed: 'bad key' }),
    /ed25519: seed must be 32 bytes/
  )
})

test('inspecting an actor', async t => {
  const actor = await JlinxActor.open({ secretSeed })
  t.alike(
    inspect(actor),
    `JlinxActor(\n` +
    `  did: did:key:z6MkiUVFMeKUyiAvAMYkjvN1CmZ15vjZoMyDqchHekpUoLEK\n` +
    `)`
  )
})


test('signing', async t => {
  const actor = await JlinxActor.open({ secretSeed })

  const anObject = await actor.sign({  an: 'object' })
  t.alike(anObject, {
    payload: 'eyJhbiI6Im9iamVjdCJ9',
    signatures: [
      {
        protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2lVVkZNZUtVeWlBdkFNWWtqdk4xQ21aMTV2alpvTXlEcWNoSGVrcFVvTEVLI3o2TWtpVVZGTWVLVXlpQXZBTVlranZOMUNtWjE1dmpab015RHFjaEhla3BVb0xFSyJ9',
        signature: 'xHUraWKxm8Ktk7n_WgF0GEV6R2a-2yFTL6HL8Cctb2DdT7zdYgyNlzmo6SnuNSZr4htYXmNQ4q8bTvr0PRk_AA'
      }
    ]
  })
 t.alike(
   (await actor.verifySignature(anObject)),
    { an: 'object' }
  )
})

test('signing between actors', async t => {
  const alice = await generateActor()
  const bob = await generateActor()

  const jws1 = await alice.sign({ size: 12 })
  t.alike(
    await bob.verifySignature(jws1),
    { size: 12 },
  )

  const jws2 = await bob.sign({
    contract: 'give me your data',
  })
  t.alike(
    await alice.verifySignature(jws2),
    { contract: 'give me your data' },
  )
})

test('encrypting between actors', async t => {
  const alice = await generateActor()
  const bob1 = await generateActor()
  const bob2 = await generateActor()

  const jwe1 = await alice.encrypt(
    { secret: 124 },
    [bob1.did, bob2.did]
  )
  t.alike(
    await bob1.decrypt(jwe1),
    { secret: 124 },
  )
  t.alike(
    await bob2.decrypt(jwe1),
    { secret: 124 },
  )

  const jwe2 = await alice.encrypt(
    { secret: 9989 },
    [bob1.did]
  )
  t.alike(
    await bob1.decrypt(jwe2),
    { secret: 9989 },
  )
  await t.exception(
    async () => { await bob2.decrypt(jwe2) },
    /Failed to decrypt/
  )
})
