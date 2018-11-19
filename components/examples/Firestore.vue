<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Firestore
    </h3>
    <div class="links">
      <a class="button--green" @click="writeToFirestore()">Write to Firestore</a>
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
      <a class="button--green" @click="readFromFirestore()">Read from Firestore</a>
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
}</pre>
    </div>
  </div>
</template>

<script>
export default {
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
        const messageDoc = await messageRef.get()
        alert(messageDoc.data().message)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
}
</script>
