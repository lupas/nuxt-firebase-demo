<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Vuex Store
    </h3>
    <p>
      Tests if fireXXX objects can be accessed in a vuex store action.
    </p>
    <div class="links">
      <p
        class="button--green"
        @click="checkVuexStore()"
      >Test Vuex Store</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      traceStarted: false
    };
  },
  methods: {
    checkVuexStore() {
      this.$store.dispatch("checkVuexStore");
    }
  }
};
</script>
