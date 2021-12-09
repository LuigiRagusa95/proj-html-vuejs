<template>
	<div class="card">
		<div class="card-image">
			<div>
				<img :src="require(`../../../assets/images/${image}.png`)" alt="card-image" />
			</div>
		</div>
		<div class="card-title">
			<h1>{{ title }}</h1>
		</div>
		<div class="card-description">
			<p>{{ text }}</p>
		</div>
		<div class="card-button">
			<a href="#">
				<span>{{ label }}</span>
				<span><ion-icon name="arrow-forward-outline"></ion-icon></span>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
	data() {
		return {};
	},
	props: {
		title: String,
		text: String,
		label: String,
		image: String,
	},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";

.card {
	display: flex;
	padding: 1rem;
	flex-flow: column;
	max-width: 320px;
	color: $cod-gray;
	text-align: center;

	&-image {
		overflow: hidden;
		position: relative;

		> div {
			width: 100%;
			display: flex;
			align-items: center;
			padding-bottom: calc(100% * (3 / 4));
			justify-content: center;

			> img {
				top: 0;
				object-fit: cover;
				position: absolute;
			}
		}
	}

	&-title {
		font-weight: 600;
		font-size: 0.875em;
		letter-spacing: 0.02rem;
	}

	&-description {
		margin-top: 1rem;
		color: $oslo-gray;
	}

	&-button {
		margin-top: 1rem;
		> a {
			display: flex;
			padding: 0.5rem;
			font-weight: 600;
			align-items: center;
			color: $mulled-wine;
			justify-content: center;

			> span:last-of-type {
				margin-left: 0.5rem;
			}
		}
	}
}
</style>
