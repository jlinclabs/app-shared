// import Prisma from '@prisma/client'
// instead import prisma build from APP_PATH
// needed when npm link'ing this lib for dev
const Prisma = await import(
  `${process.env.APP_PATH}/node_modules/.prisma/client/index.js`
)
const { PrismaClient } = Prisma

const client = new PrismaClient()
client.Error = Prisma.PrismaClientKnownRequestError
export default client
