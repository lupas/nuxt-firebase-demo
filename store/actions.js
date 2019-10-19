export default {
  nuxtServerInit: function({}, ctx) {
    if (this.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
    }

    if (ctx.$fireAuth === null) {
      throw 'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
    }

    console.info(
      'Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___ and ctx.$fire___'
    )
  },
  checkVuexStore: function({ commit, state, rootState }) {
    if (this.$fireAuth === null) {
      throw 'Vuex Store example not working - this.$fireAuth cannot be accessed.'
    }

    alert(
      'Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
    return
  }
}
