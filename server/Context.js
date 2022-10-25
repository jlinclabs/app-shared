import fs from 'node:fs/promises'
import Path from 'path'
import readDirRecursive from 'recursive-readdir'
import prisma from './prisma.js'
import { InvalidArgumentError, UnauthorizedError } from './errors.js'

export class Context {
  constructor({ session, userId, readOnly }){
    this.session = session
    this.userId = userId
    this.readOnly = !!readOnly
    this.queries = cloneAndBind(this.constructor.queries, this)
    if (!this.readOnly)
      this._commands = cloneAndBind(this.constructor.commands, this)
    // // TODO context.queries.auth.currentUser({}) // auto sets context as 2nd arg
  }

  get commands(){
    if (this.readOnly) throw new Error(`cannot exec command in ready only session`)
    return this._commands
  }
  get prisma(){ return prisma }

  async loginAs(userId){
    if (this.userId === userId) return
    await this.logout()
    if (this.session) await this.session.loginAs(userId)
    this.userId = userId
  }

  async logout(){
    if (this.session) await this.session.logout()
    delete this.userId
  }

  requireLoggedIn(action){
    if (this.userId) return true
    throw new UnauthorizedError(action)
  }

  async publicCall(action, name, options){
    const procedures = (
      action === 'query' ? this.queries :
      action === 'command' ? this.commands :
      null
    )
    console.log({ name })
    const handler = !isPrivateProcedure(name) &&
      findProcedure(name, procedures)
    if (!handler) throw new InvalidArgumentError('queryName', name)
    return await handler(options)
  }
}

export function isPrivateProcedure(name){
  return name.match(/(^|\.)_/)
}

function findProcedure(name, procedures){
  const parts = name.split('.')
  let handler = procedures
  while (handler && parts.length) handler = handler[parts.shift()]
  return handler
}

export function cloneNestedFunctions(object, handler, keys = []){
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
      [name](options = {}){ return func(options, context) }
    })[name]
    wrapper.valueOf = () => func.valueOf()
    wrapper.toString = () => func.toString()
    return wrapper
  })
}

// function devQueries(context) {
//   return cloneAndBind({
//     async cantCommandFromQueryTest({}, context){
//       context.commands // should throw
//     },
//
//     async getQueriesAndCommands ({}, context) {
//       // const getArgs = func => func.toString().match(/\(([^)]*)/)[1]
//       const spec = {}
//       const inspectFunc = procedures => (func, name, keys) => {
//         const fullName = keys.join('.')
//         procedures[fullName] = {
//           name: fullName,
//           source: func.toString(),
//           args: func.toString().match(/\(([^)]*)/)[1],
//         }
//       }
//       spec.queries = {}
//       cloneNestedFunctions(Context.queries, inspectFunc(spec.queries))
//       spec.commands = {}
//       cloneNestedFunctions(Context.commands, inspectFunc(spec.commands))
//       return spec
//     },
//   }, context)
// }
