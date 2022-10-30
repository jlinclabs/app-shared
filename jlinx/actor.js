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

  async createJWS(object){
    if (typeof object !== 'object')
      throw new Error(`first argument must be an object`)
    return await this._did.createJWS(object)
  }

  async verifyJWS(jws){
    return await this._did.verifyJWS(jws)
  }

  async sign(object){
    return await this.createJWS(object)
  }

  async verifySignature(jws){
    const decoded = await this.verifyJWS(jws)
    return decoded.payload
  }

  async createJWE(bytes, dids){
    if (!(bytes instanceof Uint8Array))
      throw new Error(`first argument must be a Uint8Array`)
    return await this._did.createJWE(bytes, dids)
  }

  async decryptJWE(jwe){
    return await this._did.decryptJWE(jwe)
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
    let res
    try {
      res = await fetch(url, {
        ...options,
        headers: {
          ...options.headers,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-DID': this.did,
        },
      })
      const contentType = res.headers.get('content-type')
      if (!/application\/json/.test(contentType))
        throw new Error(`expected Content-Type: application/json, got ${contentType}`)
      if (!res.ok) throw new Error(`${res.statusText}`)
      return await res.json()
    }catch(err){
      console.error(err)
      const error = new Error(`failed to fetch "${url}" ${err}`)
      error.originialError = err
      error.res = res
      throw error
    }
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
