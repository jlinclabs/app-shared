import { Context, cloneNestedFunctions, isPrivateProcedure } from '../Context.js'

export async function cantCommandFromQueryTest({}, context){
  context.commands // should throw
}

export async function getQueriesAndCommands ({}, context) {
  // const getArgs = func => func.toString().match(/\(([^)]*)/)[1]
  const spec = {}
  const inspectFunc = procedures => (func, name, keys) => {
    const fullName = keys.join('.')
    if (isPrivateProcedure(name)) return
    procedures[fullName] = {
      name: fullName,
      source: func.toString(),
      args: func.toString().match(/\(([^)]*)/)[1],
    }
  }
  spec.queries = {}
  cloneNestedFunctions(Context.queries, inspectFunc(spec.queries))
  spec.commands = {}
  cloneNestedFunctions(Context.commands, inspectFunc(spec.commands))
  return spec
}

export async function ping(options, ctx){
  return {
    pong: true,
    options,
  }
}
