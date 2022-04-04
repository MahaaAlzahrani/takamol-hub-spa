<template>
<div>
   <div class="w-hero">
     <div class="relative flex justify-center items-center md:justify-start">
        <img class="md:block w-full h-[49rem]" src="../assets/img/background-banner.png" alt="banner_background" />
          <div class="flex absolute top-44 justify-start flex-col md:flex-row items-center md:space-y-12 md:space-y-0 px-2 sm:px-4">
             <div class="lg:w-2/4 custom mb-11 h-full flex px-4 md:px-0 z-10 justify-center items-center md:items-start flex-col md:pl-20 lg:px-20 2xl:px-44">
                  <p class="text-xl sm:text-2xl xl:text-4xl text-center md:text-left leading-6 xl:leading-10 text-gray-100 md:w-96 2xl:w-2/3" >About Us</p>
                  <p class="mt-4 md:w-80 lg:w-2/3 xl:w-3/4 text-center md:text-left  text-base leading-normal text-gray-200" >Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                 
             </div>
              <img class="w-4/12 mr-14" src="../assets/img/about_background.png" />       
          </div>
     </div>
     </div>
     <!-- Our Vision -->
     <section class="py-2 mx-16">
		<div class="container px-5 py-12 mx-auto">
			<div class="flex flex-wrap items-center">
				<div class="w-5/12 p-6">
					<img class="sm:h-64 mx-auto" src="../assets/img/takamol_hub_vision.svg" />
				</div>

				<div class="w-full sm:w-1/2 p-6 mt-6">
					<div class="align-middle">
						<h2 class="w-full small-heading w400 font-bold text-left text-primary-color">Our Vision</h2>
						<div class="w-full mb-4">
							<div class="h-1 underline_header w-20 my-0 py-0"></div>
						</div>
						<h1 class="text-3xl text-gray-800 font-bold text-left leading-none mb-3">
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr
						</h1>
						<p class="text-gray-600 text-left mb-8">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							at ipsum eu nunc commodo posuere et sit amet ligula.
							<br />
							<br />
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
    </div>
</template>

<script>
    export default {
        name: 'About'
    }
</script>

<style lang="scss">

</style>