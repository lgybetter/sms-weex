<template>
  <div class="container">
    <input class="input" v-model="name"/>
    <input class="input" v-model="password"/>
    <div class="button" @click="login">
      <text class="text">登录</text>
    </div>
  </div>
</template>

<style lang="sass">
  @import "../assets/styles/main.scss";
</style>

<script>
const modal = weex.requireModule('modal')

export default {
  data () {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    login () {
      modal.toast({
        message: `name: ${this.name}, password: ${this.password}`,
        duration: 0.8
      })
      this.$router.push('/')
    }
  }
}
</script>