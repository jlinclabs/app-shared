const INSPECT_SYMBOL = Symbol.for('nodejs.util.inspect.custom')

export function customInspect(_class){
  _class.prototype[INSPECT_SYMBOL] = inspect
}

function inspect(depth, opts){
  let fields = this.__inspectFields
  if (typeof fields === 'function') fields = fields.call(this)
  if (!fields) fields = []
  let indent = ''
  if (typeof opts.indentationLvl === 'number') { while (indent.length < opts.indentationLvl) indent += ' ' }
  let v = this.constructor.name + '(\n'
  for (const [field, type, value = this[field]] of fields)
    v += indent + `  ${field}: ` + opts.stylize(value, type) + '\n'
  v += indent + ')'
  return v
}