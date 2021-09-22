import Vue from 'vue'
import App from './App.vue'
//dopo aver installato il pacchetto, importo il font monteserrat preso da fontsource
import "@fontsource/montserrat" 

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
