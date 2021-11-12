<template>
<!-- Template exists in every Vue project -->
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
// Script exists in every Vue project
import HelloWorld from './components/HelloWorld.vue'
// Objects being exported
export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
/* Style exists in every Vue project */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
