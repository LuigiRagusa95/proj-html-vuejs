<template>
	<section>
		<div class="container">
			<div class="title">
				<h3>{{ data.subtitle }}</h3>
				<h1>
					{{ data.title }} <strong>{{ data.keyword }}</strong>
				</h1>
			</div>
			<TrustCarousel :data="data.cards" />
			<div class="title mod">
				<h3>
					{{ data.sloganSub }} <strong>{{ data.sloganSubKeyword }}</strong>
				</h3>
				<h1>{{ data.slogan }}</h1>
				<div class="button">
					<a href="#">Get started now</a>
				</div>
				<div class="image-overlay"><img src="@/assets/images/maxcoach-shape-01.png" alt="image overlay" /></div>
				<div class="image-overlay"><img src="@/assets/images/maxcoach-shape-02.png" alt="image overlay" /></div>
			</div>
		</div>
	</section>
</template>

<script>
import TrustCarousel from "./TrustCarousel.vue";
export default {
	components: { TrustCarousel },
	name: "TrustSection",
	data() {
		return {};
	},
	props: {
		data: Object,
	},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
section {
	padding: 2rem 0;
	background-color: $gallery;

	.container {
		margin: 0 auto;
		max-width: 1400px;

		> .title {
			width: 100%;
			display: flex;
			margin-top: 2rem;
			position: relative;
			align-items: center;
			padding-bottom: 4rem;
			flex-direction: column;
			justify-content: center;

			> h3 {
				font-weight: 400;
				color: $oslo-gray;
				font-size: 0.875rem;
				line-height: 1.5rem;
				margin-bottom: 1rem;
				text-transform: uppercase;
			}

			> h1 {
				font-weight: 700;
				line-height: 3rem;
				font-size: 2.5rem;
				color: $mulled-wine;
				margin-bottom: 1rem;
				letter-spacing: 0.02rem;

				strong {
					font-weight: 400;
					color: $jungle-green;
				}
			}

			&.mod {
				margin-top: 4rem;
				> h3 {
					font-size: 1.5rem;
					font-weight: 700;
					margin-bottom: 0.5rem;
					color: $mulled-wine;
					line-height: 1.5rem;
					text-transform: none;

					> strong {
						font-weight: 400;
						color: $jungle-green;
					}
				}

				> h1 {
					font-weight: 700;
					line-height: 2.5rem;
					font-size: 2rem;
					color: $mulled-wine;
					margin-bottom: 1rem;
					letter-spacing: 0.02rem;
				}

				> .button {
					display: flex;
					color: $white;
					font-weight: 600;
					margin-top: 2rem;
					width: fit-content;
					align-items: center;
					font-size: 0.875rem;
					line-height: 1.5rem;
					transition: 0.2s ease;
					border-radius: 0.5rem;
					justify-content: center;
					background-color: $jungle-green;

					> a {
						padding: 0.875rem 2rem;
					}

					&:hover {
						background-color: $mulled-wine;
					}
				}

				> .image-overlay {
					top: 25%;
					left: 10%;
					position: absolute;

					&:last-child {
						left: 80%;
					}
				}
			}
		}
	}
}
</style>
