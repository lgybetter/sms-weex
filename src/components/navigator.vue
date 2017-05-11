<template>
  <div class="navigator">
    <div @click="home">
      <text>test</text>
    </div>
    <div @click="setting">
      <text>test</text>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  .navigator {
    height: 90px;
    padding: 10px;
    flex-direction: row;
    justify-content: space-between;
    background-color: #00BFFF;
  }
  .div {
    width: 80px;
    height: 80px;
  }
</style>

<script>

export default {
  methods: {
    home () {
      this.$router.push('/auth')
    },
    setting () {
    }
  }
}
</script>