<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Functions
    </h3>
    <div class="links">
      <a class="button--green" @click="callTestFunction()">Call Test Function</a>
      <p class="mt-1">Might take some seconds.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async callTestFunction() {
      try {
        const res = await this.$fireFunc.httpsCallable('testFunction')()
        alert(res.data.message)
      } catch (e) {
        alert(e)
        return
      }
    }
  }
}
</script>