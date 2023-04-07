<template>
  <div class="dark">
    <AccPage/>
    <!-- <Chat/>
    <LoginPage/> -->
  </div>
</template>

<script>
// import LoginPage from './components/LoginPage.vue';
import AccPage from './components/AccPage.vue';
// import Chat from './components/ChatPage.vue'
export default {
  name: 'App',
  components: {
    // LoginPage,
    AccPage,
    // Chat
  }
}
</script>

<style src="./assets/tailwind.css"/>
