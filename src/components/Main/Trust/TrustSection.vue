<template>
	<section>
		<div class="container">
			<div class="title">
				<h3>People are oraising maxcoach</h3>
				<h1>What make they <strong>love us?</strong></h1>
			</div>
			<TrustCarousel :data="carouselPeople" />
			<div class="title mod">
				<h3>Start today for getting <strong>Online Certification</strong></h3>
				<h1>You can be your own guiding start with help!</h1>
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
