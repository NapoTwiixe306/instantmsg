<template>
    <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
      <div class="logo">
        <a href="#" class="text-2xl font-bold text-white">Chatify</a>
      </div>
      <ul class="flex justify-end space-x-4">
        <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link> | </li>
        <li><router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link> | </li>
        <li><router-link to="/login" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Login</router-link> | </li>
        <li><router-link to="/register" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Register</router-link></li>
      </ul>
    </div>

    <div class="flex flex-col items-center h-screen mt-10">
        <h1 class="text-3xl text-center">Présentation du projet.</h1>
        <div class="mt-4 text-center">
          <p>Chatify, est une messagerie instantanée, utilisant les WebSockets</p>
        </div>
        <div class="flex">
          <div class="w-1/2">
            <p class="text-left text-lg font-normal w-[550px] relative top-[150px] left-[450px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste alias aut, quos minus quaerat. Reprehenderit molestiae placeat voluptatum? Magni dolore amet quia blanditiis aut. Tempore tempora illum ipsa error.</p>
          </div>
          <div class="w-1/2">
            <img src="../assets/img/img.jpg" alt="" class="float-right relative top-[130px] left-[500px] rounded-2xl w-[650px]">
          </div>
          <!-- Image est text2 -->
          <div class="w-1/2">
            <p class="text-left text-lg font-normal w-[550px] relative top-[530px] left-[90px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iste alias aut, quos minus quaerat. Reprehenderit molestiae placeat voluptatum? Magni dolore amet quia blanditiis aut. Tempore tempora illum ipsa error.</p>
          </div>
          <div class="w-1/2">
            <img src="../assets/img/img2.jpg" alt="" class="float-left relative top-[550px] left-[-1000px] rounded-2xl w-[850px]">
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