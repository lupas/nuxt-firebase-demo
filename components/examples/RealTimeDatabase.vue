<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Realtime Database
    </h3>
    <div class="links">
      <a class="button--green" @click="writeToRealtimeDb()">Write to Realtime DB</a>
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
}</pre>
      <a class="button--green" @click="readFromRealtimeDb()">Read from Realtime DB</a>
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
}</pre>
    </div>
  </div>
</template>

<script>
export default {
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
}
</script>
