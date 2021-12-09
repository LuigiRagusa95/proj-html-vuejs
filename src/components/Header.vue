<template>
	<header>
		<section>
			<NavBar />
			<Hero />
		</section>
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

<style lang="scss" scoped>
@import "../styles/index.scss";

header {
	background-color: $gallery;

	> section:first-of-type {
		margin: 0 auto;
		max-width: 1400px;
	}
}
</style>
