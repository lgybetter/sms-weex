<template>
  <div class="navigator">
    <div @click="home">
      <image src="../assets/images/setting.png"></image>
    </div>
    <div @click="setting">
      <image src="../assets/images/setting.png"></image>
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
    exit () {
    }
  }
}
</script>