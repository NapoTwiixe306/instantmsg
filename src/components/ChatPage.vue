<template>
  <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
  <div class="logo">
    <router-link class="text-2xl font-bold text-white" to="/">Chatify</router-link>
  </div>
  <ul class="flex items-center justify-end space-x-4">
    <li><router-link to="/" class="relative p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link></li>
    <li><button v-if="isLoggedIn" @click="logout" class="p-2 transition duration-300 p-3text-white hover:bg-cyan-600 rounded-2xl"><span class="relative left-[-15px]">| </span>Déconnexion</button></li>
  </ul>
</div>

<div class="h-screen dark">
  <div class="test">
    <div class="flex items-center gap-4">
      <h1 class="mt-4 text-lg font-bold text-black">UserName</h1>
      <span class="inline-flex items-center justify-center w-12 h-12 mt-4 bg-gray-200 rounded-full">
        <img src="../assets/img/img.jpg" alt="Photo de profil" class="w-10 h-10 rounded-full">
      </span>
    </div>
    <div class="container_msg">
      <!--ici, c'est genre une border a coter de username, la border c'est ce qui va contenir le chat chat, donc une border pas trop grande, mais grande quand même,
         et vazy, fini le design de userName, pour afficher le user, lui permttre d'ajoute une pp, et afficher une searchBar avec la liste de dm-->
    </div>
  </div>
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

<style>
  .test{
    position: relative;
    top: 65px;
    margin-left: 65px;
    border-radius: 19px;
    bottom: 15px;
    right: 15px;
    width: 95%;
    height: 90%;
    background-color: rgba(214, 212, 212, 0.795);
}
</style>
