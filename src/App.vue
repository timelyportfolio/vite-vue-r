<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite + Shiny" />
  <div style="display:flex;">
    <div style="width:50%;">
      <h3>Shiny Input</h3>
      <div class="form-group shiny-input-container" style="display:inline-block;">
        <label class="control-label" id="x-label" for="x">Shiny number</label>
        <input id="x" type="number" class="form-control" value="0" min="0" step="1"/>
      </div>
    </div>
    <div style="width:50%;">
      <h3>Vue Reacting to Shiny</h3>
      <div>{{ $data['x:shiny.number'] }}</div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
