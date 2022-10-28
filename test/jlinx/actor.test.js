import * as u8a from 'uint8arrays'
import test from 'brittle'

import { decodeKey, generateSigningKeypairSeed } from '../../jlinx/crypto.js'
import { JlinxActor } from '../../jlinx/actor.js'

const secretSeed = decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI')

const generateActor = async () =>
   await JlinxActor.open({
    secretSeed: generateSigningKeypairSeed()
  })

test('opening an actor', async t => {
  const actor = await JlinxActor.open({ secretSeed })
  t.ok(actor instanceof JlinxActor)
  t.is(actor.did, 'did:key:z6MkfYHUAqe58vjZp8kXwvmH8H5zCbSPvzLhUfSDym4RE4sN')
  t.is(actor.publicKey, 'z6MkfYHUAqe58vjZp8kXwvmH8H5zCbSPvzLhUfSDym4RE4sN')
  await t.exception(
    async () => await JlinxActor.open({ secretSeed: 'bad key' }),
    /ed25519: seed must be 32 bytes/
  )
})

test('signing', async t => {
  const actor = await JlinxActor.open({ secretSeed })

  const anObject = await actor.sign({  an: 'object' })
  t.alike(anObject, {
    payload: 'eyJhbiI6Im9iamVjdCJ9',
    signatures: [
      {
        protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa2ZZSFVBcWU1OHZqWnA4a1h3dm1IOEg1ekNiU1B2ekxoVWZTRHltNFJFNHNOI3o2TWtmWUhVQXFlNTh2alpwOGtYd3ZtSDhINXpDYlNQdnpMaFVmU0R5bTRSRTRzTiJ9',
        signature: 'IZmtP3IAM7H7zLnBXEnNhnV2Fg-KrVlCYx_vCqohzT0fux2DDRQKeNQs1ZOdRvaW-OgKTXnd9wtySwLY1Uw2AA'
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
