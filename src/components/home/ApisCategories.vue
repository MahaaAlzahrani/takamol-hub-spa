<template>
    <section class="py-16 mx-16">
		<div class="container px-5 py-12 mx-auto">
			<div class="flex flex-wrap items-center">
				<div class="w-5/6 sm:w-1/2 p-6">
					<h2 class="w-full small-heading w400 font-bold text-left text-primary-color"> APIs categories</h2>
					<div class="w-full mb-4">
						<div class="h-1 underline_header w-20 my-0 py-0"></div>
					</div>
					<h1 class="text-3xl text-gray-800 font-bold text-left leading-none mb-3">
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr
					</h1>
					<p class="text-gray-600 text-left mb-8">
						Lorem ipsum dolor sit amet, consetetur sadipscing 
                        elitr, sed diam nonumy eirmod tempor invidunt ut labore
                        et dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. 
						<br />
						<br />
					</p>
				</div>
				<div class="w-full sm:w-1/2 pl-72">
                    <img class="w-28 h-24" :src="require('@/assets/img/apis-categories.png')" alt="" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
    export default {
        name: " Apis-categories"
    }
</script>

<style lang="scss">

</style>