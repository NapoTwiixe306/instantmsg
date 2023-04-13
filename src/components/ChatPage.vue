<template>
  <div class="flex items-center justify-between px-6 py-4 bg-gray-900 navbar">
  <div class="logo">
    <router-link class="text-2xl font-bold text-white" to="/">Chatify</router-link>
  </div>
  <ul class="flex items-center justify-end space-x-4">
    <li><router-link to="/" class="relative p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link></li>
    <li><button v-if="isLoggedIn" @click="logout" class="p-2 p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl"><span class="relative left-[-15px]">| </span>Déconnexion</button></li>
  </ul>
</div>

<div class="h-screen dark">
  <div class="test">
    <div class="flex items-center gap-4 relative top-[100px] left-[25px]">
      <h1 class="mt-4 text-lg font-bold text-black r">UserName</h1>
      <span class="inline-flex items-center justify-center w-12 h-12 mt-4 bg-gray-200 rounded-full ]">
        <img src="../assets/img/img.jpg" alt="Photo de profil" class="w-10 h-10 rounded-full">
      </span>
    </div>
    <div class="h-screen overflow-y-auto">
      <div class="h-screen overflow-y-auto">
        <div class="flex flex-row justify-end">
          <!-- ici, le contenu principal -->
          <div class="w-2/3">
            <div class="p-4 space-y-4">
              <div class="p-2 bg-white rounded-lg shadow-md">
                <div class="mb-1 text-sm font-bold text-black">Chat avec User2</div>
                <div class="text-sm text-black">
                  <p>Message 1</p>
                  <p>Message 2</p>
                  <p>Message 3</p>
                </div>
              </div>
              <div class="p-2 bg-red-500 rounded-lg shadow-md ">
                <div class="mb-1 text-sm font-bold text-black">Chat avec User3</div>
                <div class="text-sm text-gray-700">
                  <p>Message 1</p>
                  <p>Message 2</p>
                </div>
              </div>
              <div class="p-2 bg-red-500 rounded-lg shadow-md ">
                <div class="mb-1 text-sm font-bold text-black">Chat avec User3</div>
                <div class="text-sm text-gray-700">
                  <p>Message 1</p>
                  <p>Message 2</p>
                </div>
              </div>
              <div class="p-2 bg-red-500 rounded-lg shadow-md ">
                <div class="mb-1 text-sm font-bold text-black">Chat avec User3</div>
                <div class="text-sm text-gray-700">
                  <p>Message 1</p>
                  <p>Message 2</p>
                </div>
              </div>
            </div>
            <div class="p-4">
              <div class="sticky flex rounded-lg">
                <input type="text" class="w-full p-2 bg-gray-500 rounded-lg" placeholder="Saisir un message...">
                <button class="px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">Envoyer</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="py-2 relative top-[100px]">
      <div class="container mx-auto text-center">
        <p class="text-sm text-white-600">
          Copyright © Julien Milants |
          <a href="https://github.com/NapoTwiixe306" target="_blank"><i class="ml-2 fab fa-github hover:text-sky-500"></i></a>
          <a href="https://gitlab.com/NapoTwiixe306" target="_blank"><i class="ml-2 fab fa-gitlab hover:text-sky-500"></i></a>
          <a href="https://instagram.com/julien.mlnts" target="_blank"><i class="ml-2 fab fa-instagram hover:text-sky-500"></i></a>
        </p>
      </div>
  </footer>
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
    background-color: rgba(86, 97, 124, 0.795);
}
</style>
