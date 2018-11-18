<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Firestore
    </h3>
    <div class="links">
      <a class="button--green" @click="writeToFirestore()">Write to Firestore</a>
      <a class="button--green" @click="readFromFirestore()">Read from Firestore</a>
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
          message: 'Hallo'
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
        alert(`The message is: ${messageDoc.data().message}`)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
}
</script>
