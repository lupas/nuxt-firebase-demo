<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Performance
    </h3>
    <div class="links">
      <p
        class="button--green"
        @click="checkPerformance()"
      >{{ traceStarted ? "In Progress" : "Start Trace"}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traceStarted: false
    };
  },
  methods: {
    async checkPerformance() {
      const trace = this.$firePerf.trace("testTrace");
      trace.start();
      this.traceStarted = true;
      console.log("Firebase Performance Trace Start");
      const ctx = this;
      setTimeout(function() {
        for (let step = 0; step < 100; step++) {
          // Runs x times
        }
        trace.stop();
        console.log("Firebase Performance Trace Stop");
        ctx.traceStarted = false;
      }, 2000);
    }
  }
};
</script>
