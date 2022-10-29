import * as u8a from 'uint8arrays'
import test from 'brittle'

import {
  // decodeKey,
  // encodeKey,
  generateKeyPairFromSeed,
  // generateKeypair,
  // generateKeyPairSeed,
  isEncodedPublicKey,
  // sign,
  // signObject,
  // validateKeypair,
  encodePayload,
  decodePayload,
} from '../../jlinx/crypto.js'

test('generating keys from seed is deterministic', async t => {
  const seed = Buffer.from('6b608095f4ec9a6649fa3bc7e512b1621393facf1b74398357d9d943ddaa23bb', 'hex')
  t.alike(Array.from(seed), [
    107,  96, 128, 149, 244, 236, 154, 102,
    73, 250,  59, 199, 229,  18, 177,  98,
    19, 147, 250, 207,  27, 116,  57, 131,
    87, 217, 217,  67, 221, 170,  35, 187
  ])
  const keys = generateKeyPairFromSeed(seed)
  t.alike(
    keys.publicKey,
    u8a.fromString('9a351583c0f6e1c22920e068e59396a26e8e50b66649ea5e07fd7098f1bad70a', 'hex')
  )
  t.alike(Array.from(keys.secretKey), [
    107,  96, 128, 149, 244, 236, 154, 102,  73, 250,  59,
    199, 229,  18, 177,  98,  19, 147, 250, 207,  27, 116,
     57, 131,  87, 217, 217,  67, 221, 170,  35, 187, 154,
     53,  21, 131, 192, 246, 225, 194,  41,  32, 224, 104,
    229, 147, 150, 162, 110, 142,  80, 182, 102,  73, 234,
     94,   7, 253, 112, 152, 241, 186, 215,  10
  ])
})


// test('key regexp patterns', async t => {
//   const genEncodedPublicKey = () =>
//     encodeKey(
//       generateKeyPairFromSeed(
//         generateKeypairSeed()
//       ).publicKey
//     )
//
//   console.log(
//     new Array(10).fill().map(genEncodedPublicKey)
//   )
// })

test('isEncodedPublicKey', async t => {
  t.ok(isEncodedPublicKey('kjzl6cwe1jw1462gsz9f56jwywi0w5ltv2k3rbhyfmnveac8mbwgu9dthltm2ug'))
  t.ok(isEncodedPublicKey('kjzl6cwe1jw1479qsc6k0c42t0zj4u2vn5i8b9zhpb4piudl6wqy5vhon10bpkm'))
  t.ok(isEncodedPublicKey('zGazA93NK9kx4C6eoWgBy97Yjw9GtRMGvtn4ahSzYx7Aa'))
  t.ok(isEncodedPublicKey('ucdqBGGQc2YyYsl_PyecOFaal7-FkOuYuOAONx8YTe2w'))
})

// test('key encoding', async t => {
//   // const { did, secretSeed } = await createDid()
//   // const { publicKey, secreyKey } = generateKeyPairFromSeed(secretSeed)
//   // const encodedPublicKey = did.id.split(':')[2]
//
// })

// test('decoding did:3:xxxxxxx', async t => {
//   t.alike(
//     decodeKey('kjzl6cwe1jw1462gsz9f56jwywi0w5ltv2k3rbhyfmnveac8mbwgu9dthltm2ug'),
//     Buffer.from([1,2,3])
//   )
// })

// test('key regexp patterns', async t => {
//   const {did, secretSeed} = await createDid()
//   console.log({did: did.id})
//   const encodedPublicKey = did.id.split(':')[2]
//   console.log({ encodedPublicKey })
//   console.log({ publicKey: decodeKey(encodedPublicKey) })
// })


// test('validateKeypair', async t => {
//   const kp = generateKeypair()
//   t.ok(validateKeypair(kp))
// })

test('encoding signable objects', async t => {

  const testCase = value => {
    let encoded = encodePayload(value)
    t.ok(encoded instanceof Uint8Array)
    t.alike(
      decodePayload(encoded),
      value
    )
  }

  testCase('a')
  testCase(10)
  testCase({ an: 'object' })
})