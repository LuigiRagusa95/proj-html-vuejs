<template>
	<div class="trust-card">
		<div class="trust-card-image">
			<img :src="require(`../../../assets/images/${image}.jpg`)" alt="user image" />
		</div>
		<div class="trust-card-review">
			<p class="trust-card-review-text">{{ review }}</p>
		</div>
		<div class="trust-card-work">
			<span class="trust-card-work-name">{{ name }}</span>
			<span class="trust-card-work-work">{{ work }}</span>
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

.trust-card {
	display: flex;
	margin: 1rem;
	padding: 1rem;
	max-width: 360px;
	position: relative;
	flex-direction: column;
	background-color: $white;

	> .trust-card-image {
		left: 50%;
		width: 10rem;
		height: 10rem;
		overflow: hidden;
		top: calc(-5rem);
		position: absolute;
		border-radius: 999999px;
		transform: translate(-50%, 0);

		> img {
			width: 100%;
			object-fit: cover;
		}
	}

	> .trust-card-review {
		height: 100%;
		margin-top: 6rem;
		text-align: center;
		color: $mulled-wine;
	}

	> .trust-card-work {
		> .trust-card-work-name {
			display: flex;
			padding: 1rem 0.5rem;
			color: $cod-gray;
			font-weight: 600;
			align-items: flex-end;
			justify-content: center;
		}

		> .trust-card-work-work {
			display: flex;
			color: $oslo-gray;
			font-size: 0.875rem;
			align-items: flex-end;
			justify-content: center;
		}
	}
}
</style>
