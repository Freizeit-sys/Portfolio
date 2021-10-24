<template>
	<div role="main">
		<section class="about">
			<h1>About</h1>
			<div class="container flexbox">
				<div class="card">
					<div class="card-body">
						<a href="#" class="card-imageArea">
							<img src="/figures/home_image.jpg" alt="" loading="lazy">
						</a>
						<h2>Title</h2>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<a href="#" class="card-imageArea">
							<img src="/figures/campnou.jpg" alt="" loading="lazy">
						</a>
						<h2>Title</h2>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<a href="#" class="card-imageArea">
							<img src="/figures/home_image.jpg" alt="" loading="lazy">
						</a>
						<h2>Title</h2>
					</div>
				</div>

				<div class="card">
					<div class="card-body">
						<a href="#" class="card-imageArea">
							<img src="/figures/home_image.jpg" alt="" loading="lazy">
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

<style>
.about {
	position: relative;
	margin: 8% 0 5%;
}
.about h1 {
	color: #333;
	text-align: center;
	font-family: Baskerville, sans-serif;
	font-weight: 400;
	font-size: 7.0rem;
	margin-bottom: 2%;
}
.flexbox {
	display: flex;
	flex-flow: wrap row;
	justify-content: center;
}
.container {
	max-width: 1000px;
	margin: auto;
}
.card {
	position: relative;
	width: 900px;
	min-height: 350px;
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
.card-imageArea {
	overflow: hidden;
	cursor: default;
}
.card-imageArea img {
	width: 100%;
	height: 350px;
	object-fit: cover;
	border-radius: 5px;
	box-shadow: 0 3px 10px rgb(0 0 0 / 20%);
	transition: .3s;
}
.card-imageArea img:hover {
	transform: scale(1.05);
	box-shadow: 0 20px 40px rgb(0 0 0 / 40%);
}
</style>
