<template>
  <p class="githubButtons">
    <gh-btns-follow user="lupas" show-count></gh-btns-follow>
    <gh-btns-watch slug="lupas/nuxt-fire" show-count></gh-btns-watch>
    <gh-btns-star slug="lupas/nuxt-fire" show-count></gh-btns-star>
    <gh-btns-fork slug="lupas/nuxt-fire" show-count></gh-btns-fork>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.githubButtons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
}

.gh-button {
  color: black !important;
}
.social-count {
  color: black !important;
}
</style>
