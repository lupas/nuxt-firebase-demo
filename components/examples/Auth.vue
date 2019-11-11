<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Authentication
    </h3>
    <div class="links">
      <v-btn
        color="primary"
        outlined
        @click="createUser()"
      >Create User</v-btn>
      <pre>
async createUser() {
  try {
    await this.$fireAuth.createUserWithEmailAndPassword(
      'foo@foo.foo',
      'test'
    )
  } catch (e) {
    alert(e)
  }
}</pre>
      <p class="mt-1">This will throw a password error coming from Firebase, but proves the point.</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          "foo@foo.foo",
          "test"
        );
      } catch (e) {
        alert(e);
      }
    }
  }
};
</script>
