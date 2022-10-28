import { Resolver, parse as parseDID } from 'did-resolver'
// import { base58btc } from 'multiformats/bases/base58'
import { getResolver } from 'web-did-resolver'
import { DID } from 'dids'
import { Ed25519Provider, encodeDID } from 'key-did-provider-ed25519'
import KeyResolver from 'key-did-resolver'

import { generateSigningKeypairSeed } from './crypto.js'
export { parseDID, encodeDID }

// const didResolver = new Resolver({
//     ...webResolver
//     //...you can flatten multiple resolver methods into the Resolver
// })

export async function generateDid(){
  const secretSeed = generateSigningKeypairSeed()
  const did = await openDid(secretSeed)
  return { secretSeed, did }
}

export async function openDid(secretSeed) {
  const provider = new Ed25519Provider(secretSeed)
  const did = new DID({ provider, resolver: KeyResolver.getResolver() })
  // Authenticate with the provider
  await did.authenticate()
  return did
}



//
// function example2() {
//   const webResolver = getResolver()
//
//   const didResolver = new Resolver({
//     ...webResolver
//     //...you can flatten multiple resolver methods into the Resolver
//   })
//
//   didResolver.resolve('did:web:uport.me').then(doc => console.log(doc))
//
//   // You can also use ES7 async/await syntax
//   ;(async () => {
//     const doc = await didResolver.resolve('did:web:uport.me')
//     console.log(doc)
//   })();
//
// }
//
//
//
//
//
// export async function getDid(didString, secretSeed){
//
//
//   const did = new DID({
//     provider: threeID.getDidProvider(),
//     resolver: {
//       ...getDid3IDResolver(ceramic),
//       ...getDidKeyResolver(),
//     },
//   })
//
//   // THIS IS ALSO QUITE SLOW
//   console.log('[ceramic] authenticating did', { did })
//   await did.authenticate()
//
//   if (did.id !== didString){
//     throw new Error(`resolved the wrong did: "${did.id}" !== "${didString}"`)
//   }
//   return did
// }
