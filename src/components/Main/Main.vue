<template>
	<main>
		<Section />
		<Features />
	</main>
</template>

<script>
import Section from "./About/Section.vue";
import Features from "./Features/Features.vue";
export default {
	components: { Section, Features },
	name: "Main",
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>
