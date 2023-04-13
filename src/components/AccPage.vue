<template>
<div class="dark">
  <div class="flex items-center justify-between w-full px-6 py-4 bg-gray-900 navbar">
    <div class="logo">
      <a href="#" class="text-2xl font-bold text-white">Chatify</a>
    </div>
    <ul class="flex justify-end space-x-4">
      <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link>|</li>
      <!-- <li><router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link> | </li> -->
      <li><router-link to="/login" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Login</router-link> |</li>
      <li><router-link to="/register" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Register</router-link></li>
    </ul>
  </div>

  <div class="w-full h-screen">
    <h1 class="text-center relative top-[15px] text-3xl">Chatify, <span class="text-3xl text-gray-100">C'est quoi ?</span></h1>
    <p class="text-center w-150 relative top-[15px]">Chatify, est une messagerie Instantanée, coder avec Vue.js, et TailwindCss, le back-end, est avec Node.js, les WebSockets, et Mongodb</p>
    <div class="flex">
      <img src="../assets/img/img.jpg" alt="" class="w-[450px] relative left-[350px] top-[100px] rounded-lg ">
      <p class="w-[450px] relative top-[120px] left-[555px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum natus harum ad consectetur. Cum reiciendis odio, eos cupiditate tempora architecto totam facilis quam magni quasi laborum numquam. Libero, iste placeat!</p>
    </div> 
    <div class="flex">
      <p class="w-[450px] relative top-[250px] left-[350px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum natus harum ad consectetur. Cum reiciendis odio, eos cupiditate tempora architecto totam facilis quam magni quasi laborum numquam. Libero, iste placeat!</p>
      <img src="../assets/img/img.jpg" alt="" class="w-[450px] relative left-[555px] top-[200px] rounded-lg ">
    </div> 
  </div>

  <footer class="py-2 relative top-[50px]">
      <div class="container mx-auto text-center">
        <p class="text-sm text-white-600">
          Copyright © Julien Milants |
          <a href="https://github.com/NapoTwiixe306" target="_blank"><i class="ml-2 fab fa-github hover:text-sky-500"></i></a>
          <a href="https://gitlab.com/NapoTwiixe306" target="_blank"><i class="ml-2 fab fa-gitlab hover:text-sky-500"></i></a>
          <a href="https://instagram.com/julien.mlnts" target="_blank"><i class="ml-2 fab fa-instagram hover:text-sky-500"></i></a>
        </p>
      </div>
  </footer>
</div>
</template>