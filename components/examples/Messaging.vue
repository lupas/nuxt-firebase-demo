<template>
  <v-row>
    <v-col cols="12" class="links">
      <h3 class="display-1 mb-5">
        Firebase Messaging
      </h3>
      <v-btn
        :disabled="listenersStarted"
        color="primary"
        outlined
        @click="startListeners"
        >Start Listeners</v-btn
      >
      <v-btn
        :disabled="permissionGranted || !listenersStarted"
        color="primary"
        outlined
        @click="requestPermission"
        >Request Permission</v-btn
      >
      <v-btn
        :disabled="!listenersStarted || !permissionGranted || idToken !== null"
        color="primary"
        outlined
        @click="getIdToken"
        >Get ID Token</v-btn
      >
    </v-col>
    <v-col cols="12">
      <p>ID Token:</p>
      {{ idToken }}
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      listenersStarted: false,
      permissionGranted: false,
      idToken: '' as string | null
    }
  },
  methods: {
    async requestPermission() {
      try {
        const permission = await Notification.requestPermission()
        this.permissionGranted = permission === 'granted'
      } catch (e) {
        console.error(e)
        return
      }
    },
    async getIdToken() {
      let currentToken
      try {
        currentToken = await this.$fireMess.getToken()
      } catch (e) {
        console.error('An error occurred while retrieving token. ', e)
        this.idToken = null
      }

      if (currentToken) {
        this.idToken = currentToken
      } else {
        // Show permission request.
        console.info(
          'No Instance ID token available. Request permission to generate one.'
        )
        // Show permission UI.
        //updateUIForPushPermissionRequired();
        this.idToken = null
      }
    },
    startListeners() {
      this.startOnMessageListener()
      this.startTokenRefreshListener()
      this.listenersStarted = true
    },
    startOnMessageListener() {
      this.$fireMess.onMessage((payload) => {
        console.info('Message received. ', payload)
      })
    },
    startTokenRefreshListener() {
      this.$fireMess.onTokenRefresh(async () => {
        try {
          const refreshedToken = await this.$fireMess.getToken()
          this.idToken = refreshedToken
        } catch (e) {
          console.error('Unable to retrieve refreshed token ', e)
        }
      })
    }
  }
})
</script>
