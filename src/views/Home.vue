<template>
  <section class="w-homepage">
    <Hero />
    <Clints />
    <Footer />
  </section>
</template>

<script>
import Hero from "@/components/home/Hero";
import Clints from "@/components/home/Clints";
import Footer from "@/components/Footer";

export default {
  name: 'Home',
  components: {
    Hero,
    Clints,
    Footer
  }
};
</script>

