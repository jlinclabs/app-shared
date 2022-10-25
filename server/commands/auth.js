import bcrypt from 'bcrypt'
import { isEmail, isPassword } from '../../validators.js'
import { InvalidArgumentError } from '../errors.js'

export async function signup({ email, password }, context) {
  await validateSignup({ email, password }, context)
  await _createUser({ email, password }, context)
}

export async function validateSignup({ email, password }, context) {
  console.log('SIGNUP', { email, password })
  if (context.userId)
    throw new Error(`please logout first`)

  if (password && !isPassword(password))
    throw new InvalidArgumentError('password')

  if (email && !isEmail(email))
    throw new InvalidArgumentError('email', email)
}

export async function _createUser({ email, password, ...fields }, context){
  const { id } = await context.prisma.user.create({
    data: {
      ...fields,
      email,
      passwordHash: password && await hashPassword(password),
    },
    select: {
      id: true,
    }
  })
  await context.loginAs(id)
  return { id }
}

export async function _findUserByEmail({ email, select }, context){
  return await context.prisma.user.findUnique({
    where: { email },
    select: {
      id: true,
      passwordHash: true,
      ...select,
    },
  })
}


export async function login({ email, password }, context){
  console.log('LOGIN', { email, password, context })
  if (context.userId)
    throw new Error(`please logout first`)
  const record = await context.commands.auth._findUserByEmail({ email })
  const passwordMatches = (
    record &&
    await checkPassword(password, record.passwordHash)
  )
  if (!passwordMatches) throw new InvalidArgumentError(`email or password`)
  await context.loginAs(record.id)
  return { userId: record.id }
}

export async function logout({}, context){
  await context.logout()
  return null
}

async function hashPassword(password){
  return await bcrypt.hash(password, 10)
}
async function checkPassword(password, passwordHash){
  return await bcrypt.compare(password, passwordHash)
}
