<template>
	<main>
		<!-- {{ setAboutData() }} -->
		<AboutSection :data="aboutData" />
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
	created() {
		this.setAboutData();
		this.setCourseData();
		this.setUpcomingData();
		this.setInfoData();
		this.setTrustData();
	},
	methods: {
		setAboutData() {
			this.aboutData = this.data.sections.about;
		},
		setCourseData() {
			this.courseData = this.data.sections.course;
		},
		setUpcomingData() {
			this.upcomingData = this.data.sections.upcoming;
		},
		setInfoData() {
			this.infoData = this.data.sections.info;
		},
		setTrustData() {
			this.trustData = this.data.sections.trust;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
</style>
