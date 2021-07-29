<template>
  <Login />
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'
import Login from "../components/login/Google.vue"


export default Vue.extend({
  components: {
    Login
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
