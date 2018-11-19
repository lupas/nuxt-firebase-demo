<template>
  <div>
    <hr>
    <h3 class="sectionTitle">
      Firebase Authentication
    </h3>
    <div class="links">
      <a class="button--green" @click="createUser()">Create User</a>
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
          'foo@foo.foo',
          'test'
        )
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
