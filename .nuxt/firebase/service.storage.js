

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-storage' */'firebase/compat/storage')

  const storageService = session.storage()

  return storageService
}
