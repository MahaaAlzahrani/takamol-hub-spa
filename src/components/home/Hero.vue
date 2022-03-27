<template>
<div class="w-hero">
  <div class="relative flex justify-center items-center md:justify-start">
        <img class="md:block w-full h-[49rem]" :src="require('@/assets/img/background-banner.png')" alt="banner_background" />
    <div class="flex absolute top-44 justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0 px-2 sm:px-4">
        <div class="lg:w-2/4 custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0 z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p class="text-xl sm:text-2xl xl:text-4xl text-center md:text-left leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3" >Takamol Hub</p>
            <p class="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <div class="inline-flex">
            <button class="mt-6 shrink-0 w-full md:w-auto mt-8 py-2 md:py-3 px-10 mr-4 flex justify-center duration-700  items-center text-base rounded bg-cyan-400 transition hover:-translate-y-1 hover:bg-cyan-400 hover:text-white font-medium text-white">
                Publish api
            </button>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base rounded border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-cyan-400 font-medium text-white">
                Explore
            </button> 
            </div>  
        </div> 
        <img class="lg:w-2/4 mr-14 pt-20" src="@/assets/img/image_1.png" />       
    </div>
</div>
</div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
// .w-hero {
//   background-image: url("~@/assets/background-banner.png");
//   height: 65vh;
//   background-size: 100% auto;
  

// }
</style>