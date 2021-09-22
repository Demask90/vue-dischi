<template>
  <section class="container">
    <div class="row" >
      <div class="col-6 col-md-4 col-lg-3 mb-5">
        <MusicCard v-for="(box, index) in MusicBox" :Key="index" :info="box"/>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import MusicCard from './MusicCard.vue'

export default {
  name: 'MusicBox',
  components: {
    MusicCard,
  },
    data() {
      return {
        APIurl: 'https://flynn.boolean.careers/exercises/api/array/music',
        MusicBox: [],
      }
    },
    created() {
      this.getMusic();
    },
    methods: {
      getMusic() {
        axios
          .get(this.APIurl)
          .then( res => {
            // console.log(res.data);
            // console.log(res.data.response[0].author);
            this.MusicBox = res.data.response;
          })
    
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../styles/vars.scss";
  section {
    width: 100%;
   
  }
</style>
