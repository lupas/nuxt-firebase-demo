<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Realtime Database
    </h3>
    <div class="links">
      <a class="button--green" @click="writeToRealtimeDb()">Write to Realtime DB</a>
      <a class="button--green" @click="readFromRealtimeDb()">Read from Realtime DB</a>
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
          message: 'Hallo'
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
        alert(`The message is: ${snapshot.val().message}`)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
}
</script>
