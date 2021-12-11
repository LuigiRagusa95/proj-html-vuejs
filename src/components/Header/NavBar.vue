<template>
	<section class="navigation">
		<div class="left-navigation">
			<a href="#">
				<div class="image-navigation">
					<img src="../../assets/images/dark-logo.png" alt="max coach image" />
				</div>
			</a>
		</div>
		<div class="right-navigation">
			<div>
				<!-- // section links -->
				<nav>
					<ul>
						<li v-for="(item, index) in data" :key="`navigation-link-${index}`">
							<a :href="item.goto">
								<span>{{ item.name }}</span>
								<span v-show="item.submenu"><ion-icon name="chevron-down-outline"></ion-icon></span>
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
	props: {
		data: Array,
	},
};
</script>

<style lang="scss" scoped>
@import "../../styles/index.scss";

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
		display: flex;
		align-items: center;

		> img {
			width: 100%;
			object-fit: cover;
		}
	}

	.right-navigation {
		> div:first-of-type {
			display: flex;
			align-items: center;

			> nav {
				display: flex;
				> ul {
					list-style: none;
					display: flex;
					align-items: center;

					> li {
						padding: 0.5rem 0.75rem;
						> a {
							color: $mulled-wine;
							display: flex;
							align-items: center;

							> span:last-of-type {
								margin-left: 0.25rem;
							}
						}
					}
				}
			}

			> .actions {
				display: flex;
				align-items: center;
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
						z-index: 2;
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
				display: flex;
				align-items: center;
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
