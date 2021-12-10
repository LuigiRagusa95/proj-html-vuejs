<template>
	<div class="carousel">
		<div class="slider">
			<TrustCarouselCard v-for="(data, index) in data.slice((activeSlide - 1) * 3, activeSlide * 3)" :key="`testimonial-card-${index}`" :image="data.image" :work="data.work" :name="data.name" :review="data.review" />
		</div>
		<div class="navigation">
			<ul>
				<li v-for="number in quantitySlide" :key="`navigation-link-${number}`" :class="{ active: currentSlideActive === number }"></li>
			</ul>
		</div>
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
		quantitySlide() {
			return this.data != null && this.data.length > 2 ? Math.ceil(this.data.length / 3) : 1;
		},
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
	flex-direction: column;
	justify-content: center;

	> .slider {
		width: 100%;
		display: flex;
		justify-content: center;
		padding: 4rem 4rem 2rem 4rem;
	}

	> .navigation {
		ul {
			display: flex;
			align-items: center;
			> li {
				width: 0.75rem;
				height: 0.75rem;
				cursor: pointer;
				margin-left: 0.75rem;
				border-radius: 999999px;
				background-color: $oslo-gray;

				&.active {
					background-color: $mulled-wine;
				}
			}

			&:last-of-type {
				margin-left: 0;
			}
		}
	}
}
</style>
