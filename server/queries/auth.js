export async function getCurrentUser({}, context){
  return await _selectCurrentUser({}, context)
  // return await context.queries.auth._selectCurrentUser()
}

export async function _selectCurrentUser(select, context){
  if (!context.userId) return null
  return await context.prisma.user.findUnique({
    where: { id: context.userId },
    select: {
      id: true,
      createdAt: true,
      email: true,
      ...select,
    }
  })
}
