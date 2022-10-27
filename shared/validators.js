
export const isPassword = password => (
  typeof password === 'string' &&
  /^.{6,256}$/.test(password)
)
