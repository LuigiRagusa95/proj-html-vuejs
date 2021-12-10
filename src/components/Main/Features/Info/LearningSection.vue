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
			<div>
				<figure>
					<div class="image">
						<img src="../../../../assets/images/home-5-image-02.png" alt="image description" />
						<img class="imgage-underlay mod" src="../../../../assets/images/underlay-shape-grey.svg" alt="image description" />
					</div>
					<img class="imgage-overlay" src="../../../../assets/images/maxcoach-shape-07-100x100.png" alt="image description" />
					<img class="imgage-overlay" src="../../../../assets/images/maxcoach-shape-01.png" alt="image description" />
				</figure>
				<article>
					<h3>What are you looking for?</h3>
					<h1 class="mod">Learn on your <strong>mobile</strong> anytime!</h1>
					<p>Save lessons for later and revise or write notes at any time and on multiple devices on your way. Never interfere with activities of enjoyment or other precious moments.</p>
					<div class="button">
						<a href="#">
							<span>Download Our App</span>
						</a>
					</div>
				</article>
			</div>
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
			padding: 2rem;
			align-items: center;
			justify-content: center;

			> article {
				display: flex;
				padding: 2rem;
				margin: 0 2rem;
				max-width: 560px;
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
					margin-bottom: 1rem;
					letter-spacing: 0.02rem;

					strong {
						font-weight: 400;
						color: $jungle-green;
					}
					&.mod {
						max-width: none;
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

				p {
					color: $oslo-gray;
					margin-bottom: 1.5rem;
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
						&.mod {
							bottom: -5%;
							left: -20%;
						}
					}
				}

				.imgage-overlay {
					z-index: -1;
					position: absolute;

					&:nth-child(2) {
						top: 50%;
						right: 0;
						width: 120px;
					}

					&:nth-child(3) {
						top: 50%;
						left: -25%;
						z-index: -1;
						width: 120px;
						position: absolute;
						transform: translateY(-50%);
					}
				}
			}
		}
	}
}
</style>
