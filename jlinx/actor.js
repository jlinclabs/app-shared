import { customInspect } from './node-inspect.js'
import { openDidKey } from './dids.js'
import {
  makeEncryptable,
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

  async resolveDID(did){
    return await this._did.resolve(did)
  }

  async fetch(url, body, options = {}){
    return await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'X-DID': this.did,
      },
    })
  }

  async getJSON(url, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        ...options.headers,
      },
    })
  }

  async postJSON(url, payload, options = {}) {
    return this.fetch(url, {
      ...options,
      method: 'POST',
      body: await this.sign(payload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        ...options.headers,
      },
    })
  }
}

customInspect(JlinxActor)
