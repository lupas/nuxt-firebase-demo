<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Analytics
    </h3>
    <div class="links">
      <a
        class="button--green"
        @click="logEvent()"
      >Log Event</a>
      <pre>
async logEvent() {
  try {
    await this.$fireAnalytics.logEvent('analytics_button_clicked')
  } catch (e) {
    alert(e)
  }
}</pre>
      <p class="mt-1">This will log an event in Firebase Analytics.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async logEvent() {
      try {
        await this.$fireAnalytics.logEvent("analytics_button_clicked");
        alert("Event 'analytics_button_clicked' logged to Google Analytics");
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>
