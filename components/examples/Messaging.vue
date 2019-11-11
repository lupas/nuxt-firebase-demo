<template>
  <v-row>
    <h3 class="display-1 mb-5">
      Firebase Messaging
    </h3>
    <v-col
      cols="12"
      class="links"
    >
      <v-btn
        :disabled="listenerStarted"
        color="primary"
        outlined
        @click="startOnMessageListener"
      >Start Listener</v-btn>
      <v-btn
        :disabled="permissionGranted || !listenerStarted"
        color="primary"
        outlined
        @click="requestPermission"
      >Request Permission</v-btn>
      <v-btn
        :disabled="!listenerStarted || !permissionGranted || idToken !== null"
        color="primary"
        outlined
        @click="getIdToken"
      >Get ID Token</v-btn>
    </v-col>
    <v-col cols="12">
      <p>ID Token:</p>
      {{idToken}}
    </v-col>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    listenerStarted: false,
    permissionGranted: false,
    idToken: null
  }),
  methods: {
    async requestPermission() {
      this.startOnMessageListener();
      try {
        this.$fireMess.usePublicVapidKey(
          "BL_xoiuOe5vbb2vJkCNnuswn03NwCsyCkJUgRbuQA5tpg7J4E4z50MO8b-wrrad6fcysYAaFjHqU7D9o0oCWL8w"
        );
        const permission = await Notification.requestPermission();
        this.permissionGranted = permission === "granted";
      } catch (e) {
        console.error(e);
        return;
      }
    },
    async getIdToken() {
      let currentToken;
      try {
        currentToken = await this.$fireMess.getToken();
      } catch (e) {
        console.error("An error occurred while retrieving token. ", e);
        this.idToken = null;
      }

      if (currentToken) {
        this.idToken = currentToken;
      } else {
        // Show permission request.
        console.info(
          "No Instance ID token available. Request permission to generate one."
        );
        // Show permission UI.
        //updateUIForPushPermissionRequired();
        this.idToken = null;
      }
    },
    startOnMessageListener() {
      this.$fireMess.onMessage(payload => {
        console.log("Message received. ", payload);
      });
      this.listenerStarted = true;
    }
  }
};
</script>
