<template>
	<main>
		<div class="thumbnail">
			<img src="/figures/home_image.jpg" alt="">
		</div>
	</main>
</template>

<script>
export default {
	layout() {
		return 'home'
	},
	head() {
		return {
			title: 'Yuki\'s Portfolio Website',
			titleTemplate: ''
		}
	}
}
</script>

<style>
.thumbnail {
	margin: 50px 0;
	text-align: center;
}
.thumbnail img {
	margin: auto;
	object-fit: cover;
	width: 540px;
	height: 540px;
}
</style>
