<template>
	<div class="upcoming-card">
		<div class="upcoming-card-left">
			<div class="upcoming-card-left-small-title">
				<span><ion-icon name="location-outline"></ion-icon></span><span>{{ place }}</span>
			</div>
			<div class="upcoming-card-left-title">{{ name }}</div>
		</div>
		<div class="upcoming-card-right">
			<div class="upcoming-card-right-date">
				<h1>{{ day }}</h1>
				<h3>{{ month }}</h3>
			</div>
			<div class="upcoming-card-right-button">
				<div class="button">
					<a :href="button.goto">{{ button.label }}</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UpcomingCard",
	props: {
		name: String,
		place: String,
		day: String,
		month: String,
		button: Object,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.upcoming-card {
	width: 100%;
	display: flex;
	margin: 1rem;
	cursor: pointer;
	max-width: 480px;
	overflow: hidden;
	position: relative;
	border-radius: 0.5rem;
	transition: 0.2s ease;
	background-color: $gallery;
	justify-content: space-between;

	> .upcoming-card-left {
		width: 100%;
		padding: 1rem;

		.upcoming-card-left-small-title {
			display: flex;
			color: $oslo-gray;
			align-items: center;

			> span:last-of-type {
				margin-left: 0.25rem;
			}
		}
		.upcoming-card-left-title {
			display: flex;
			color: $cod-gray;
			line-height: 2rem;
			font-weight: 700;
			font-size: 1.125rem;
			align-items: center;
		}
	}

	> .upcoming-card-right {
		display: flex;
		padding: 1rem;
		align-items: center;
		flex-direction: column;

		> .upcoming-card-right-date {
			display: flex;
			flex-flow: column;
			align-items: center;
			margin-bottom: 1rem;

			> h1 {
				font-size: 2.5rem;
				font-weight: 400;
				line-height: 3rem;
				color: $jungle-green;
			}

			> h3 {
				color: $cod-gray;
				text-transform: uppercase;
			}
		}

		> .upcoming-card-right-button {
			.button {
				display: flex;
				color: $white;
				font-weight: 600;
				width: fit-content;
				align-items: center;
				font-size: 0.875rem;
				line-height: 1.5rem;
				white-space: nowrap;
				border-radius: 0.25rem;
				justify-content: center;
				background-color: $jungle-green;

				> a {
					padding: 0.25rem 1rem;
				}
			}
		}
	}

	&:hover {
		background-color: $white;
		box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.2);

		&::before {
			top: 0;
			left: 0;
			width: 4px;
			content: "";
			height: 100%;
			position: absolute;
			background-color: $jungle-green;
		}

		.upcoming-card-right-button > .button {
			background-color: $mulled-wine;
		}
	}
}
</style>
