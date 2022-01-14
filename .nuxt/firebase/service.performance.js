

export default async function (session) {
  // Can only be initiated on client side
  if (!process.client) {
    return
  }

  await import(/* webpackChunkName: 'firebase-performance' */'firebase/compat/performance')

  const performanceService = session.performance()
  return performanceService
}
