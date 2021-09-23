<template>
  <div class="d-flex align-self-center px-2">
      <div class="px-2 infoSelect">SELECT A GENRE:</div>
    <b-form-select v-model="selected" :options="options" @change="$emit('performSelect', selected)"></b-form-select>
  </div>
</template>

<script>
export default {
    name: 'Selected',
    props: ['info'],
    data() {
      return {
        selected: null,
        options: [
          { value: '', text: 'RESET - Please select an genre' },
          { value: 'Rock', text: 'Rock' },
          { value: 'Jazz', text: 'Jazz' },
          { value: 'Metal', text: 'Metal' },
          { value: 'Pop', text: 'Pop', }
        ]
      }
    },
}
</script>

<style  lang="scss">
@import "../styles/generals.scss";
 .infoSelect {
     color: $info-color;
 }
</style>