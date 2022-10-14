// import Prisma from '@prisma/client'
// instead import prisma build from APP_PATH
// needed when npm linking this lib for dev
const { default: Prisma } = await import(
  `${process.env.APP_PATH}/node_modules/.prisma/client/index.js`
)
const { PrismaClient, PrismaClientKnownRequestError } = Prisma

const client = new PrismaClient()
client.Error = PrismaClientKnownRequestError
export default client
