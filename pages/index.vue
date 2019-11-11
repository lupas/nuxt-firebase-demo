<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-fire
      </h1>
      <Badgens class="fullwidth" />
      <client-only>
        <GitHubButtons class="fullwidth" />
      </client-only>
      <p class="mediumText">by <a
          href="https://twitter.com/pascalluther"
          target="_blank"
        >Pascal Luther</a> / <a
          href="https://github.com/lupas"
          target="_blank"
        >@lupas</a></p>
      <h2 class="subtitle demoText">
        Demo
      </h2>
      <Auth />
      <Firestore />
      <Functions />
      <RealTimeDatabase />
      <Storage />
      <Performance />
      <Analytics />
      <RemoteConfig />
      <Messaging />
      <VuexStore />
      <div class="mt-5">
        <p class="mediumText">
          Credits (for this page):
        </p>
        <p class="smallText">
          <a
            href="https://www.npmjs.com/package/vue-github-buttons"
            target="_blank"
          >vue-github-buttons</a>
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Badgens from "~/components/Badgens.vue";
import GitHubButtons from "~/components/GitHubButtons.vue";
import Auth from "~/components/examples/Auth.vue";
import Firestore from "~/components/examples/Firestore.vue";
import Functions from "~/components/examples/Functions.vue";
import RealTimeDatabase from "~/components/examples/RealTimeDatabase.vue";
import Storage from "~/components/examples/Storage.vue";
import Performance from "~/components/examples/Performance.vue";
import VuexStore from "~/components/examples/VuexStore.vue";
import Analytics from "~/components/examples/Analytics.vue";
import RemoteConfig from "~/components/examples/RemoteConfig.vue";
import Messaging from "~/components/examples/Messaging.vue";

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
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.sectionTitle {
  font-weight: 200;
  font-size: 38px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.mediumText {
  font-weight: 200;
  font-size: 20px;
  color: #526488;
  word-spacing: 3px;
  padding-bottom: 25px;
}

.smallText {
  font-weight: 100;
  font-size: 15px;
  color: #526488;
}

.links {
  padding-top: 15px;
}

hr {
  border-color: #ffffff;
  margin-bottom: 30px;
  margin-top: 30px;
}

.mt-1 {
  margin-top: 8px;
}

.mt-5 {
  margin-top: 25px;
}

body {
  padding-top: 50px;
  padding-bottom: 50px;
}

.button--green {
  cursor: pointer;
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

.fullwidth {
  width: 100%;
}

.demoText {
  padding-bottom: 0;
}

a {
  text-decoration: none;
}
</style>
