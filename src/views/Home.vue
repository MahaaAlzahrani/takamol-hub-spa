<template>
  <div class="w-homepage">
    <Hero />
    <Clints />
    <PopularApis />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Clints from "@/components/home/Clints";
import PopularApis from "@/components/home/PopularApis";
// import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Hero,
    Clints,
    PopularApis,
    // Footer
  }
};
</script>
<style lang="scss">
.w-homepage {
 
}
</style>
