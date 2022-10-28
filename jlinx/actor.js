import { customInspect } from './node-inspect.js'
import { openDidKey } from './dids.js'
import { makeEncryptable } from './crypto.js'

export class Actor {

  static async open({ secretSeed }) {
    const did = await openDidKey(secretSeed)
    return new this({ did })
  }

  constructor ({ did }) {
    this._did = did
  }

  get did () { return this._did.id }
  get publicKey () { return this.did.split(':')[2] }

  async createJWS(signable){
    return await this.did.createJWS(signable)
  }

  async verifyJWS(jws){

  }

  async createJWE(payload, dids){
    return await this.did.createJWE(makeEncryptable(payload), dids)
  }

  async decryptJWE(jwe){

  }

  async sign(){

  }

  async verifySignature(){

  }

  async encrypt(payload, dids){

  }

  async decrypt(jwe){

  }

  async resolveDID(did){
    return await this._did.resolve(did)
  }

}

customInspect(Actor, function(){
  return [
    ['did', 'string'],
  ]
})
