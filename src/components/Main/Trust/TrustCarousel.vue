<template>
	<div class="carousel">
		<div class="slider">
			<TrustCarouselCard v-for="(data, index) in data.slice((activeSlide - 1) * 3, activeSlide * 3)" :key="`testimonial-card-${index}`" :image="data.image" :work="data.work" :name="data.name" :review="data.review" />
		</div>
		<div class="navigation"></div>
	</div>
</template>

<script>
import TrustCarouselCard from "./TrustCarouselCard.vue";
export default {
	components: { TrustCarouselCard },
	name: "TrustCarousel",
	data() {
		return {
			currentSlideActive: 1,
		};
	},
	props: {
		data: Array,
	},
	methods: {},
	computed: {
		activeSlide() {
			return this.currentSlideActive < 1 ? Math.ceil(this.data.length / 3) : this.currentSlideActive;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";

.carousel {
	display: flex;
	margin: 0 auto;
	margin-top: 2rem;
	align-items: center;
	justify-content: center;

	> .slider {
		width: 100%;
		display: flex;
		padding: 4rem;
		justify-content: center;
	}
}
</style>
