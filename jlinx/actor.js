import fetch from 'node-fetch'
import { customInspect } from './node-inspect.js'
import { didToPublicKey, openDidKey } from './dids.js'
import {
  encodePayload,
  decodePayload,
} from './crypto.js'

export class JlinxActor {

  static async open(opts) {
    opts.did = await openDidKey(opts.secretSeed)
    return new this(opts)
  }

  constructor ({ did }) {
    this._did = did
  }

  get did () { return this._did.id }
  get publicKey () { return this.did.split(':')[2] }
  get publicKeyBytes () { return didToPublicKey(this.did) }

  __inspectFields () {
    return [
      ['did', 'string'],
    ]
  }

  async createJWS(signable){
    if (typeof signable !== 'object')
      throw new Error(`signable must be an object`)
    return await this._did.createJWS(signable)
  }

  async verifyJWS(jws){
    return await this._did.verifyJWS(jws)
  }

  async createJWE(payload, dids){
    return await this._did.createJWE(payload, dids)
  }

  async decryptJWE(jwe){
    return await this._did.decryptJWE(jwe)
  }

  async sign(signable){
    return await this.createJWS(signable)
  }

  async verifySignature(jws){
    const decoded = await this.verifyJWS(jws)
    return decoded.payload
  }

  async encrypt(payload, dids){
    return await this.createJWE(encodePayload(payload), dids)
  }

  async decrypt(jwe){
    return decodePayload(await this.decryptJWE(jwe))
  }

  async getDIDDocument () {
    const { didDocument } = await this._did.resolve(this.did)
    return didDocument
  }

  async resolveDID(did){
    return await this._did.resolve(did)
  }

  async fetch(url, options = {}){
    const res = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Referer': process.env.APP_ORIGIN, // move to JlinxApp
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-DID': this.did,
      },
    })
    return await res.json()
  }

  async httpPost(url, payload, options = {}) {
    return await this.fetch(url, {
      ...options,
      method: 'POST',
      body: JSON.stringify(payload),
    })
  }

  async httpGet(url, params = {}, options = {}) {
    return await this.fetch(url, {
      ...options,
      method: 'GET',
    })
  }

}

customInspect(JlinxActor)
