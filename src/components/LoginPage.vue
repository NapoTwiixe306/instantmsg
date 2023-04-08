<template>
    <div class="flex items-center justify-between px-6 py-4 navbar bg-sky-800">
      <div class="logo">
        <a href="#" class="text-2xl font-bold text-white">Chatify</a>
      </div>
      <ul class="flex justify-end space-x-4">
        <li><router-link to="/" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Home</router-link> | </li>
        <li><router-link to="/chat" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Chat</router-link> | </li>
        <li><router-link to="/login" class="p-3 text-white transition duration-300 hover:bg-cyan-600 rounded-2xl">Login</router-link></li>
      </ul>
    </div>

    <div class="flex items-center min-h-screen dark">
  <div class="container max-w-md mx-auto transition duration-300 shadow-md hover:shadow-lg">
    <div class="p-10 py-12 bg-neutral-700 rounded-xl">
      <div class="mb-6">
        <label class="inline-block mb-2 mr-4 font-bold text-white" for="name">Name</label>
        <input type="text" class="px-4 py-2 bg-gray-100 border rounded outline-none w-96 focus:ring-2 focus:ring-indigo-400" placeholder="Your name" />
      </div>
      <div class="">
        <label class="inline-block mb-2 mr-4 font-bold text-white" for="name">Email</label>
        <input type="text" class="px-4 py-2 bg-gray-100 border rounded outline-none w-96 focus:ring-2 focus:ring-indigo-400" placeholder="@email" />
      </div>
      <span class="inline-block mt-4 text-sm text-blue-500 transition duration-200 cursor-pointer hover:text-indigo-600 hover:underline hover:cursor-pointer">forget password</span>
      <button class="w-full py-3 mt-6 font-bold transition duration-300 bg-indigo-600 rounded-md text-indigo-50 hover:bg-indigo-500">LOGIN</button>
    </div>
  </div>
</div>

</template>