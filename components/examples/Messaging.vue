<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Messaging
    </h3>
    <div class="links">
      <p
        class="button--green"
        @click="requestPermission()"
      >Request Permission</p>
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
