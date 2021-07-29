<template>
  <div>
    <button v-if="!isLoggedIn" class="bg-blue-800 p-5 rounded shadow" @click="googleSignIn">
      Sign In with Google
    </button>
    <div v-else>
      <p>You are logged in with {{ authUser.email }}.</p>
      <Btn color="primary" outlined @click="googleLogout">Logout</Btn>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import firebase from 'firebase'

export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  },

  methods: {
    async googleSignIn() {
      try {
        const provider = new firebase.auth.GoogleAuthProvider();
        const result = await this.$fire.auth.signInWithPopup(provider)
        let token = result.credential;
        let user = result.user
        console.log(user)
    } catch (error) {
        alert(error)
    }},
    async googleLogout(){
       try {
        await this.$fire.auth.signOut()
      } catch (e) {
        alert(e)
      }
    }

  },
})
</script>

<style></style>
