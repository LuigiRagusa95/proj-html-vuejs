<template>
	<section>
		<article>
			<div>
				<h1>{{ data.title }}</h1>
				<p>{{ data.paragraph }}</p>
				<div class="button">
					<a href="#">
						<span><ion-icon name="download-outline"></ion-icon></span><span>{{ data.buttonLabel }}</span>
					</a>
				</div>
			</div>
		</article>
		<figure>
			<img src="../../assets/images/home-5-hero-image.png" alt="" />
		</figure>
	</section>
</template>

<script>
export default {
	name: "Hero",
	data() {
		return {};
	},
	props: {
		data: Object,
	},
};
</script>

<style lang="scss" scoped>
@import "../../styles/index.scss";

section {
	display: flex;
	padding: 2rem 0;
	margin-top: 2rem;
	align-items: center;

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

			> .button {
				display: flex;
				color: $white;
				font-weight: 600;
				margin-top: 2rem;
				width: fit-content;
				align-items: center;
				font-size: 0.875rem;
				line-height: 1.5rem;
				border-radius: 0.5rem;
				justify-content: center;
				background-color: $jungle-green;

				> a {
					padding: 0.875rem 2rem;
					> span:first-of-type {
						font-size: 1.5rem;
						margin-right: 0.5rem;
					}
				}

				&:hover {
					background-color: $mulled-wine;
				}
			}
		}
	}

	> figure {
		z-index: 10;
		width: 100%;
		display: flex;
		padding: 1rem;
		position: relative;
		align-items: center;
		justify-content: center;

		> img {
			max-width: 512px;
		}
	}
}
</style>
