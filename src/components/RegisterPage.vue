<template>
  <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
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
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h1 class="mb-4 text-3xl font-semibold text-center text-sky-800">Créer un compte</h1>
      <form @submit.prevent="submitForm">
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="username">Nom d'utilisateur :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Entrez votre nom d'utilisateur ici" v-model="username" required>
        </div>
        <div class="mb-4">
          <label class="block mb-2 font-bold text-gray-700" for="email">Email :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Entrez votre adresse email ici" v-model="email" required>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="password">Mot de passe :</label>
          <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Entrez votre mot de passe ici" v-model="password" required>
        </div>
        <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">
          Créer un compte
        </button>
      </form>
      <div class="mt-4">
        <span class="text-sm text-gray-600">Vous avez déjà un compte ?</span>
        <router-link to="/login" class="ml-1 text-sm font-semibold text-blue-500 hover:text-blue-700">Connectez-vous</router-link>
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
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
    }
  },
  methods: {
    submitForm() {
      // Récupération des valeurs entrées dans le formulaire
      const username = this.username
      const email = this.email
      const password = this.password
      
      // Affichage d'une alerte avec les informations saisies
      alert(`Nom d'utilisateur : ${username}\nEmail : ${email}\nMot de passe : ${password}`)
    }
  }
}
</script>
