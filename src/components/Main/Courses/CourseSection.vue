<template>
	<section>
		<div class="title">
			<h3>{{ data.subtitle }}</h3>
			<h1>
				{{ data.title }} <strong>{{ data.keyword }}</strong>
			</h1>
		</div>
		<article>
			<div>
				<CourseCard v-for="(data, index) in data.cards" :key="`featured-card-${index}`" :title="data.title" :cover="data.cover" :price="data.price" :image="data.image" :name="data.author" :lessons="data.lessons" :students="data.students" :goto="data.goto" />
			</div>
			<div>
				<div class="button">
					<a :href="data.button.goto">
						<span>{{ data.button.label }}</span
						><span><ion-icon name="arrow-forward-outline"></ion-icon></span>
					</a>
				</div>
			</div>
		</article>
		<div class="wave">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="currentColor" fill-opacity="1" d="M0,256L120,218.7C240,181,480,107,720,106.7C960,107,1200,181,1320,218.7L1440,256L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
		</div>
	</section>
</template>

<script>
import CourseCard from "./CourseCard.vue";

export default {
	components: { CourseCard },
	name: "CourseSection",
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
	padding: 2rem 0;
	position: relative;
	background: linear-gradient(#ffffff, $gallery);

	> .title {
		@include title();
	}

	article {
		margin: 0 auto;
		max-width: 1400px;

		> div:first-of-type {
			display: flex;
			padding: 2rem;
			flex-wrap: wrap;
			justify-content: center;
		}

		> div:last-of-type {
			display: flex;
			padding: 1rem;
			justify-content: center;
		}

		.button {
			display: flex;
			color: $white;
			font-size: 1rem;
			font-weight: 600;
			width: fit-content;
			align-items: center;
			line-height: 1.5rem;
			transition: 0.2s ease;
			border-radius: 0.5rem;
			justify-content: center;
			background-color: $jungle-green;

			> a {
				padding: 0.875rem 2rem;
				> span:last-of-type {
					margin-left: 1rem;
					font-size: 1.5rem;
				}
			}

			&:hover {
				background-color: $mulled-wine;
			}
		}
	}

	.wave {
		width: 100%;
		color: $gallery;
		position: absolute;
		pointer-events: none;
		top: calc(100% - 1rem);
		transform: rotate(180deg);
	}
}
</style>
