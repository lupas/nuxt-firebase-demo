<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Messaging
    </h3>
    <div class="links">
      <v-btn
        color="primary"
        outlined
        @click="requestPermission()"
      >Request Permission</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async requestPermission() {
      try {
        await this.$fireMess.requestPermission();
        alert("It worked, we could request for Permission!");
      } catch (e) {
        alert(e);
        return;
      }
    }
  }
};
</script>
