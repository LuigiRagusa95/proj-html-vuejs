<template>
	<section>
		<div class="container">
			<div class="title">
				<h3>{{ data.subtitle }}</h3>
				<h1>
					{{ data.title }}
					<strong class="title-keyword">{{ data.keyword }}</strong>
				</h1>
			</div>
			<ul class="about-list">
				<Card v-for="(card, index) in data.cards" :key="`card-n-${index}`" :title="card.title" :text="card.text" :label="card.label" :image="card.image" :link="card.goto" />
			</ul>
			<div class="about-info">
				<figure>
					<div>
						<img src="@/assets/images/about-us-03-image-01.png" alt="about image" />
					</div>
					<img class="image-overlay" src="@/assets/images/underlay-shape-lilla.svg" alt="underlay image" />
				</figure>
				<article>
					<h3>Dream with <strong>MAXCOACH</strong></h3>
					<h1>Construct A <strong>Stunning</strong> Career Perspective</h1>
					<Accordion :data="data.accordion" />
				</article>
			</div>
		</div>
		<Banner :data="data.banner" />
	</section>
</template>

<script>
import Card from "./Card.vue";
import Accordion from "./Accordion.vue";
import Banner from "./Banner.vue";
export default {
	components: { Card, Accordion, Banner },
	name: "AboutSection",
	data() {
		return {};
	},
	props: {
		data: Object,
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
section {
	.container {
		margin: 0 auto;
		padding: 2rem 0;
		max-width: 1400px;
		min-height: 100vh;

		> .title {
			@include title();
		}

		> .about-list {
			display: flex;
			padding: 1rem;
			margin-top: 2rem;
			align-items: center;
			justify-content: center;
		}

		> .about-info {
			display: flex;
			padding: 1rem;
			margin-top: 2rem;
			// align-items: center;
			justify-content: center;

			> figure {
				width: 100%;
				display: flex;
				padding: 2rem;
				position: relative;
				align-items: center;
				justify-content: center;

				> div:first-child {
					max-width: 420px;

					> img {
						z-index: 10;
						max-width: 100%;
						object-fit: cover;
					}
				}

				> .image-overlay {
					top: 20%;
					left: 0;
					width: 50%;
					z-index: -1;
					position: absolute;
				}
			}

			> article {
				width: 100%;
				padding: 2rem;

				> h3 {
					font-weight: 400;
					color: $oslo-gray;
					font-size: 0.875rem;
					margin-bottom: 1rem;
					text-transform: uppercase;

					> strong {
						color: $pewter;
					}
				}

				> h1 {
					width: 100%;
					line-height: 3rem;
					font-size: 2.5rem;
					margin-bottom: 2rem;
					color: $mulled-wine;

					> strong {
						font-weight: 400;
						color: $jungle-green;
					}
				}
			}
		}
	}
}
</style>
