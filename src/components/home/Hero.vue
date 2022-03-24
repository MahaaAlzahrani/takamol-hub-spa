<template>
<div class="w-hero">
  <!-- <div class="w-hero">
      <div class="relative w-full">
      <img
          :src="require('@/assets/background-banner.png')"
          alt="houses on the water"
          class="w-full"
        />
      </div>
        <div class="pt-36">
			<div class="container max-w-5xl mx-auto flex flex-wrap flex-col md:flex-row items-center"> -->
                 <!--Left Col-->
				<!-- <div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-4xl text-white font-bold leading-tight">
						Takamol Hub Portal
					</h1>
					<p class="leading-normal text-2xl text-white mb-8">
						Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat.
					</p>
				</div> -->
				<!--Right Col-->
				<!-- <div class="w-full md:w-3/5 py-12 text-center">
					<img class="md:w-4/5 z-50" src="@/assets/image_1.png" />
				</div>
			</div>
        </div>
  </div> -->
  <div class="relative flex justify-center items-center md:justify-start ">
        <img class="md:block w-full " :src="require('@/assets/img/background-banner.png')" alt="banner_background" />
    <div class="flex absolute justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0">
        <div class="lg:w-2/4 custom sm:mt-96 md:mt-0 h-full flex px-4 md:px-0 z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
            <p class="text-xl sm:text-2xl xl:text-4xl text-center md:text-left font-semibold leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3" >Takamol Hub</p>
            <p class="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            <button class="mt-6 shrink-0 w-full md:w-auto  lg:mt-8 py-2 md:py-3 px-10 flex justify-center duration-700  items-center text-base border-2 border-white transition hover:-translate-y-1 hover:bg-gray-100 hover:text-gray-800 font-medium text-white">
                Explore
            </button>   
        </div>        
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