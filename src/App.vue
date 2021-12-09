<template>
	<div id="app">
		<Header />
	</div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
	name: "App",
	components: { Header },
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
	font-family: "Poppins", sans-serif;
}
</style>
