<template>
	<section>
		<article v-for="(data, index) in data" :key="`banner-key-${index}`">
			<h1>{{ data.number }}</h1>
			<p>{{ data.label }}</p>
		</article>
	</section>
</template>

<script>
export default {
	name: "Banner",
	props: {
		data: Array,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

section {
	display: flex;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	background-color: $gallery;

	> article {
		padding: 1rem;
		margin: 0 2rem;
		text-align: center;

		> h1 {
			font-size: 2rem;
			line-height: 3rem;
			color: $jungle-green;
			letter-spacing: 0.02rem;
		}

		> p {
			margin: 0.5rem 0;
			font-weight: 500;
			color: $mulled-wine;
			font-size: 0.875rem;
			letter-spacing: 0.02rem;
			text-transform: uppercase;
		}
	}
}
</style>
