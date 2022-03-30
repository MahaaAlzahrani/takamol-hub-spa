<template>
  <div id="app">
   <app-header />
   <router-view></router-view>
   <Footer />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import Footer from '@/components/Footer'


export default {
  name: 'App',
  components: {
    AppHeader,
    Footer
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap');
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
