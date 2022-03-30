<template>
      <footer class="w-full">
          <img class="absolute" src="../assets/img/footer-background.png">
      <div class="relative container flex flex-wrap justify-between pt-36 mx-auto z-30">
         <img class="mr-7 w-46 h-12" alt="Takamol Hub logo" src="../assets/img/takamol-hub-w-logo.png">
           <ul class="flex-grow lg:flex justify-start items-end flex-1 pl-10 z-30">
              <li class="mr-7"><router-link to="/" class="inline-block text-white">About</router-link></li>
              <li class="mr-7"><router-link to="/" class="inline-block text-white">Docs</router-link></li>
              <li class="mr-7"><router-link to="/" class="inline-block text-white">APIs Hub</router-link></li>
             </ul>
             <div class="lg:flex justify-end items-end flex-1 space-x-4 pl-10 z-30">
                <a href="#" class="text-gray-400 hover:text-white">
                    <img class="w-5 h-5" src="../assets/img/twitter.svg">
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    <img class="w-5 h-5" src="../assets/img/youtube.svg">
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                    <img class="w-5 h-5" src="../assets/img/linkedin.svg">
                </a>
             </div>
      </div>
       <div class="relative pt-6 px-4 text-center">
                    <span class="text-xs text-gray-300 sm:text-center">© Takamol Hub 2022 </span>
             </div>
  </footer>
</template>

<script>
    export default {
        name: 'Footer',
    }
</script>

<style lang="scss">

</style>