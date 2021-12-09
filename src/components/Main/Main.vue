<template>
	<main>
		<Section />
	</main>
</template>

<script>
import Section from "./About/Section.vue";
export default {
	components: { Section },
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
