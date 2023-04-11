<template>
  <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
    <div class="logo">
      <router-link class="text-2xl font-bold text-white" to="/">Chatify</router-link>
    </div>
    <ul class="flex justify-end space-x-4">
      <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link> | </li>
      <li><button v-if="isLoggedIn" @click="logout" class="text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Déconnexion</button></li>
    </ul>
  </div>
  <div class="h-screen dark">
    <h1>hello world</h1>
  </div>
</template>

<script lang="js">
import axios from 'axios'

export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('token') != null, // Vérifier si le token est présent dans le localstorage,
      name: null
    };
  },
  methods: {
    async logout() {
      try {
        await axios.post('http://localhost:3000/auth/logout'); // Appeler la route de /logout
        localStorage.removeItem('token'); // Supprimer le token du localStorage
        this.isLoggedIn = false; // Mettre à jour l'état de connexion
        this.$router.push('/'); // Rediriger vers la page d'accueil
      } catch (error) {
        console.log(error);
      }
    },
  }
};
</script>
