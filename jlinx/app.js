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

  // async loginUserViaAgent (agentEmail) {
  //   agentEmail
  // }

}
