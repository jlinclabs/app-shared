export async function get(options, context){
  return {
    id: context.session.id,
    userId: context.userId,
  }
}

