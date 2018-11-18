<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-fire
      </h1>
      <h2 class="subtitle">
        Demo
      </h2>
      <no-ssr>
        <GitHubButtons />
      </no-ssr>
      <Auth />
      <Firestore />
      <Functions />
      <RealTimeDatabase />
      <Storage />
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import GitHubButtons from '~/components/GitHubButtons.vue'
import Auth from '~/components/examples/Auth.vue'
import Firestore from '~/components/examples/Firestore.vue'
import Functions from '~/components/examples/Functions.vue'
import RealTimeDatabase from '~/components/examples/RealTimeDatabase.vue'
import Storage from '~/components/examples/Storage.vue'

export default {
  components: {
    Logo,
    GitHubButtons,
    Auth,
    Firestore,
    Functions,
    RealTimeDatabase,
    Storage
  }
}
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
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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

body {
  padding-top: 50px;
  padding-bottom: 50px;
}

.button--green {
  cursor: pointer;
}
</style>
