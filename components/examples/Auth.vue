<template>
  <div>
    <h3 class="display-1 mb-5">
      Firebase Authentication
    </h3>
    <div class="links">
      <v-form v-if="!isLoggedIn" v-model="formValid">
        <h5>SignUp / LogIn</h5>
        <v-text-field
          v-model="formData.email"
          color="primary"
          outlined
          placeholder="Email"
          type="email"
          autocomplete="username"
        ></v-text-field>
        <v-text-field
          v-model="formData.password"
          :rules="formRules.password"
          color="primary"
          outlined
          placeholder="Password"
          type="password"
          autocomplete="current-password"
        ></v-text-field>
        <v-btn
          :disabled="!formValid"
          color="primary"
          outlined
          @click="createUser()"
          >Register</v-btn
        >
        <v-btn
          :disabled="!formValid"
          color="primary"
          outlined
          @click="signInUser()"
          >Sign In</v-btn
        >
      </v-form>
      <div v-else>
        <p>You are logged in with {{ authUser.email }}.</p>
        <v-btn color="primary" outlined @click="logout">Logout</v-btn>
      </div>
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
}</pre
      >
      <p class="mt-1">
        This will throw a password error coming from Firebase, but proves the
        point.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState, mapGetters } from 'vuex'

export default Vue.extend({
  computed: {
    ...mapState({
      authUser: (state: any) => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  fetch() {
    // INFO -> this.$fireAuth user etc. are accessible
    // INFO -> this.$store.state.authUser is accessible even on server-side
  },
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    formValid: false,
    formRules: {
      names: [
        (v: string) => !!v || 'Name is required',
        (v: string) =>
          (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
    }
  }),
  methods: {
    async createUser() {
      try {
        await this.$fireAuth.createUserWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async signInUser() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.formData.email,
          this.formData.password
        )
      } catch (e) {
        alert(e)
      }
    },
    async logout() {
      try {
        await this.$fireAuth.signOut()
      } catch (e) {
        alert(e)
      }
    }
  }
})
</script>
