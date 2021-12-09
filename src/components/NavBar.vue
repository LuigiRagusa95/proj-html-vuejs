<template>
	<section class="navigation">
		<div class="left-navigation">
			<a href="#">
				<div class="image-navigation">
					<img src="../assets/images/dark-logo.png" alt="max coach image" />
				</div>
			</a>
		</div>
		<div class="right-navigation">
			<div>
				<!-- // section links -->
				<nav>
					<ul>
						<li>
							<a href="#">
								<span>Home</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Pages</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Courses</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Features</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
						<li>
							<a href="#">
								<span>Blog</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
						<li>
							<a href="#"
								><span>Shop</span>
								<span><ion-icon name="chevron-down-outline"></ion-icon></span>
							</a>
						</li>
					</ul>
				</nav>
				<!-- // section actions -->
				<div></div>
				<!-- // section search -->
				<div></div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: "NavBar",
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";
a,
span {
	display: flex;
}

.navigation {
	display: flex;
	align-items: center;

	.left-navigation,
	.right-navigation {
		width: 100%;
		display: flex;
		padding: 1rem;
	}

	.image-navigation {
		width: 144px;
		height: 32px;
		@extend .flex-section;

		> img {
			width: 100%;
			object-fit: cover;
		}
	}

	.right-navigation {
		> div:first-of-type {
			@extend .flex-section;

			> nav {
				display: flex;
				> ul {
					list-style: none;
					@extend .flex-section;

					> li {
						padding: 0.5rem 0.75rem;
						> a {
							color: $mulled-wine;
							@extend .flex-section;

							> span:last-of-type {
								margin-left: 0.25rem;
							}
						}
					}
				}
			}
		}
	}
}
</style>
