<template>
	<div class="trust-card">
		<div class="trust-card-image">
			<img :src="require(`../../../assets/images/${image}.jpg`)" alt="user image" />
		</div>
		<div class="trust-card-review">
			<p>{{ review }}</p>
		</div>
		<div class="trust-card-work">
			<span>{{ work }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "TrusCarouselCard",
	data() {
		return {};
	},
	props: {
		image: String,
		name: String,
		review: String,
		work: String,
	},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";
</style>
