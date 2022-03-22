<template>
  <div class="w-hero">
      <!-- <img
          :src="require('@/assets/background-banner.png')"
          alt="houses on the water"
          class="w-full"
        /> -->
        <div class="pt-36">
			<div class="container max-w-5xl mx-auto flex flex-wrap flex-col md:flex-row items-center">
                 <!--Left Col-->
				<div class="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
					<h1 class="my-4 text-4xl text-white font-bold leading-tight">
						Takamol Hub Portal
					</h1>
					<p class="leading-normal text-2xl text-white mb-8">
						Lorem ipsum dolor sit amet, 
                        consetetur sadipscing elitr, 
                        sed diam nonumy eirmod tempor invidunt ut 
                        labore et dolore magna aliquyam erat.
					</p>
				</div>
				<!--Right Col-->
				<div class="w-full md:w-3/5 py-12 text-center">
					<img class="md:w-4/5 z-50" src="@/assets/image_1.png" />
				</div>
      <!-- <div class="container max-w-5xl mx-auto flex flex-wrap flex-col md:flex-row items-center">
        <div class="heading-container absolute flex justify-center items-center w-full">
          <h1 class="text-5xl">Takamol Hub Portal</h1>
        </div>
      </div> -->
			</div>
        </div>
  </div>
  <!-- <section class="w-banner w-banner-intro w-container w-banner--padding-"> -->
  <!-- <div class="w-banner__info">
        <h2 class="w-banner__header w-header--main">
          <span class="w-banner__header-item">
            <span v-t="'intro_title'">Takamol Hub Portal</span>
          </span>
        </h2>
        <h3 class="w-banner__header--small w-header--small">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</h3>
      </div>
  <div class="w-banner__image w-banner__image_home">-->
  <!-- <video loop autoplay :src="require('@/assets/hero_video.mp4')" class="video" muted /> -->
  <!-- </div>
      <a href class="headerSlider__scroll">
        <span class="headerSlider__scrollIcon">
         
        </span>
  </a>-->
  <!-- </section> -->
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
.w-hero {
  background-image: url("~@/assets/background-banner.png");
//   height: 85vh;
  background-size: 100% auto;

}
</style>