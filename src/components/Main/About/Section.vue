<template>
	<section>
		<div class="title">
			<h3>start learning coding languages</h3>
			<h1>
				<span>Build Your Dream </span>
				<span class="title-keyword">TODAY</span>
			</h1>
		</div>
		<ul class="card-list">
			<Card v-for="(card, index) in cards" :key="`card-n-${index}`" :title="card.title" :text="card.text" :label="card.label" :image="card.image" />
		</ul>
	</section>
</template>

<script>
import Card from "./Card.vue";
export default {
	components: { Card },
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
	margin: 0 auto;
	max-width: 1400px;
	min-height: 100vh;

	> .title {
		display: flex;
		padding: 1rem;
		flex-flow: column;
		margin-top: 2rem;
		align-items: center;

		> h3 {
			font-size: 1rem;
			font-weight: 400;
			color: $oslo-gray;
			line-height: 1.5rem;
			letter-spacing: 0.02rem;
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

	> .card-list {
		display: flex;
		padding: 1rem;
		margin-top: 2rem;
		align-items: center;
		justify-content: center;
	}
}
</style>
