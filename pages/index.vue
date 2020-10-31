<template>
  <div class="max-w-full">
    <Logo />
    <h1 class="text-5xl text-opacity-75 text-gray-900 font-bold">
      @nuxtjs/firebase
    </h1>
    <h2 class="text-3xl uppercase text-opacity-75 text-gray-900 font-semibold">
      demo
    </h2>
    <p>
      by
      <a href="https://twitter.com/pascalluther" target="_blank"
        >Pascal Luther</a
      >
      / <a href="https://github.com/lupas" target="_blank">@lupas</a>
    </p>
    <div v-for="component in exampleComponents" :key="component.__file">
      <hr class="mt-5 mb-5" />
      <component :is="component"></component>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo/index.vue'
import Auth from '~/components/examples/Auth.vue'
import Firestore from '~/components/examples/Firestore.vue'
import Functions from '~/components/examples/Functions.vue'
import RealTimeDatabase from '~/components/examples/RealTimeDatabase.vue'
import Storage from '~/components/examples/Storage.vue'
import Performance from '~/components/examples/Performance.vue'
import VuexStore from '~/components/examples/VuexStore.vue'
import Analytics from '~/components/examples/Analytics.vue'
import RemoteConfig from '~/components/examples/RemoteConfig.vue'
import Messaging from '~/components/examples/Messaging.vue'

export default Vue.extend({
  components: {
    Logo,
    Auth,
    Firestore,
    Functions,
    RealTimeDatabase,
    Storage,
    Performance,
    VuexStore,
    Analytics,
    RemoteConfig,
    Messaging,
  },
  asyncData({ app }) {
    // INFO -> app.$fire.firestore etc. are accessible
  },
  data: () => ({
    exampleComponents: [
      Auth,
      Firestore,
      Functions,
      RealTimeDatabase,
      Storage,
      Performance,
      Analytics,
      RemoteConfig,
      Messaging,
      VuexStore,
    ],
  }),
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
