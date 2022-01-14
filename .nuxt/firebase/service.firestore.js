

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-firestore' */'firebase/compat/firestore')

  const firestoreService = session.firestore()

  // persistence should only be enabled client side
  if (process.client) {
    try {
      await firestoreService.enablePersistence({})
    } catch (err) {
      if (err.code == 'failed-precondition') {
        console.warn('[@nuxtjs/firebase]: Firestore Persistence not enabled. Multiple tabs open, persistence can only be enabled in one tab at a a time.')
      } else if (err.code == 'unimplemented') {
        console.info('[@nuxtjs/firebase]: Firestore Persistence not enabled. The current browser does not support all of the features required to enable persistence.')
      }
    }
  }

  return firestoreService
}
