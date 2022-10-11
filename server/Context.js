import fs from 'node:fs/promises'
import Path from 'path'
import readDirRecursive from 'recursive-readdir'
import prisma from './prisma.js'
import { InvalidArgumentError } from './errors.js'

export class Context {
  static set queries(queries){
    this.prototype.queries = cloneAndBind(queries)
  }
  static set commands(commands){
    this.prototype.commands = cloneAndBind(commands)
  }

  constructor({ session, userId, readOnly }){
    this.session = session
    this.userId = userId
    this.readOnly = !!readOnly
    // this.queries = cloneAndBind(queries, this)
    // this.commands = cloneAndBind(commands, this)
    if (process.env.NODE_ENV === 'development'){
      this.queries.__spec = getSpec.bind(null, {}, this)
    }
    // // TODO context.queries.auth.currentUser({}) // auto sets context as 2nd arg
    // // this.queries = new ProxyThing(queries)
    // // this.commands = new ProxyThing(commands)
    // console.log('new Context', this)
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


function cloneNestedFunctions(object, handler){
  const clone = {}
  for (const key in object){
    const value = object[key]
    if (typeof value === 'function'){
      clone[key] = handler(value, key)
    }else if (typeof value === 'object'){
      clone[key] = cloneNestedFunctions(value, handler)
    }
  }
  return clone
}

function cloneAndBind(procedures){
  return cloneNestedFunctions(procedures, (func, name) => {
    console.log('WRAPING FUNC', { func, name })
    const wrapper = ({
      [name](options){ return func(options, this) }
    })[name]
    wrapper.wrapper = true
    wrapper.toString = () => func.toString()
    console.log({ wrapper })
    return wrapper
  })
}

async function getSpec({}, context){
  const getArgs = func => func.toString().match(/\(([^)]*)/)[1]
  const spec = {}
  const inspectFunc = (func, name) => {
    console.log('ISN???', { func, name }, func.toString())
    return {
      now: Date.now(),
      name,
      source: func.toString(),
      args: func.toString().match(/\(([^)]*)/)[1],
    }
  }
  spec.queries = cloneNestedFunctions(context.queries, inspectFunc)
  spec.commands = cloneNestedFunctions(context.commands, inspectFunc)
  // spec.queries = Object.keys(this.queries)
  //   .filter(n => n !== '__spec')
  //   .map(name => ({
  //     name,
  //     args: getArgs(queries[name])
  //   }))
  // spec.commands = Object.keys(this.commands)
  //   .map(name => ({
  //     name,
  //     args: getArgs(commands[name])
  //   }))
  console.log('SPEC!', JSON.stringify(spec))
  return spec
}


// async function importProcedures(subdir){
//   const root = Path.join(process.env.APP_PATH, 'server', subdir)
//   try{ await fs.stat(root) }catch(e){ return [] }
//   const paths = (await readDirRecursive(root))
//     .map(path => ({
//       root,
//       path,
//       parts: path.match(/(.+).js$/),
//     }))
//     .filter(p => p.parts)

//   const modules = await Promise.all(
//     paths.map(({path}) => import(path))
//   )

//   const procedures = {}
//   paths.forEach(({root, parts}, index) => {
//     const name = parts[1].replace(root+'/', '')
//     let module = modules[index]
//     if (typeof module.default === 'object'){
//       module = module.default
//     }
//     for (const key in module){
//       if (key === 'default'){
//         procedures[name] = module.default
//       }else{
//         procedures[`${name}.${key}`] = module[key]
//       }
//     }
//   })
//   return procedures
// }
