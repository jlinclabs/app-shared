#!/usr/bin/env node

import { generateKeypair } from '../server/crypto.js'

const kp = generateKeypair()

const toHex = key => Buffer.from(key).toString('hex')
const publicKey = toHex(kp.publicKey)
const secretKey = toHex(kp.secretKey)
const seed = toHex(kp.seed)

console.log(
  `{\n` +
  `  publicKey: Buffer.from('${publicKey}', 'hex'),\n` +
  `  secretKey: Buffer.from('${secretKey}', 'hex'),\n` +
  `  seed: Buffer.from('${seed}', 'hex'),\n` +
  `}\n`
)
