import fs from 'node:fs/promises'
import Path from 'path'
import readDirRecursive from 'recursive-readdir'
import prisma from './prisma.js'
import { InvalidArgumentError } from './errors.js'

export class Context {
  // static get queries(){ return this.prototype.queries}
  // static set queries(queries){
  //   this.prototype.queries = cloneAndBind(queries)
  // }
  // static get commands(){ return this.prototype.commands}
  // static set commands(commands){
  //   this.prototype.commands = cloneAndBind(commands)
  // }

  constructor({ session, userId, readOnly }){
    this.session = session
    this.userId = userId
    this.readOnly = !!readOnly
    this.queries = cloneAndBind(this.constructor.queries, this)
    this.commands = cloneAndBind(this.constructor.commands, this)
    if (process.env.NODE_ENV === 'development'){
      this.queries.__spec = getSpec.bind(null, {}, this)
    }
    // // TODO context.queries.auth.currentUser({}) // auto sets context as 2nd arg
  }

  async loginAs(userId){
    if (this.session) await this.session.loginAs(userId)
    this.userId = userId
  }

  async logout(){
    if (this.session) await this.session.logout()
    delete this.userId
  }

  async getCurrentUser(){
    return await prisma.user.findUnique({
      where: { id: this.userId },
      select: {
        id: true,
        createdAt: true,
        email: true,
      },
    })
  }

  async query(name, options){
    const handler = findProcedure(name, this.queries)
    if (!handler) throw new InvalidArgumentError('queryName', name)
    return await handler(options)
  }

  async command(name, options){
    if (this.readOnly) throw new Error(`cannot exec command in ready only session`)
    const handler = findProcedure(name, this.commands)
    if (!handler) throw new InvalidArgumentError('commandName', 'name')
    return await handler(options)
  }
}

export function createContext(opts){
  return new Context(opts)
}

function findProcedure(name, procedures){
  const parts = name.split('.')
  let handler = procedures
  while (handler && parts.length) handler = handler[parts.shift()]
  return handler
}


function cloneNestedFunctions(object, handler, keys = []){
  const clone = {}
  for (const key in object){
    const value = object[key]
    if (typeof value === 'function'){
      clone[key] = handler(value, key, [...keys, key])
    }else if (typeof value === 'object'){
      clone[key] = cloneNestedFunctions(value, handler, [...keys, key])
    }
  }
  return clone
}

function cloneAndBind(procedures, context){
  return cloneNestedFunctions(procedures, (func, name) => {
    const wrapper = ({
      [name](options){ return func(options, context) }
    })[name]
    wrapper.valueOf = () => func.valueOf()
    wrapper.toString = () => func.toString()
    return wrapper
  })
}

async function getSpec({}, context){
  const getArgs = func => func.toString().match(/\(([^)]*)/)[1]
  const spec = {}
  const inspectFunc = procedures => (func, name, keys) => {
    const fullName = keys.join('.')
    procedures[fullName] = {
      name: fullName,
      source: func.toString(),
      args: func.toString().match(/\(([^)]*)/)[1],
    }
  }
  spec.queries = {}
  cloneNestedFunctions(context.queries, inspectFunc(spec.queries))
  spec.commands = {}
  cloneNestedFunctions(context.commands, inspectFunc(spec.commands))
  return spec
}
