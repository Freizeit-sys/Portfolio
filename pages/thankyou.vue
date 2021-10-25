<template>
	<section role="main" class="container">
		<h1>Thank You!</h1>
		<p><Nuxt-Link to="/">Back to home.</Nuxt-Link></p>
	</section>
</template>

<script>
export default {
	layout() {
		return 'thankyou'
	},
	head() {
		return ''
	},
}
</script>

<style scoped>
.container {
	position: relative;
  text-align: center;
	margin: 8% auto;
	max-width: 800px;
}
.container h1 {
  color: #333;
  text-align: center;
  font-family: Baskerville, sans-serif;
  font-weight: 400;
  font-size: 7rem;
	margin-bottom: 5%;
}
.container a {
	font-family: sans-serif;
	font-weight: normal;
	font-size: 1.4rem;
	color: #0bd;
	text-decoration: none;
}
</style>
