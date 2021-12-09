<template>
	<header>
		<NavBar />
		<Hero />
	</header>
</template>

<script>
import Hero from "./Hero.vue";
import NavBar from "./NavBar.vue";
export default {
	name: "Header",
	components: { NavBar, Hero },
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped></style>
