<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase RemoteConfig
    </h3>
    <div class="links">
      <v-btn color="primary" outlined @click="readRemoteConfig()"
        >Reads Remote Config</v-btn
      >
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
</pre
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async readRemoteConfig() {
      try {
        await this.$fireConfig.fetchAndActivate()
      } catch (e) {
        alert(e)
        return
      }
      console.info(this.$fireConfig)
      const exampleMessage = await this.$fireConfig.getValue('exampleMessage')
      alert(
        `Success. Read RemoteConfig parameter 'exampleMessage' is: ${exampleMessage._value}`
      )
    }
  }
}
</script>
