<template>
	<header class="header">
		<div class="header-wrapper">
			<div class="header-start">
				<h1 class="header-logo">Yuki's Portfolio</h1>
			</div>
			<div class="header-middle">
				<nav role="navigation">
					<ul class="header-nav">
						<li class="header-nav-item">
							<Nuxt-Link to="/">Home</Nuxt-Link>
						</li>
						<li class="header-nav-item">
							<Nuxt-Link to="/about">About</Nuxt-Link>
						</li>
						<li class="header-nav-item">
							<Nuxt-Link to="/work">Work</Nuxt-Link>
						</li>
						<li class="header-nav-item">
							<Nuxt-Link to="/contact">Contact</Nuxt-Link>
						</li>
					</ul>
				</nav>
			</div>
			<div class="header-end"></div>
		</div>
	</header>
</template>

<script>
export default {
	data () {
		return {
			tabs: [
				{ title: 'Home', value: '1' },
				{ title: 'About', value: '2'},
				{ title: 'Work', value: '3' },
				{ title: 'Contact', value: '4'}
			],
			currentTab: '1'
		}
	},
	methods: {
		handleClick (newTab) {
			this.currentTab = newTab
		}
	}
}
</script>

<style>
html {
	width: 100vw;
	height: 100vh;
	font-size: 62.5%;
}
.header {
	position: relative;
	background: #fff;
	border-bottom: solid 1px rgb(97, 97, 97);
	width: 100%;
	height: 90px;
}
.header-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 90px;
}
.header-start {
	width: 240rem;
}
.header-end {
	width: 240rem;
}
.header-logo {
	font-family: 'Bradley Hand', sans-serif;
	font-size: 3.2rem;
	font-weight: bold;
	color: #333;
	padding-left: 48px
}
.header-nav {
	display: flex;
	list-style: none;
	text-align: center;
}
.header-nav-item {
	width: 100px;
	font-family: 'Bradley Hand', sans-serif;
	font-size: 2.2rem;
	font-weight: bold;
}
.header-nav-item a {
	display: inline-block;
  position: relative;
}
.header-nav-item a:hover {
	color: #08a;
	transition: 300ms;
}
.header-nav-item a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #08a;
  opacity: 1;
	transform: scale(0);
	transform-origin: center;
  transition: opacity 300ms, transform 300ms;
}
.header-nav-item a:hover::after,
.header-nav-item a:focus::after {
	transform: scale(1);
}
</style>
