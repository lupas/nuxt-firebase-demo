<template>
  <div>
    <h3 class="display-1 mb-5">
      Vuex Store
    </h3>
    <p>
      Tests if fireXXX objects can be accessed in a vuex store action.
    </p>
    <div class="links">
      <v-btn color="primary" outlined @click="checkVuexStore()"
        >Test Vuex Store</v-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      traceStarted: false
    }
  },
  methods: {
    checkVuexStore() {
      this.$store.dispatch('checkVuexStore')
    }
  }
})
</script>
