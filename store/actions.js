import { getAuthUserFromCookie } from 'nuxt-fire/src/helpers'
import Cookie from 'js-cookie'

export default {
  nuxtServerInit({ commit }, ctx) {
    if (this.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
    }

    if (ctx.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    if (ctx.app.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    console.info(
      'Success. Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
    )

    const authUser = getAuthUserFromCookie({ commit, req: ctx.req })
    if (authUser) {
      commit('SET_AUTH_USER', {
        authUser
      })
    }
  },
  checkVuexStore({ commit, state, rootState }) {
    if (this.$fireAuth === null) {
      throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
    return
  },

  async logoutUser({ commit, dispatch }) {
    try {
      await this.$fireAuth.signOut()
    } catch (e) {
      // Do nothing, not properly signed in anyway.
      console.error(e)
    } finally {
      // Reset store
      commit('RESET_STORE')
      // Remove Cookie
      Cookie.remove('nuxt_fire_auth_access_token')
    }
  }
}
