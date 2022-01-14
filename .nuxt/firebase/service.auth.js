

export default async function (session, firebase, ctx, inject) {
  await import(/* webpackChunkName: 'firebase-auth' */'firebase/compat/auth')

  const authService = session.auth()

  // Sets up a listener, mutations and action for every onAuthStateChanged by Firebase.
  const fireAuthStore = {
    unsubscribe() {
      if (this.unsubscribeAuthStateListener) {
        this.unsubscribeAuthStateListener()
        delete this.unsubscribeAuthStateListener
      }
      if (this.unsubscribeIdTokenListener) {
        this.unsubscribeIdTokenListener()
        delete this.unsubscribeIdTokenListener
      }
    },
    subscribe() {
      const promises = []

      promises.push(new Promise(resolve => {
        this.unsubscribeAuthStateListener = authService.onAuthStateChanged(async authUser => {
          const claims = authUser ? (await authUser.getIdTokenResult(true)).claims : null

          await ctx.store.dispatch("onAuthStateChanged", { authUser, claims })

          resolve()
        })
      }))

      return Promise.all(promises)
    }
  }
  inject('fireAuthStore', fireAuthStore)

  return authService
}
