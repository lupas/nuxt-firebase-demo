<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Realtime Database
    </h3>
    <div class="links">
      <v-btn color="primary" outlined @click="writeToRealtimeDb()"
        >Write to Realtime DB</v-btn
      >
      <pre>
async writeToRealtimeDb() {
  const messageRef = this.$fireDb.ref('message')
  try {
    await messageRef.set({
      message: 'Nuxt-Fire with Firebase Realtime Database rocks!'
    })
  } catch (e) {
    alert(e)
    return
  }
  alert('Success.')
}</pre
      >
      <v-btn color="primary" outlined @click="readFromRealtimeDb()"
        >Read from Realtime DB</v-btn
      >
      <pre>
async readFromRealtimeDb() {
  const messageRef = this.$fireDb.ref('message')
  try {
    const snapshot = await messageRef.once('value')
    alert(snapshot.val().message)
  } catch (e) {
    alert(e)
    return
  }
}</pre
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  methods: {
    async writeToRealtimeDb() {
      const messageRef = this.$fireDb.ref('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firebase Realtime Database rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromRealtimeDb() {
      const messageRef = this.$fireDb.ref('message')
      try {
        const snapshot = await messageRef.once('value')
        alert(snapshot.val().message)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
})
</script>
