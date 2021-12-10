<template>
	<section>
		<div class="container">
			<div>
				<article>
					<h3>Why esitate to register?</h3>
					<h1>Learn At Your Own <strong>Pace</strong></h1>
					<ul>
						<li>
							<span><ion-icon name="checkmark-sharp"></ion-icon></span><span>Select & customize courses to your preferences</span>
						</li>
						<li>
							<span><ion-icon name="checkmark-sharp"></ion-icon></span><span>Change the tutor and make arrangements</span>
						</li>
						<li>
							<span><ion-icon name="checkmark-sharp"></ion-icon></span><span>Participate in events to join others</span>
						</li>
						<li>
							<span><ion-icon name="checkmark-sharp"></ion-icon></span><span>Get the desider certificate delivered at house</span>
						</li>
					</ul>
					<div class="button">
						<a href="#">
							<span>Get started for free</span>
						</a>
					</div>
				</article>
				<figure>
					<div class="image">
						<img src="../../../../assets/images/home-5-image-01.png" alt="image description" />
						<img class="imgage-underlay" src="../../../../assets/images/underlay-shape-grey.svg" alt="image description" />
					</div>

					<img class="imgage-overlay" src="../../../../assets/images/maxcoach-shape-05-100x100.png" alt="image description" />
				</figure>
			</div>
			<div>first 2</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "LearningSection",
	data() {
		return {};
	},
	props: {},
	methods: {},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/index.scss";
section {
	margin-top: 16rem;

	> .container {
		margin: 0 auto;
		max-width: 1400px;

		> div:first-child,
		> div:last-child {
			display: flex;
			align-items: center;
			justify-content: center;

			> article {
				display: flex;
				padding: 2rem;
				margin-right: 2rem;
				flex-direction: column;

				> h3 {
					font-weight: 400;
					color: $oslo-gray;
					font-size: 0.875rem;
					line-height: 1.5rem;
					text-transform: uppercase;
				}

				> h1 {
					font-weight: 700;
					max-width: 380px;
					line-height: 3rem;
					font-size: 2.5rem;
					color: $mulled-wine;
					letter-spacing: 0.02rem;

					strong {
						font-weight: 400;
						color: $jungle-green;
					}
				}

				ul {
					margin: 1rem 0;

					> li {
						display: flex;
						padding: 0.5rem;
						align-items: center;

						> span:first-child {
							margin-right: 1rem;
							font-size: 1.25rem;
							color: $jungle-green;
						}

						> span:last-child {
							color: $oslo-gray;
						}
					}
				}

				.button {
					display: flex;
					color: $white;
					font-weight: 600;
					width: fit-content;
					align-items: center;
					font-size: 0.875rem;
					line-height: 1.5rem;
					border-radius: 0.5rem;
					justify-content: center;
					background-color: $jungle-green;

					> a {
						padding: 0.875rem 2rem;
					}
				}
			}

			> figure {
				width: 100%;
				max-width: 480px;
				position: relative;

				.image {
					z-index: 1;
					width: 100%;

					.imgage-underlay {
						left: 0;
						bottom: 0;
						width: 100%;
						z-index: -1;
						max-width: 360px;
						position: absolute;
					}
				}

				.imgage-overlay {
					top: 50%;
					right: 0;
					width: 120px;
					position: absolute;
				}
			}
		}
	}
}
</style>
