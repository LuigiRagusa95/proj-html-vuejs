<template>
	<div id="app">
		<Header />
		<Main />
	</div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";
export default {
	name: "App",
	components: { Header, Main },
};
</script>

<style lang="scss">
@import "./styles/index.scss";
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body {
	width: 100%;
	height: 100%;
	font-size: 1rem;
	line-height: 1.5rem;
	font-family: "Poppins", sans-serif;
}

a {
	font-size: 1rem;
	color: currentColor;
	line-height: 1.5rem;
	text-decoration: none;
}

#app {
	display: flex;
	min-width: 100vh;
	flex-direction: column;
}
</style>
