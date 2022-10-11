export async function ping(options, ctx){
  return {
    pong: true,
    options,
  }
}

