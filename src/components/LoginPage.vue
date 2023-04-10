<template>
    <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
      <div class="logo">
        <router-link class="text-2xl font-bold text-white" to="/">Chatify</router-link>
      </div>
      <ul class="flex justify-end space-x-4">
        <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link> | </li>
        <li><router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link> | </li>
        <li><router-link to="/register" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Register</router-link></li>
      </ul>
    </div>

    <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 class="mb-4 text-3xl font-semibold text-center text-sky-800">Connexion</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="name">Nom d'utilisateur :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Entrez votre nom d'utilisateur ici" v-model="name" required>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="password">Mot de passe :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Entrez votre mot de passe ici" v-model="password" required>
          <div class="mt-2">
            <a class="text-sm font-semibold text-blue-500 hover:text-blue-700" href="#">Mot de passe oublié ?</a>
          </div>
        </div>
        <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
          Se Connecter
        </button>
      </form>
      <div class="mt-4">
        <span class="text-sm text-gray-600">Vous n'avez pas de compte ?</span>
        <router-link to="/register" class="ml-1 text-sm font-semibold text-blue-500 hover:text-blue-700">Créer un compte</router-link>
      </div>
    </div>
  </div>

  <footer class="py-2">
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
        name: '',
        password: ''
      }
    },
    methods: {
      async submitForm(){
        try {
          const response = await axios.post('http://localhost:3000/auth/login', {
            name: this.name,
            password: this.password
          });
          
          console.log(response.data, "gg tu es log")
          this.$router.push('/success');
        } catch (error) {
          console.log(error.response.data)
          alert('Nom utilisateur ou mdp incorrect')
        }
      }
    }
  }
</script>