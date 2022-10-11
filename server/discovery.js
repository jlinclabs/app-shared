import Path from 'node:path'
import fs from 'node:fs/promises'
import readDirRecursive from 'recursive-readdir'

export default {
  get root () { return process.env.APP_PATH },

  get routesPath () { return `${this.root}/server/routes.js` },

  async serverRoutesExists(){
    // todo look for .js .csj and .mjs
    return await fileExists(this.routesPath)
  },

  async importServerRoutesHandler(){
    const { default: handler } = await import(this.routesPath)
    return handler
  },

  async importQueries(){
    return await importProcedures('queries')
  },

  async importCommands(){
    return await importProcedures('commands')
  },
}

async function fileExists(path){
  try{
    await fs.stat(path)
    return true
  }catch(e){
    return false
  }
}

async function importProcedures(subdir){
  const root = Path.join(process.env.APP_PATH, 'server', subdir)
  try{ await fs.stat(root) }catch(e){ return [] }
  const paths = (await readDirRecursive(root))
    .map(path => ({
      root,
      path,
      parts: path.match(/(.+).js$/),
    }))
    .filter(p => p.parts)

  const modules = await Promise.all(
    paths.map(({path}) => import(path))
  )

  const procedures = {}
  paths.forEach(({root, parts}, index) => {
    const name = parts[1].replace(root+'/', '')
    let { default:_, ...module} = modules[index]
    console.log('???', module)
    // if (typeof module.default === 'object'){
    //   module = module.default
    // }
    procedures[name] = module
    // for (const key in module){
    //   procedures[`${name}.${key}`] = module[key]
    // }
  })
  return procedures
}


