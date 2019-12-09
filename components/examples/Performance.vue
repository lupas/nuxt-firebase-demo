<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Performance
    </h3>
    <div class="links">
      <v-btn color="primary" outlined @click="checkPerformance()">{{
        traceStarted ? 'In Progress' : 'Start Trace'
      }}</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traceStarted: false
    }
  },
  methods: {
    async checkPerformance() {
      const trace = this.$firePerf.trace('testTrace')
      trace.start()
      this.traceStarted = true
      console.info('Firebase Performance Trace Start')
      const ctx = this
      setTimeout(function() {
        for (let step = 0; step < 100; step++) {
          // Runs x times
        }
        trace.stop()
        console.info('Firebase Performance Trace Stop')
        ctx.traceStarted = false
      }, 2000)
    }
  }
}
</script>
