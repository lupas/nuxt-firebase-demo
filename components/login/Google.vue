<template>
 <v-card dark >
    <v-card-title class="mb-5" style="word-break:break-word">Login</v-card-title>
        <v-card-text>
          
            <v-btn 
                v-if="!isLoggedIn"
                        color="primary"
                        class="my-5"
                        block
                        @click="googleSignIn"
                    >
                    Sign In with Google
              </v-btn>
          
            <div v-else>
              <v-btn 
                        color="primary"
                        class="my-5"
                        block
                        @click="googleLogout"
                    >
                    Logout
              </v-btn>
              <p>You are logged in with {{ authUser.email }}.</p>
            </div>   
        </v-card-text>

      </v-card>
  

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
