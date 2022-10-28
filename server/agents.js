import { encodeKey, decodeKey } from './crypto.js'

export function agentEmailToPublicKey(email){
  const encoded = email.match(/^([a-zA-Z0-9_-]{32,64})@.+/)[1]
  return decodeKey(encoded)
}

export function publicKeyToAgentEmail(publicKey, domain){
  return `${encodeKey(publicKey)}@${domain}`
}