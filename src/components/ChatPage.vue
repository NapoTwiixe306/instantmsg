<template>
    <div class="h-screen dark">
      <!-- Afficher le bouton de déconnexion si l'utilisateur est connecté -->
      <h1>hello world</h1>
    <button v-if="isLoggedIn" @click="logout">Déconnexion</button>

    </div>

  </template>
  
  <script lang="js">
  import axios from 'axios'
  export default {
    data() {
    return {
      isLoggedIn: true,
    };
    },
    methods: {
        async logout() {
        const token = await axios.post('http://localhost:3000/auth/logout')
            localStorage.removeItem(token);
            console.log(token)
            this.$router.push('/');
        },
      },
  };
  </script>