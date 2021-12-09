import { createApp } from 'vue'
import App from './App.vue'

window.jQuery

window.jQuery(document).on("shiny:connected", function () {
  // need to wait until shiny is connected before we can connect shiny and vue
  // hacks everywhere but proves the idea

  // data for our app will be Shiny input values but vue will not provide reference
  App.data = () => (window.Shiny.shinyapp.$inputValues)
  
  App.mounted = function() {
    // bind input from Vue but need to do after mount so element is available
    //   this is not necessary if Shiny input not in Vue component
    window.Shiny.bindAll(document.getElementById('app'))
    // ... so this is an ugly hack to reattach Vue reactive to input values
    window.Shiny.shinyapp.$inputValues = this.$data
  }

  createApp(App).mount('#app')
})
