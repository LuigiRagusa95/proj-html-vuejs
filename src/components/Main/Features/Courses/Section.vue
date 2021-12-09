<template>
	<section>
		<div>
			<CourseCard v-for="(data, index) in datas" :key="`featured-card-${index}`" :title="data.title" :cover="data.cover" :price="data.price" :image="data.image" :name="data.author" :lessons="data.lessons" :students="data.students" />
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
	margin: 0 auto;
	max-width: 1400px;

	> div:first-of-type {
		display: flex;
		padding: 2rem;
		flex-wrap: wrap;
		justify-content: center;
	}
}
</style>
