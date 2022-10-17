import Path from 'node:path'
const { default: { PrismaClient, PrismaClientKnownRequestError } } = await import(
  // TODO dry up this path with one in bin/app-shared.js
  Path.join(process.env.APP_PATH, 'server', '.prisma', 'index.js')
)
const client = new PrismaClient()
client.Error = PrismaClientKnownRequestError
export default client
