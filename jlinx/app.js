import { JlinxActor } from './actor.js'

export class JlinxApp extends JlinxActor {
  constructor (opts) {
    super(opts)
    this.host = opts.host
  }

  get did () { return `did:web:${this.host}` }

  async getDidDocument() {
    const { didDocument } = this._did.resolve(this._did.id)
    return didKeyDocumentToDidWebDocument(didDocument, `did:web:${host}`)
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





// {
//   "didResolutionMetadata": {
//     "contentType": "application/did+json"
//   },
//   "didDocument": {
//     "id": "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF",
//     "verificationMethod": [
//       {
//         "id": "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF",
//         "type": "Ed25519VerificationKey2018",
//         "controller": "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF",
//         "publicKeyBase58": "6gapbus6bJPNL5gQoPSdhpTdEtKh8bN249iyg7z3iZ2s"
//       }
//     ],
//     "authentication": [
//       "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF"
//     ],
//     "assertionMethod": [
//       "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF"
//     ],
//     "capabilityDelegation": [
//       "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF"
//     ],
//     "capabilityInvocation": [
//       "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF"
//     ],
//     "keyAgreement": [
//       {
//         "id": "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF#z6LSewKxAWZh6PtrPQp7yru7sjtWdWB9nGDTZuUJuWa95Fs4",
//         "type": "X25519KeyAgreementKey2019",
//         "controller": "did:key:z6Mkk8qsCA7XvqsqSaX7UxQUYv1d4TbYYUcNkAduWPx4dmpF",
//         "publicKeyBase58": "4G9neCkpzwB7J2SMTDPAZ9g2nMe35f3JgvkdR3vcMt6J"
//       }
//     ]
//   },
//   "didDocumentMetadata": {
//
//   }
// }