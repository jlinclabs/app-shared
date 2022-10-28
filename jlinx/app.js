import { Actor } from './actor.js'

export class App extends Actor {
  constructor (opts) {
    super(opts)
    this.host = opts.host
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