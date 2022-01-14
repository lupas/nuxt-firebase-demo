

export default async function (session) {
  await import(/* webpackChunkName: 'firebase-database' */'firebase/compat/database')

  const databaseService = session.database()

  return databaseService
}
