import { JlinxActor } from './actor.js'

export class JlinxApp extends JlinxActor {
  constructor (opts) {
    super(opts)
    this.host = opts.host
  }

  get __inspectFields () {
    return [
      ['did', 'string'],
      ['host', 'string'],
    ]
  }

  async loginUserViaAgent (agentEmail) {
    agentEmail

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

}
