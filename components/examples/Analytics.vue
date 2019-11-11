<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Analytics
    </h3>
    <div class="links">
      <v-btn
        color="primary"
        outlined
        @click="logEvent()"
      >Log Event</v-btn>
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
