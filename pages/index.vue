<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" align="center">
        <logo />
        <h1 class="display-4 my-2 secondary--text">
          nuxt-fire
        </h1>
        <h1 class="display-2 mb-5 secondary--text">
          Demo
        </h1>
        <Badgens />
        <client-only>
          <GitHubButtons />
        </client-only>
        <p>
          by
          <a href="https://twitter.com/pascalluther" target="_blank"
            >Pascal Luther</a
          >
          / <a href="https://github.com/lupas" target="_blank">@lupas</a>
        </p>
      </v-col>

      <v-col
        v-for="component in exampleComponents"
        :key="component.__file"
        cols="12"
        md="7"
        align="center"
      >
        <hr />
        <component :is="component"></component>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Badgens from '~/components/Badgens.vue'
import GitHubButtons from '~/components/GitHubButtons.vue'
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

export default {
  components: {
    Logo,
    GitHubButtons,
    Auth,
    Firestore,
    Functions,
    RealTimeDatabase,
    Storage,
    Badgens,
    Performance,
    VuexStore,
    Analytics,
    RemoteConfig,
    Messaging
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
      VuexStore
    ]
  })
}
</script>

<style>
hr {
  border-color: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
}

pre {
  background-color: #f6f8fa;
  border-radius: 3px;
  font-size: 85%;
  line-height: 1.45;
  overflow: auto;
  padding: 16px;
  text-align: left;
  margin-top: 20px;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
}
</style>
