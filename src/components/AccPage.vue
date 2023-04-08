<template>
    <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
      <div class="logo">
        <a href="#" class="text-2xl font-bold text-white">Chatify</a>
      </div>
      <ul class="flex justify-end space-x-4">
        <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link></li>
        <li><router-link to="/login" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Login</router-link></li>
        <li><router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link></li>
        
      </ul>
    </div>

    <div class="flex flex-col items-center h-screen mt-10">
        <h1 class="text-3xl text-center">Présentation du projet</h1>
        <div class="mt-4 text-center">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta nostrum officiis, doloribus et repellat, eos aliquam saepe magnam alias dicta labore doloremque? Debitis ad sunt repudiandae voluptatum saepe architecto sequi.</p>
        </div>
    </div>
</template>

<style>
    p{
        width: 650px;
        font-size: 25px;
    }

    .Home{
        height: 100vh;
    }
</style>
  