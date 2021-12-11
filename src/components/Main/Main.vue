<template>
	<main>
		{{ aboutData }}
		<AboutSection />
		<CourseSection />
		<InfoSection />
		<UpcomingSection />
		<TrustSection />
	</main>
</template>

<script>
import AboutSection from "./About/AboutSection.vue";
import CourseSection from "./Courses/CourseSection.vue";
import UpcomingSection from "./Upcoming/UpcomingSection.vue";
import InfoSection from "./Info/InfoSection.vue";
import TrustSection from "./Trust/TrustSection.vue";
export default {
	components: { AboutSection, CourseSection, InfoSection, TrustSection, UpcomingSection },
	name: "Main",
	data() {
		return {
			aboutData: null,
			courseData: null,
			upcomingData: null,
			infoData: null,
			trustData: null,
		};
	},
	props: {
		data: Object,
	},
	mounted() {
		this.setAboutData();
	},
	methods: {
		setAboutData() {
			this.aboutData = this.data.about;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>
