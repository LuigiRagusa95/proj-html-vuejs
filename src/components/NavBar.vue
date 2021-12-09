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
				<div class="actions">
					<a href="#" class="badged" data-quantity="0">
						<span><ion-icon name="cart-outline"></ion-icon></span>
					</a>
					<a href="#">
						<span><ion-icon name="person-circle-outline"></ion-icon></span>
					</a>
				</div>
				<!-- // section search -->
				<div class="search">
					<input type="text" name="input-field" id="input-field" placeholder="Search..." />
					<span><ion-icon name="search-outline"></ion-icon></span>
				</div>
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

			> .actions {
				@extend .flex-section;
				> a {
					display: flex;
					padding: 0.5rem;
					font-size: 1.5em;
					position: relative;
					color: $mulled-wine;
					align-items: center;
					justify-content: center;

					&.badged::before {
						display: flex;
						width: 1rem;
						height: 1rem;
						color: $gallery;
						position: absolute;
						font-size: 0.65rem;
						align-items: center;
						left: calc(100% - 1rem);
						border-radius: 999999px;
						justify-content: center;
						bottom: calc(100% - 1rem);
						content: attr(data-quantity);
						background-color: $jungle-green;
					}
				}
			}

			> .search {
				padding: 0.25rem;
				margin-left: 1rem;
				@extend .flex-section;
				border-radius: 0.25rem;
				background-color: $white;

				> input {
					max-width: 168px;
					padding: 0.25rem;
					&::placeholder {
						color: $oslo-gray;
					}
				}

				> span:last-of-type {
					font-size: 1.125rem;
					color: $jungle-green;
					margin-right: 0.25rem;
				}
			}
		}
	}
}
</style>
