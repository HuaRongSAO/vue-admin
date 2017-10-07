<template>
  <div class="login">
    <h1> login</h1>
    <h2>{{ getAuthLogin }} </h2>
    <h3>{{ auth }}</h3>
    <h4>{{ user }}</h4>
    <button  v-on:click=" updateAuth " >updateAuth</button>
    <button  v-on:click=" CLEAR_ALL_DATA " >claerAuth</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  created: function () {
  },
  computed: {
    getAuthLogin () {
      return this.$store.getters.auth
    },
    ...mapGetters([
      'user',
      'auth'
    ])
  },
  methods: {
    updateAuth () {
      this.$store.dispatch('UPDATE_AUTH', {
        isLoggedIn: true,
        accessToken: 'hello',
        refreshToken: 'world'
      })
    },
    ...mapActions([
      'UPDATE_AUTH',
      'CLEAR_ALL_DATA'
    ])
  }
}
</script>
<<style lang="scss" scoped>
@import './Login'
</style>


