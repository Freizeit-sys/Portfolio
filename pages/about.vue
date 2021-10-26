<template>
	<div role="main">
		<section class="about">
			<h1>About</h1>
			<div class="container flexbox">

				<div class="card">
					<div class="card-body">
						<a href="#">
							<img src="/figures/campnou1.jpg" alt="" loading="lazy">
						</a>
						<h2>Title</h2>
					</div>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
export default {
	layout() {
		return 'about'
	},
	head() {
		return {
			title: 'About',
		}
	},
}
</script>

<style scoped>
.about {
	position: relative;
	width: 80%;
	margin: 8% 0 5%;
	margin-left: auto;
	margin-right: auto;
}
.about h1 {
	color: #333;
	text-align: center;
	font-family: Baskerville, sans-serif;
	font-weight: 400;
	font-size: 7.0rem;
	margin-bottom: 2%;
}
.container {
	max-width: 1000px;
	margin: auto;
}
.flexbox {
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
	align-items: center;
}
.card {
	position: relative;
	width: 90%;
	height: auto;
	margin-top: 3%;
}
.card-body {
	font-family: sans-serif;
	font-size: 1.6rem;
	text-align: center;
}
.card-body h2 {
	color: #333;
	margin-top: 3%;
}
.card-body img {
	width: 100%;
	height: auto;
	object-fit: cover;
	border-radius: 5px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
	transition: .3s;
}
.card-body img:hover {
	transform: scale(1.05);
	box-shadow: 0 20px 40px rgb(0 0 0 / 40%);
}

/* タブレット */
@media (max-width: 959px) {
	.container {
		max-width: 960px;
	}
	.card {
		width: 100%;
	}
	.about h1 {
		font-size: 4.8rem;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.container {
		max-width: 480px;
	}
	.about h1 {
		font-size: 3.2rem;
	}
	.card-body h2 {
		font-size: 1.2rem;
	}
}
</style>
