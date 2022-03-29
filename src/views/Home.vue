<template>
  <div class="w-homepage">
    <Hero />
    <Clints />
    <PopularApis />
    <UnifiedPlatform />
    <div class="w-full py-16 bg-primary-color">
      <p class="text-xl text-center py-8 text-white">All Public/private sectors APIs in one platform.</p>
    </div>
    <ApisCategories />
    <Developers />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Hero from "@/components/home/Hero";
import Clints from "@/components/home/Clints";
import PopularApis from "@/components/home/PopularApis";
import UnifiedPlatform from "@/components/home/UnifiedPlatform";
import ApisCategories from "@/components/home/ApisCategories";
import Developers from "@/components/home/Developers";

// import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Hero,
    Clints,
    PopularApis,
    UnifiedPlatform,
    ApisCategories,
    Developers
    // Footer
  }
};
</script>
<style lang="scss">
.w-homepage {
 
}
</style>
