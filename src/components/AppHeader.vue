<template>
    <nav class="px-2 sm:px-4 py-2.5">
      <div class="container flex flex-wrap justify-between items-center mx-auto">
         <img class="mr-7 w-36 h-16" alt="Takamol Hub logo" src="../assets/Takamol_hub_logo.png">
           <ul class="list-reset flex-grow lg:flex justify-end flex-1 items-center">
              <li class="mr-3"><router-link to="/" class="inline-block hover:text-blue">About</router-link></li>
              <li class="mr-3"><router-link to="/" class="inline-block hover:text-blue">Docs</router-link></li>
              <li class="mr-3"><router-link to="/" class="inline-block hover:text-blue">APIs Hub</router-link></li>
              <li class="mr-3"><router-link to="/sign-in" class="inline-block hover:text-blue">Sign in</router-link></li>
              <button class="btn primary-btn">Sign up</button>
             </ul>
      </div>
  </nav>
</template>

<script>
    export default {
        name: 'app-header',
    }
</script>

<style lang="scss">
  header {
    display: flex;
    padding: .5rem 1rem;

    p {
      margin-left: 1rem;
    }
  }

  nav {
    margin-left: auto;

    ul {
      list-style: none;
    }

    ul li {
      display: inline-flex;
      margin-left: 1rem;
      font-size: 19px;
    }
  }
  .btn {
    padding: 10px 20px;
    font-size: 19px;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
  }
  .primary-btn {
    background-color: #4FB7DD;
    color: #ffff;

  }
</style>