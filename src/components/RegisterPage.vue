<template>
  <div class="flex items-center justify-between px-6 py-4 bg-gray-900 navbar">
    <div class="logo">
      <router-link class="text-2xl font-bold text-white" to="/">Chatify</router-link>
    </div>
    <ul class="flex justify-end space-x-4">
      <li>
        <router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link>
        |
      </li>
      <li>
        <router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link>
        |
      </li>
      <li>
        <router-link to="/login" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Login</router-link>
      </li>
    </ul>
  </div>

  <div class="flex items-center justify-center h-screen">
    <div class="w-full max-w-md p-5 bg-gray-400 border border-red-500 rounded-lg shadow-md">
      <h1 class="mb-4 text-3xl font-semibold text-center text-sky-800">Créer un compte</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="name">Nom d'utilisateur :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-500 border-none rounded appearance-none focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Entrez votre nom d'utilisateur ici" v-model="name" required>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="email">Email :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-500 border-none rounded appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entrez votre adresse email ici" v-model="email" required>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="password">Mot de passe :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 bg-gray-500 border-none rounded appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Entrez votre mot de passe ici" v-model="password" required>
        </div>
        <button class="px-4 py-2 font-bold text-white transition bg-blue-500 rounded duration 300 hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
          Créer un compte
        </button>
      </form>
      <div class="mt-4">
        <span class="text-sm text-gray-600">Vous avez déjà un compte ?</span>
        <router-link to="/login" class="ml-1 text-sm font-semibold text-gray-700 hover:text-blue-700">Connectez-vous</router-link>
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

<script>
import axios from 'axios'
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
    }
  },
  methods: {
  async submitForm() {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      });
      console.log(response.data);
      // Afficher un message de succès ou rediriger l'utilisateur vers une autre page
    } catch (error) {
      console.log(error.response.data);
      // Afficher un message d'erreur
    }
  }
}
}
</script>
