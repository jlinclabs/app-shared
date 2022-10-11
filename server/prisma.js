import Prisma from '@prisma/client'
// import { Prisma, PrismaClient } from '@prisma/client'
const { PrismaClient } = Prisma

const client = new PrismaClient()
client.Error = Prisma.PrismaClientKnownRequestError
export default client
