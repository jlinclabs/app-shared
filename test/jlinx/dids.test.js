import test from 'brittle'
import * as u8a from 'uint8arrays'

import {
  resolveDID,
  generateDidKey,
  openDidKey,
} from '../../jlinx/dids.js'

test('resolving a known good did:web did', async t => {
  t.alike(
    await resolveDID('did:web:mattr.global'),
    {
      didDocument: {
        id: 'did:web:mattr.global',
        '@context': 'https://w3.org/ns/did/v1',
        publicKey: [
          {
            id: 'did:web:mattr.global#5F5Q1qJbbv',
            type: 'Ed25519VerificationKey2018',
            controller: 'did:web:mattr.global',
            publicKeyBase58: '5F5Q1qJbbvcyhnStAmkjF5rUBKe1XnHJHt2Tj49tTDpW',
          }
        ],
        keyAgreement: [
          {
            id: 'did:web:mattr.global#GnxxE5rAFY',
            type: 'X25519KeyAgreementKey2019',
            controller: 'did:web:mattr.global',
            publicKeyBase58: 'GnxxE5rAFYoRS6af7XArmzh7gNS68XTAKjhNDRsfhrFJ',
          }
        ],
        authentication: [ 'did:web:mattr.global#5F5Q1qJbbv' ],
        assertionMethod: [ 'did:web:mattr.global#5F5Q1qJbbv' ],
        capabilityDelegation: [ 'did:web:mattr.global#5F5Q1qJbbv' ],
        capabilityInvocation: [ 'did:web:mattr.global#5F5Q1qJbbv' ]
      },
      didDocumentMetadata: {},
      didResolutionMetadata: { contentType: 'application/did+ld+json' }
    }
  )
})

test('resolving did:key did', async t => {
  t.alike(
    await resolveDID('did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1'),
    {
      didResolutionMetadata: { contentType: 'application/did+json' },
      didDocument: {
        id: 'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1',
        verificationMethod: [
          {
            id: 'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1',
            type: 'Ed25519VerificationKey2018',
            controller: 'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1',
            publicKeyBase58: 'D2SWfb17ifDrLKbFKwADs8Le2p3pXYiokAibLaKWqAdd'
          }
        ],
        authentication: [
          'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1'
        ],
        assertionMethod: [
          'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1'
        ],
        capabilityDelegation: [
          'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1'
        ],
        capabilityInvocation: [
          'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1'
        ],
        keyAgreement: [
          {
            id: 'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1#z6LSnXrekmVEqVzFRSFGdMRNYzHuxoL6KujCd5CWu4fZQW5b',
            type: 'X25519KeyAgreementKey2019',
            controller: 'did:key:z6MkrUhZFqFZ4CiKSpRx1W84iDtdrPKfwRyASBdXArHXkPR1',
            publicKeyBase58: 'BrgVETgNk3GWL3sW6huREQ5S7enydJZ3k6UqQc22h8Jq'
          }
        ]
      },
      didDocumentMetadata: {}
    }
  )
})


test('generateDidKey', async t => {
  const { did: did1 } = await generateDidKey()
  const { did: did2 } = await generateDidKey()
  const { didDocument: did1Document } = await did2.resolve(did1.id)
  // t.alike(did1Document, {
  //
  // })
  const { didDocument: did2Document } = await did1.resolve(did2.id)
  // t.alike(did2Document, {
  //
  // })
})

test('openDidKey', async t => {
  // const did = await openDidKey(decodeKey('uazp-KuM6UhNjwJAEcINMQWjNHNt3EITud8gTX-bjwoA'))
  const did = await openDidKey(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
  t.is(did.id, 'did:key:z6Mkohzvynz3wokVqogYHQtdXNBWNt6j8apVPLdkArvfdDKV')
})

test('create a JWS', async t => {
  const did = await openDidKey(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
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
  p1.did = await openDidKey(Buffer.from('2deae4fca4931fcc3502e05e4d4f131765bee0154542fb056583da6b813e3202', 'hex'))
  p2.did = await openDidKey(Buffer.from('6583da6b813e32022deae4fca4931fcc3502e05e4d4f131765bee0154542fb05', 'hex'))

  const jwe1 = await p1.did.createJWE(u8a.fromString('hello p2'), [p2.did.id])
  t.is(u8a.toString(await p2.did.decryptJWE(jwe1)), 'hello p2')
  await t.exception(async () => { await p1.did.decryptJWE(jwe1) }, 'Failed to decrypt')
})
