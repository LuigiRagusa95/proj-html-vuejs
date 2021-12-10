<template>
	<section>
		<div class="container">
			<div class="about-title">
				<h3>start learning coding languages</h3>
				<h1>
					<span>Build Your Dream </span>
					<span class="title-keyword">TODAY</span>
				</h1>
			</div>
			<ul class="about-list">
				<Card v-for="(card, index) in cards" :key="`card-n-${index}`" :title="card.title" :text="card.text" :label="card.label" :image="card.image" />
			</ul>
			<div class="about-info">
				<figure>
					<div>
						<img src="../../../assets/images/about-us-03-image-01.png" alt="about image" />
					</div>
					<img class="image-overlay" src="@/assets/images/underlay-shape-lilla.svg" alt="underlay image" />
				</figure>
				<article>
					<h3>Dream with <strong>MAXCOACH</strong></h3>
					<h1>Construct A <strong>Stunning</strong> Career Perspective</h1>
					<Accordion />
				</article>
			</div>
		</div>
		<Banner />
	</section>
</template>

<script>
import Card from "./Card.vue";
import Accordion from "./Accordion.vue";
import Banner from "./Banner.vue";
export default {
	components: { Card, Accordion, Banner },
	name: "Section",
	data() {
		return {
			cards: [
				{
					title: "Idea Discussion",
					text: "Get teamed up with the specialist who work and teach coding for years at famous universities.",
					label: "Start now",
					image: "home-5-image-box-01",
				},
				{
					title: "Idea Development",
					text: "Learn to start building a webpage from scratch. You decide your own pace, course and speed.",
					label: "Start now",
					image: "home-5-image-box-02",
				},
				{
					title: "System Administration",
					text: "Learners are encouraged to study the mechanism and structure of system administration.",
					label: "Start now",
					image: "home-5-image-box-03",
				},
				{
					title: "Graphic Design",
					text: "Have a passion for graphics and arts? Show your talents with confidence and self-assertiveness",
					label: "Start now",
					image: "home-5-image-box-04",
				},
			],
		};
	},
	methods: {},
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

		> .about-title {
			display: flex;
			padding: 1rem;
			flex-flow: column;
			margin-top: 2rem;
			align-items: center;

			> h3 {
				font-weight: 400;
				color: $oslo-gray;
				font-size: 0.875rem;
				line-height: 1.5rem;
				margin-bottom: 1rem;
				letter-spacing: 0.02rem;
				text-transform: uppercase;
			}
			> h1 {
				display: flex;
				font-weight: 700;
				font-size: 2.5rem;
				margin-top: 0.5rem;
				color: $mulled-wine;
				align-items: center;
				line-height: 2.5rem;

				> span:last-of-type {
					font-weight: 400;
					margin-left: 0.5rem;
					color: $jungle-green;
				}
			}
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
