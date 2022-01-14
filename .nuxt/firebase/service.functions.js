

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-functions' */'firebase/compat/functions')

  const functionsService = session.functions()

  return functionsService
}
