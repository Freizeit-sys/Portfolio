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
	justify-content: center;
	align-items: center;
	height: 90px;
}
.header-start {
	width: 30%;
}
.header-middle {
	width: 40%;
}
.header-end {
	width: 30%;
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
	justify-content: center;
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
.header-nav-item a:hover::after {
	transform: scale(1);
}

/* タブレット */
@media (max-width: 959px) {
	.header {
		height: 70px;
	}
	.header-wrapper {
		height: 70px;
	}
	.header-logo {
		font-size: 2.2rem;
		padding-left: 32px
	}
	.header-nav-item {
		width: 80px;
		font-size: 1.6rem;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.header {
		height: 44px;
	}
	.header-wrapper {
		height: 44px;
	}
	.header-logo {
		font-size: 1.3rem;
		padding-left: 10px
	}
	.header-nav-item {
		width: 25%;
		font-size: 1.0rem;
	}
}
</style>
