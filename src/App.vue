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
// import FixedHeader from 'vue-fixed-header'


export default {
  name: 'App',
  data () {
    return {
      // isFixed: false,
    }
  },
  components: {
    AppHeader,
    Footer,
    // FixedHeader
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
.is-sticky {
  position: fixed !important;
  background-color: #ffff;
  color: #4FB7DD!important;
  box-shadow: 0 2px 4px 0 rgba(#0000, .2);
}
</style>
