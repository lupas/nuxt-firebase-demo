export default {
  checkVuexStore: function({ commit, state, rootState }) {
    if (
      this.$fireAuth !== null &&
      this.$fireStore !== null &&
      this.$fireDb !== null &&
      this.$fireFunc !== null &&
      this.$fireStorage !== null
    ) {
      alert(
        'Nuxt-fire Objects can be accessed in store actions via this.$fire___'
      )
    }
    return
  }
}
