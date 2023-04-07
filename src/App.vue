<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <NavBar/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue';
export default {
  name: 'App',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>
