<template>
	<footer>
		<div class="container">
			<div class="top">
				<div class="top-address">
					<ul>
						<li><span>382 NE 192st St # 87394 Miami, FL 33179-3899</span></li>
						<li><span>+1(305)547-9909(9am-5pm EST, Monday - Friday)</span></li>
						<li><span>support@maxcoach.components</span></li>
						<li>
							<a href="#"><ion-icon name="logo-facebook"></ion-icon></a><a href="#"><ion-icon name="logo-twitter"></ion-icon></a><a href="#"><ion-icon name="logo-instagram"></ion-icon></a><a href="#"><ion-icon name="logo-linkedin"></ion-icon></a>
						</li>
					</ul>
				</div>
				<div class="top-links">
					<ul>
						<li class="title"><span>Explore</span></li>
						<li><a href="#">Start Here</a></li>
						<li><a href="#">Blog</a></li>
						<li><a href="#">About us</a></li>
					</ul>
					<ul>
						<li class="title"><span>&nbsp;</span></li>
						<li><a href="#">Success story</a></li>
						<li><a href="#">Courses</a></li>
						<li><a href="#">Contact us</a></li>
					</ul>
					<ul>
						<li class="title"><span>Information</span></li>
						<li><a href="#">Memership</a></li>
						<li><a href="#">Purchase guide</a></li>
						<li><a href="#">Privacy policy </a></li>
						<li><a href="#">Terms of services </a></li>
					</ul>
				</div>
			</div>
			<div class="credits">
				<span>2020 Maxcoach. All rights Reserved</span>
				<div class="button" @click.prevent="goToTop">
					<a href="#"
						><span><ion-icon name="arrow-up"></ion-icon></span
					></a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: "Footer",
	data() {
		return {};
	},
	methods: {
		goToTop() {
			window.scrollTo(0, 0);
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
footer {
	padding: 2rem 0;

	> .container {
		margin: 0 auto;
		max-width: 1400px;

		> .top {
			display: flex;
			padding: 1rem 1rem 3rem;
			align-items: flex-start;

			> .top-address {
				width: 100%;
				> ul {
					> li {
						display: flex;
						padding: 0.5rem;
						color: $oslo-gray;
						align-items: center;
						&:last-child {
							> a {
								font-size: 1.5rem;
								margin-right: 1rem;
							}
						}
					}
				}
			}

			> .top-links {
				width: 100%;
				display: flex;
				align-items: flex-start;
				justify-content: center;

				> ul {
					margin: 0 1rem;
					> li {
						padding: 0.5rem;
						color: $oslo-gray;

						&.title {
							font-weight: 700;
							color: $cod-gray;
							font-size: 1.25rem;
						}
					}
				}
			}
		}

		> .credits {
			display: flex;
			padding: 1rem;
			color: $oslo-gray;
			align-items: center;
			font-size: 0.875rem;
			justify-content: center;

			> .button {
				right: 1rem;
				color: $white;
				font-size: 2rem;
				position: absolute;

				border-radius: 999999px;

				background-color: $jungle-green;

				> a {
					width: 3rem;
					height: 3rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}
			}
		}
	}
}
</style>
