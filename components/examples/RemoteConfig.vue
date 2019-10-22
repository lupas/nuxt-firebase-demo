<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase RemoteConfig
    </h3>
    <div class="links">
      <a
        class="button--green"
        @click="readRemoteConfig()"
      >Reads Remote Config</a>
      <pre>
async readRemoteConfig() {
  try {
    await this.$fireConfig.fetchAndActivate();
  } catch (e) {
  alert(e);
  return;
  }
  const exampleMessage = await this.$fireConfig.getValue("exampleMessage");
  alert(
  `Success. Read RemoteConfig parameter 'exampleMessage' is: ${exampleMessage._value}`
  );
}
</pre>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async readRemoteConfig() {
      try {
        await this.$fireConfig.fetchAndActivate();
      } catch (e) {
        alert(e);
        return;
      }
      const exampleMessage = await this.$fireConfig.getValue("exampleMessage");
      alert(
        `Success. Read RemoteConfig parameter 'exampleMessage' is: ${exampleMessage._value}`
      );
    }
  }
};
</script>