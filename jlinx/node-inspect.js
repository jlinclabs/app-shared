export function nodeInspect(_this, depth, opts, fields){
  let indent = ''
  if (typeof opts.indentationLvl === 'number') { while (indent.length < opts.indentationLvl) indent += ' ' }
  let v = _this.constructor.name + '(\n'
  for (const [field, type, value = _this[field]] of fields)
    v += indent + `  ${field}: ` + opts.stylize(value, type) + '\n'
  v += indent + ')'
  return v
}

nodeInspect.key = Symbol.for('nodejs.util.inspect.custom')


export function customInspect(_class, getFields){
  _class.prototype[nodeInspect.key] = function(depth, opts){
    return nodeInspect(this, depth, opts, getFields.call(this))
  }
}