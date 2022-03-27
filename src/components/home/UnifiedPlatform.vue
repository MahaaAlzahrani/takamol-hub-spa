<template>
	<section class="py-16 mx-16">
		<div class="container max-w-5xl mx-auto m-8">
			<div class="flex flex-wrap">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h2 class="small-heading w400 w-full">Unified platform</h2>
					<div class="w-full mb-4">
						<div class="h-1 underline_header w-20 my-0 py-0"></div>
					</div>
					<h1 class="text-3xl text-gray-800 font-bold leading-none mb-3">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr
					</h1>
					<p class="text-gray-600 mb-8">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
						at ipsum eu nunc commodo posuere et sit amet ligula.
						<br />
						<br />
					</p>
				</div>
				<div class="w-full sm:w-1/2 p-6">
                    <img class="w-26 h-22" :src="require('@/assets/img/Logo-color.png')" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "Unified-platform"
};
</script>

<style lang="scss">
</style>