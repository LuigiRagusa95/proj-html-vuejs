<template>
	<section>
		<article>
			<div>
				<h1>Complete Your Dreams in JavaS Programming</h1>
				<p>Learn any program in distance and for a reasonable free. You don't have to struggle alone, you've got our assistance and help.</p>
				<a href="#" class="button-primary">
					<span><ion-icon name="download-outline"></ion-icon></span><span>Download free E-book</span>
				</a>
			</div>
		</article>
		<figure>
			<img src="../assets/images/home-5-hero-image.png" alt="" />
		</figure>
	</section>
</template>

<script>
export default {
	name: "Hero",
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

section {
	padding: 2rem 0;
	margin-top: 2rem;
	@extend .flex-section;

	> article {
		width: 100%;
		display: flex;
		padding: 1rem;
		align-items: center;
		color: $mulled-wine;
		justify-content: center;

		> div:first-of-type {
			max-width: 60%;
			> h1 {
				font-size: 2.5rem;
				line-height: 3rem;
				margin-bottom: 1rem;
			}

			> .button-primary {
				color: $white;
				display: flex;
				cursor: pointer;
				margin-top: 2rem;
				font-weight: 500;
				padding: 1rem 2rem;
				align-items: center;
				border-radius: 0.5rem;
				max-width: fit-content;
				justify-content: center;
				background-color: $jungle-green;

				> span:first-of-type {
					font-size: 1.5rem;
					margin-right: 0.5rem;
				}
			}
		}
	}

	> figure {
		width: 100%;
		display: flex;
		padding: 1rem;
		align-items: center;
		justify-content: center;

		> img {
			max-width: 512px;
		}
	}
}
</style>
