import test from 'brittle'
import * as u8a from 'uint8arrays'
import {
  decodeKey,
  encodeKey,
  generateSigningKeyPairFromSeed,
  generateSigningKeypair,
  generateSigningKeypairSeed,
  isEncodedPublicKey,
  sign,
  signObject,
  validateSigningKeypair,
} from '../../server/crypto.js'

import {
  generateDid,
  openDid,
} from '../../server/dids.js'

test('generateDid', async t => {
  const { did: did1 } = await generateDid()
  const { did: did2 } = await generateDid()
  const { didDocument: did1Document } = await did2.resolve(did1.id)
  // t.alike(did1Document, {
  //
  // })
  const { didDocument: did2Document } = await did1.resolve(did2.id)
  // t.alike(did2Document, {
  //
  // })
})

test('openDid', async t => {
  // const did = await openDid(decodeKey('uazp-KuM6UhNjwJAEcINMQWjNHNt3EITud8gTX-bjwoA'))
  const did = await openDid(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
  t.is(did.id, 'did:key:z6Mkohzvynz3wokVqogYHQtdXNBWNt6j8apVPLdkArvfdDKV')
})

test('create a JWS', async t => {
  const did = await openDid(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
  const jws = await did.createJWS({ hello: 'world' })
  t.alike(jws, {
    payload: 'eyJoZWxsbyI6IndvcmxkIn0',
    signatures: [
      {
        protected: 'eyJhbGciOiJFZERTQSIsImtpZCI6ImRpZDprZXk6ejZNa29oenZ5bnozd29rVnFvZ1lIUXRkWE5CV050Nmo4YXBWUExka0FydmZkREtWI3o2TWtvaHp2eW56M3dva1Zxb2dZSFF0ZFhOQldOdDZqOGFwVlBMZGtBcnZmZERLViJ9',
        signature: 'bHMLue80oY02RicsN0tWayYE6nDPxpOJR4COoPigFAvBpaLjieIGph-vXn9wOlqPokSdGHGyV7y-fJWCLVikCA'
      }
    ],
  })
  t.alike(
    (await did.verifyJWS(jws)).payload,
    { hello: 'world' },
  )
})

test('create a JWE', async t => {
  const p1 = {}
  const p2 = {}
  p1.did = await openDid(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
  p2.did = await openDid(Buffer.from('6583da6b813e32022deae4fca4931fcc3502e05e4d4f131765bee0154542fb05', 'hex'))

  const jwe1 = await p1.did.createJWE(u8a.fromString('hello p2'), [p2.did.id])
  t.is(u8a.toString(await p2.did.decryptJWE(jwe1)), 'hello p2')
  await t.exception(async () => { await p1.did.decryptJWE(jwe1) }, 'Failed to decrypt')
})
