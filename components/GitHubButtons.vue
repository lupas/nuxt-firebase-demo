<template>
  <p class="githubButtons">
    <gh-btns-follow user="lupas" show-count></gh-btns-follow>
    <gh-btns-watch slug="lupas/nuxt-fire" show-count></gh-btns-watch>
    <gh-btns-star slug="lupas/nuxt-fire" show-count></gh-btns-star>
    <gh-btns-fork slug="lupas/nuxt-fire" show-count></gh-btns-fork>
  </p>
</template>

<script>
export default {}
</script>

<style scoped>
.githubButtons {
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>