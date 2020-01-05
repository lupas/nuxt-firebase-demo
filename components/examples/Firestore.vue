<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Firestore
    </h3>
    <div class="links">
      <v-btn color="primary" outlined @click="writeToFirestore()"
        >Write to Firestore</v-btn
      >
      <pre>
async writeToFirestore() {
  const messageRef = this.$fireStore.collection('message').doc('message')
  try {
    await messageRef.set({
      message: 'Nuxt-Fire with Firestore rocks!'
    })
  } catch (e) {
  alert(e)
  return
  }
  alert('Success.')
}
      </pre>
      <v-btn color="primary" outlined @click="readFromFirestore()"
        >Read from Firestore</v-btn
      >
      <pre>
async readFromFirestore() {
  const messageRef = this.$fireStore.collection('message').doc('message')
  try {
    const messageDoc = await messageRef.get()
    alert(messageDoc.data().message)
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
    async writeToFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firestore rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },
    async readFromFirestore() {
      const messageRef = this.$fireStore.collection('message').doc('message')
      try {
        const snapshot = await messageRef.get()
        const doc = snapshot.data()
        if (!doc) {
          alert('Document does not exist.')
          return
        }
        alert(doc.message)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
})
</script>
