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
    console.log({email, host, publicKey})
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
    // TODO consider signing this request somehow
    const x = await this.httpGet(
      `https://${host}/api/jlinx/v1/login/${id}`,
    )
    console.log('RES PAYLOAD', x)
    const { jwe } = x
    console.log({jwe})
    const payload = await this.decrypt(jwe)
    console.log({payload})
    return payload
  }

}
