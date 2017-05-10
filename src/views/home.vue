<template>
  <div class="home-container">
    <nav></nav>
  </div>
</template>

<style lang="sass">
  @import "../assets/styles/main.scss";
  .home-container {
    flex-direction: column;
  }
</style>

<script>

import nav from '../components/navigator.vue'

export default {
  methods: {
    toLogin () {
      this.$router.push('/auth')
    }
  },
  components: {
    nav
  }
}

</script>