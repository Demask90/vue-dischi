<template>
  <section class="container mx-auto">
    <div v-if="!loading" class="row d-flex justify-content-center">
      <div class="col-12 d-flex justify-content-center m-3">
        <!-- <Search @performSearch='GetSelected'/> -->
        <Selected @performSelect='GetSelected'/>
      </div>
      <div v-for="(box, index) in filteredList" :Key="index" class="col-12 col-sm-4 col-md-3 col-lg-2 m-2">
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
import Selected from './Selected.vue'
// import Search from './Search.vue'

export default {
  name: 'MusicBox',
  components: {
    MusicCard,
    Loader,
    Selected,
    // Search
  },
    data() {
      return {
        APIurl: 'https://flynn.boolean.careers/exercises/api/array/music',
        MusicBox: [],
        selectedGenre: '',
        searchArtist: '',
        loading: true
      }
    },
    created() {
      this.getMusic();
    },
    computed: {

      // filteredList() {
      //   if(this.selectedGenre  === '' && this.selectedArtist === '' ) {
      //     return this.MusicBox;

      //   } else if (this.selectedGenre !== '' && this.selectedArtist == '') {
      //       return this.MusicBox.filter(item => {
      //         return item.genre.toLowerCase().includes(this.selectedGenre.toLowerCase());
      //     })
          
      //   } else if (this.selectedGenre == '' && this.selectedArtist !== '') 
      //       return this.MusicBox.filter(item => {
      //         return item.author.toLowerCase().includes(this.searchArtist.toLowerCase());
      //       })
      //   return alert("seleziona un elemento")

      // },
  
      filteredList() {
        if (this.selectedGenre === "") {
          return this.MusicBox;
        }

        let filteredList = this.MusicBox.filter( item => {
          return item.genre
                    .toLowerCase()
                    .includes(this.selectedGenre.toLowerCase());
        })

        return filteredList;
      }
    },
      
      
    
    methods: {
      getMusic() {
        axios
          .get(this.APIurl)
          .then( res => {
            console.log(res.data);
            this.MusicBox = res.data.response;
            this.loading = false;
          })
    
      },
      GetSelected(select) {
        this.selectedGenre = select;
        this.searchArtist = select;
      },

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
