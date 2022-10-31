import { JlinxActor } from './actor.js'

export class JlinxApp extends JlinxActor {
  constructor (opts) {
    super(opts)
    this.host = opts.host
  }

  get did () { return `did:web:${this.host}` }

  async getDIDDocument() {
    // TODO eventually support more than one key EXAMPLE: https://w3c-ccg.github.io/did-method-web/#examples
    const { didDocument } = await this._did.resolve(this._did.id)
    didDocument.id = this.did
    return didDocument
  }

  async fetch(url, options = {}) {
    return super.fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        'Referer': `https://${this.host}`,
      },
    })
  }

  async loginWithAgentEmail(email) {
    const [publicKey, host] = email.split('@')
    const did = `did:key:${publicKey}`
    const jws = await this.createJWS({did}, [did])
    const {jwe} = await this.httpPost(
      `https://${host}/api/jlinx/v1/login`,
      {jws}
    )
    const {
      loginAttemptId,
      checkStatusAt,
      profile,
    } = await this.decrypt(jwe)
    return {
      email, host, publicKey, loginAttemptId, checkStatusAt, profile,
    }
  }

  async waitForLoginRequestResult({ host, id }){
    return await this.httpGetJWE(
      `https://${host}/api/jlinx/v1/login/${id}`,
    )
  }

  async getAgentProfile({ host, did }){
    return await this.httpGetJWE(
      `https://${host}/api/jlinx/v1/profile/${did}`,
    )
  }

  async getDocument({ host, id }){
    return await this.httpGetJWE(
      `https://${host}/api/jlinx/v1/documents/${id}`,
    )
  }

  async createDocument({ host, did, name, value }){
    const { jwe } = await this.httpPost(
      `https://${host}/api/jlinx/v1/documents`,
      { did, name, value },
    )
    return await this.decrypt(jwe)
  }

  async updateDocument({ host, did, id, name, value }){
    console.log('app.js#updateDocument', { host, did, id, name, value })
    const { jwe } = await this.httpPost(
      `https://${host}/api/jlinx/v1/documents/${id}`,
      { did, id, name, value },
    )
    return await this.decrypt(jwe)
  }
}
