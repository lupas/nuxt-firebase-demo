<template>
 
  <v-container fill-height  fluid>
  <v-row justify="center" align="center">
    <v-col cols="12" xs="12" sm="8" md="6" lg="4" xl="4">
     
         <v-img 
         class="mb-5"
         max-height="100px"
         contain
          src="logo_500.png"
        ></v-img>

         <Login /> 
      

      
    </v-col>
  </v-row>
    



  </v-container>

  
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import Login from "../components/login/Google.vue"


export default Vue.extend({
  layout: "loginlayout",
  middleware: 'islogedin',
  components: {
    Login
  },
  computed: {
    // Map `auth` state to a local property so we can access it locally.
    ...mapGetters({isLoggedIn: 'isLoggedIn'})

  },
  watch: {
    isLoggedIn(value) {
      // Redirect the user to the home page once user is authenticated.
      // We know user is authenticated if `auth` contains a value, which
      // is automatically updated when user's state changes.
      // @see actions.setAuth in store/index.js
      // @see plugins/firebase.js

      if (value) {
        this.$router.push({
          path: '/main'
        })
       
      }
    }
  },
  async asyncData({ app }) {
    // INFO -> app.$fire.firestore etc. are accessible
    const messageRef = app.$fire.firestore.collection('message').doc('message')
    try {
      const snapshot = await messageRef.get()
      const doc = snapshot.data()
      if (!doc) {
        // console.info('Document does not exist.')
        return
      }
      // console.info(doc.message)
    } catch (e) {
      console.error(e)
    }
  },

 })

</script>

<style></style>
