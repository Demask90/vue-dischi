<template>
  <section class="container mx-auto">
    <div v-if="!loading" class="row d-flex justify-content-center">">
      <div v-for="(box, index) in MusicBox" :Key="index" class="col-12 col-sm-4 col-md-3 col-lg-2 m-2">
        <MusicCard  :info="box"/>
      </div>
    </div>

    <Loader v-else/>
  </section>
</template>

<script>
import axios from 'axios';
import MusicCard from './MusicCard.vue'
import Loader from './Loader.vue';

export default {
  name: 'MusicBox',
  components: {
    MusicCard,
    Loader
  },
    data() {
      return {
        APIurl: 'https://flynn.boolean.careers/exercises/api/array/music',
        MusicBox: [],
        loading: true
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
            this.loading = false;
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
