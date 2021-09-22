<template>
  <div id="app">
    <Header/>
    <MusicBox/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import MusicBox from './components/MusicBox.vue'

export default {
  name: 'App',
  components: {
    Header,
    MusicBox,
  }
}
</script>

<style lang="scss">
// importo il componente general.scss per applicare a tutta la App le proprietà SCSS generali (vedi pacchetto npm bootstap)
@import "./styles/generals.scss";
#app {
  height: 100vh;
  margin: 0 auto;
}
</style>
