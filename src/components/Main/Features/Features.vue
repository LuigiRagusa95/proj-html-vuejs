<template>
	<section class="features">
		<h3>Choose where you'd like to begin</h3>
		<h1>Latest Featured <strong>Courses</strong></h1>
		<Section />
		<LearningSection />
		<UpcomingSection />
	</section>
</template>

<script>
import Section from "../Features/Courses/Section.vue";
import LearningSection from "../Features/Info/LearningSection.vue";
import UpcomingSection from "./Upcoming/UpcomingSection.vue";

export default {
	name: "Features",
	components: {
		Section,
		LearningSection,
		UpcomingSection,
	},
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";
.features {
	width: 100%;
	padding: 2rem 0;
	min-height: 100vh;
	position: relative;

	> h3 {
		margin: 1rem;
		font-weight: 400;
		color: $oslo-gray;
		text-align: center;
		font-size: 0.875rem;
		line-height: 1.5rem;
	}

	> h1 {
		font-weight: 700;
		line-height: 3rem;
		font-size: 2.5rem;
		text-align: center;
		color: $mulled-wine;
		letter-spacing: 0.02rem;

		strong {
			font-weight: 400;
			color: $jungle-green;
		}
	}
}
</style>
