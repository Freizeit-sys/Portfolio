<template>
	<header class="header">
		<div class="header-wrapper">
			<div class="header-start">
				<h1 class="header-logo">Yuki's Portfolio</h1>
			</div>
			<div class="header-middle">
				<nav role="navigation">
					<ul class="header-nav">
						<li class="header-nav-item active" @click="isActive"><a href="/">Home</a></li>
						<li class="header-nav-item"><a href="/about">About</a></li>
						<li class="header-nav-item"><a href="/work">Work</a></li>
						<li class="header-nav-item"><a href="/contact">Contact</a></li>
					</ul>
				</nav>
			</div>
			<div class="header-end"></div>
		</div>
	</header>
</template>

<script>
// $("#header-nav").on('click', 'li', function(){
// 	$("header-nav li.active").removeClass("bar")
// 	$(this).addClas("bar")
// });
</script>

<style>
html {
	widows: 100%;
	height: 100vh;
	font-size: 62.5%;
}
.header {
	position: relative;
	background: #fff;
	border-bottom: solid 1px rgb(97, 97, 97);
	height: 90px;
}
.header-wrapper {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.header-start {
	width: 240px;
}
.header-end {
	width: 240px;
}
.header-logo {
	font-family: 'Bradley Hand', sans-serif;
	font-size: 2.8rem;
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
	font-family: 'Bradley Hand', sans-serif;
	font-size: 2.0rem;
	font-weight: bold;
	width: 100px;
	height: 90px;
	line-height: 90px;
}
.header-nav-item:active {
	color: #08A;
}
</style>
