<template>
	<section>
		<article>
			<div>
				<CourseCard v-for="(data, index) in datas" :key="`featured-card-${index}`" :title="data.title" :cover="data.cover" :price="data.price" :image="data.image" :name="data.author" :lessons="data.lessons" :students="data.students" />
			</div>
			<div>
				<div class="button">
					<a href="#">
						<span>View all courses</span><span><ion-icon name="arrow-forward-outline"></ion-icon></span>
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
	name: "Section",
	data() {
		return {
			datas: [
				{
					image: "user-01",
					author: "Blanche Fields",
					title: "Learning to Write as  a Professional Author",
					lessons: "20",
					students: "50",
					price: "$40.00",
					cover: "course-01",
				},
				{
					image: "user-02",
					author: "Maggie Strickland",
					title: "Customer-centric Info-Tech Strategies",
					lessons: "24",
					students: "769",
					price: "Free",
					cover: "course-02",
				},
				{
					image: "user-02",
					author: "Maggie Strickland",
					title: "Open Programming Courses for Everyone: Python",
					lessons: "17",
					students: "62",
					price: "$19.00",
					cover: "course-03",
				},
				{
					image: "user-01",
					author: "Blanche Fields",
					title: "Academic Listening and Note-taking",
					lessons: "14",
					students: "67",
					price: "$26.00",
					cover: "course-04",
				},
				{
					image: "user-01",
					author: "Blanche Fields",
					title: "Master jQuery in a Short Period of Time",
					lessons: "6",
					students: "51",
					price: "$39.00",
					cover: "course-05",
				},
				{
					image: "user-01",
					author: "Blanche Fields",
					title: "Introduction to JavaScript for Beginners",
					lessons: "14",
					students: "76",
					price: "$59.00",
					cover: "course-06",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/index.scss";
section {
	position: relative;
	background: linear-gradient(#ffffff, $gallery);

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
		}
	}

	.wave {
		color: $gallery;
		position: absolute;
		top: calc(100% - 1rem);
		transform: rotate(180deg);
	}
}
</style>
