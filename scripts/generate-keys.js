#!/usr/bin/env node

import { generateSigningKeypair } from '../jlinx/crypto.js'

const kp = generateSigningKeypair()

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
