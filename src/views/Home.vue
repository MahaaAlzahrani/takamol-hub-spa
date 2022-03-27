<template>
  <div class="w-homepage">
    <Hero />
    <Clints />
    <PopularApis />
    <UnifiedPlatform />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Clints from "@/components/home/Clints";
import PopularApis from "@/components/home/PopularApis";
import UnifiedPlatform from "@/components/home/UnifiedPlatform";
// import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Hero,
    Clints,
    PopularApis,
    UnifiedPlatform,
    // Footer
  }
};
</script>
<style lang="scss">
.w-homepage {
 
}
</style>
