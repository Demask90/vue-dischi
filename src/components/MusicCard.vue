<template>
    <div class="card text-center">
      <img :src="info.poster" :alt="info.title">
      <h3>{{info.title}}</h3>
      <h4>{{info.author}}</h4>
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
    height: 350px;
    background-color: $card-color;
    padding: 20px;

    img {
        width: 150px;
        height: 150px;
        margin: 0 auto;

    }
    h3{ 
        padding: 5px;
        color:$title-color;
        text-transform: uppercase;
        font-size: 1.3em;
    }
    h4{
        color: $info-color;
        font-size: 1.1em;
    }
}
    
</style>
