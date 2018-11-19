<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Storage
    </h3>
    <div class="links">
      <a class="button--green" @click="uploadFile()">Upload File</a>
      <pre>
async uploadFile() {
  const storageRef = this.$fireStorage.ref().child('message.txt')
  const message = 'Nuxt-Fire with Firebase Storage rocks!'
  try {
    const snapshot = await storageRef.putString(message)
    alert('File uploaded.')
  } catch (e) {
    alert(e.message)
  }
}
      </pre>
      <a class="button--green" @click="getFileUrl()">Get File URL</a>
      <pre>
async getFileUrl() {
  const storageRef = this.$fireStorage.ref().child('message.txt')
  try {
    const url = await storageRef.getDownloadURL()
    alert(`The file can be found here: ${url}`)
  } catch (e) {
    alert(e.message)
  }
}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async uploadFile() {
      const storageRef = this.$fireStorage.ref().child('message.txt')
      const message = 'Nuxt-Fire with Firebase Storage rocks!'
      try {
        const snapshot = await storageRef.putString(message)
        alert('File uploaded.')
      } catch (e) {
        alert(e.message)
      }
    },
    async getFileUrl() {
      const storageRef = this.$fireStorage.ref().child('message.txt')
      try {
        const url = await storageRef.getDownloadURL()
        alert(`The file can be found here: ${url}`)
      } catch (e) {
        alert(e.message)
      }
    }
  }
}
</script>
