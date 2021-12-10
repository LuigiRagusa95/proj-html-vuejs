<template>
	<main>
		<Section />
		<Features />
		<TrustSection />
	</main>
</template>

<script>
import Section from "./About/Section.vue";
import Features from "./Features/Features.vue";
import TrustSection from "./Trust/TrustSection.vue";
export default {
	components: { Section, Features, TrustSection },
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
