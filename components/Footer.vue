<template>
	<footer class="footer">
		<div class="footer-wrapper">
			<p class="name">Made with by Yuki</p>
			<hr />
			<a href="#" class="license">©©©©</a>
		</div>
	</footer>
</template>

<style>
html {
	font-size: 62.5%;
}
hr {
	color: #979797;
}
.footer {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 120px;
}
.footer-wrapper {
	width: 100%;
	margin: auto;
	padding: 0 20px;
	text-align: center;
	line-height: 28px;
}
.name {
	color: #333;
	font-family: Georgia, sans-serif;
	font-size: 1.4rem;
	font-weight: normal;
}
.license {
	color: #333;
	font-family: Herculanum, sans-serif;
	font-size: 1.4rem;
	font-weight: normal;
}

/* タブレット */
@media (max-width: 959px) {
	.footer {
		height: 90px;
	}
	.footer-wrapper {
		width: 35%;
		line-height: 20px;
	}
	.name {
		font-size: 1.2rem;
	}
	.license {
		font-size: 1.2rem;
	}
}

/* スマホ */
@media (max-width: 480px) {
	.footer {
		height: 80px;
	}
	.footer-wrapper {
		width: 42.5%;
	}
	.name {
		font-size: 1.0rem;
	}
	.license {
		font-size: 1.0rem;
	}
}
</style>
