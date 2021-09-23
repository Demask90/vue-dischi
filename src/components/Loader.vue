<template>
  <div class="loader">
      <img src="../assets/img/giphy.gif" alt="">
    <div class="text">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'Loader',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/vars';

  .loader {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: $loader_background;
  }
</style>
