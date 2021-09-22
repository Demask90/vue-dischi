<template>
    <div class="card text-center">
      <img :src="info.poster" :alt="info.title">
      <h2>{{info.title}}</h2>
      <h3>{{info.author}}</h3>
      <h4>{{info.year}}</h4>
    </div>
</template>

<script>
export default {
  name: 'MusicBox',
  props: ['info']
   
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../styles/vars.scss";

.card {
    width: 100%;
    background-color: $card-color;
    padding: 20px;

    img {

    }
    h2{ 
        padding-bottom: 5px;
        color:$title-color;
    }
    h3, h4{
        color: $color-info;
    }
}
    
</style>
