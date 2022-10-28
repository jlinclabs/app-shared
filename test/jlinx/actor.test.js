import test from 'brittle'

import { decodeKey } from '../../jlinx/crypto.js'
import { Actor } from '../../jlinx/actor.js'


test.solo('opening an actor', async t => {
  const actor = await Actor.open({
    secretSeed: decodeKey('ucdvQeYJeqOzh1p5ouLaxDXzkiiquRErWHSnPGXZBcAI'),
  })
  console.log({ actor })

  t.ok(actor instanceof Actor)
  t.is(actor.did, 'did:key:z6MkfYHUAqe58vjZp8kXwvmH8H5zCbSPvzLhUfSDym4RE4sN')
  t.is(actor.publicKey, 'z6MkfYHUAqe58vjZp8kXwvmH8H5zCbSPvzLhUfSDym4RE4sN')
})
