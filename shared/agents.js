/*
 * Browser compatible agents functions
 */
import { base64url } from 'multiformats/bases/base64'
import { isEmail } from './emails.js'

const PCT_ENCODED = '(?:%[0-9a-fA-F]{2})'
const ID_CHAR = `(?:[a-zA-Z0-9._-]|${PCT_ENCODED})`
const METHOD_ID = `((?:${ID_CHAR}*:)*(${ID_CHAR}+))`
const encodedPublicKeyRegExp = new RegExp(`^${METHOD_ID}$`)

// const AGENT_EMAIL_REGEXP = new RegExp(`^([a-zA-Z0-9_-]+)@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$`)
export function isAgentEmail(email){
  return isEmail(email) && /^[a-zA-Z0-9_-]{32,64}@.+/.test(email)
}

export function isEncodedPublicKey(key) {
  return encodedPublicKeyRegExp.test(key)
}

export function encodeKey(key){
  return base64url.encode(key)
}

export function decodeKey(key){
  return base64url.decode(key)
}

export function agentEmailToPublicKey(email){
  const encoded = email.match(/^([a-zA-Z0-9_-]{32,64})@.+/)[1]
  return decodeKey(encoded)
}
