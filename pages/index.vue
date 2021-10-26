<template>
	<div role="main">
		<div class="container">
			<img src="/figures/home_image.jpg" alt="">
		</div>
	</div>
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

<style scoped>
.container {
	max-width: 1000px;
	margin: 4% auto;
	text-align: center;
}
.container img {
	width: 54%;
	height: auto;
	object-fit: cover;
}

/* タブレット */
@media (max-width: 959px) {
	.container {
		max-width: 960px;
		margin: 8% auto;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.container {
		max-width: 480px;
	}
}
</style>
