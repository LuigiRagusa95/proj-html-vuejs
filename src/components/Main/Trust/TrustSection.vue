<template>
	<section>
		<div class="container">
			<div class="title">
				<h3>People are oraising maxcoach</h3>
				<h1>What make they <strong>love us?</strong></h1>
			</div>
			<TrustCarousel :data="carouselPeople" />
		</div>
	</section>
</template>

<script>
import TrustCarousel from "./TrustCarousel.vue";
export default {
	components: { TrustCarousel },
	name: "TrustSection",
	data() {
		return {
			carouselPeople: [
				{ name: "Mina Hollace", work: "/Freelancer", review: "I am a free to learn at my own pace, follow my own schedule and choose the subject I like. Great study portal for people like me.", image: "testimonial-avata-02" },
				{ name: "Madley Pondor", work: "/IT Specialist", review: "MaxCoach is the best choice.Their tutors are smart and professional when dealing with students.", image: "testimonial-avata-04" },
				{ name: "Luvic Dubble", work: "/Private Tutor", review: "I am happy with their arrangement of lessons and subject. They reflect a scientific investigation.", image: "testimonial-avata-01" },
				{ name: "Lorem Lorem", work: "/Placeholder", review: "Lorem Ipsum...", image: "testimonial-avata-03" },
			],
		};
	},
	props: {},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";
section {
	padding: 2rem 0;
	background-color: $gallery;

	.container {
		margin: 0 auto;
		max-width: 1400px;

		> .title {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;

			> h3 {
				font-weight: 400;
				color: $oslo-gray;
				font-size: 0.875rem;
				line-height: 1.5rem;
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
		}
	}
}
</style>
