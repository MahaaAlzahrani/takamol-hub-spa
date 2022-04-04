<template>
    <nav class="absolute w-full px-2 sm:px-4 py-2.5 z-30">
      <div class="container flex flex-wrap justify-between items-center mx-auto bg-transparent">
         <img class="mr-7 w-46 h-12" alt="Takamol Hub logo" src="../assets/img/takamol-hub-w-logo.png">
           <ul class="list-reset flex-grow lg:flex justify-end flex-1 items-center">
              <li class="mr-7"><router-link to="/about" class="inline-block text-white">About</router-link></li>
              <li class="mr-7"><router-link to="/" class="inline-block text-white">Docs</router-link></li>
              <li class="mr-7"><router-link to="/" class="inline-block text-white">APIs Hub</router-link></li>
              <li class="mr-7"><router-link to="/sign-in" class="inline-block text-white">Sign in</router-link></li>
              <button class="shrink-0 w-full md:w-auto py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base rounded bg-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-white font-medium text-white">Sign up</button>
           </ul>
      </div>
  </nav>
</template>

<script>
    export default {
        name: 'App-header',
    }
</script>

<style lang="scss">
 
</style>