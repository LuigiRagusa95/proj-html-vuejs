<template>
	<div class="carousel">
		<div class="slider">
			<div class="slide" v-for="number in getSlideQuantity" :key="`slide-${number}`">
				<TrustCarouselCard v-for="(data, index) in data" :key="`testimonial-card-${index}`" :image="data.image" :work="data.work" :name="data.name" :review="data.review" />
			</div>
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
		return {};
	},
	props: {
		data: Array,
	},
	methods: {},
	computed: {
		getSlideQuantity() {
			return this.data != null ? Math.ceil(this.data.length / 3) : 1;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";
</style>
