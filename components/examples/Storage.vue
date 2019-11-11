<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Storage
    </h3>
    <div class="links">
      <v-btn
        color="primary"
        outlined
        @click="uploadFile()"
      >Upload File</v-btn>
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
      <v-btn
        color="primary"
        outlined
        @click="getFileUrl()"
      >Get File URL</v-btn>
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
      const storageRef = this.$fireStorage.ref().child("message.txt");
      const message = "Nuxt-Fire with Firebase Storage rocks!";
      try {
        const snapshot = await storageRef.putString(message);
        alert("File uploaded.");
      } catch (e) {
        alert(e.message);
      }
    },
    async getFileUrl() {
      const storageRef = this.$fireStorage.ref().child("message.txt");
      try {
        const url = await storageRef.getDownloadURL();
        alert(`The file can be found here: ${url}`);
      } catch (e) {
        alert(e.message);
      }
    }
  }
};
</script>
