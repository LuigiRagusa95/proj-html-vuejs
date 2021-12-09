<template>
	<nav>
		<!-- prettier-ignore -->
		<ul>
            <li><a href="#"><span><ion-icon name="triangle-outline"></ion-icon></span></a></li>
            <li><a href="#"><span><ion-icon name="help-buoy-outline"></ion-icon></span></a></li>
            <li><a href="#"><span><ion-icon name="book-outline"></ion-icon></span></a></li>
            <li><a href="#"><span><ion-icon name="cart-outline"></ion-icon></span></a></li>
        </ul>
	</nav>
</template>

<script>
export default {
	name: "NavFix",
	data() {
		return {};
	},
	methods: {},
};
</script>

<style lang="scss" scoped>
@import "../styles/index.scss";

nav {
	top: 25%;
	right: 0;
	z-index: 10;
	position: fixed;
	padding: 0.5rem;
	border-radius: 0.25rem;
	background-color: $white;

	> ul {
		display: flex;
		flex-direction: column;

		> li {
			cursor: pointer;
			color: $cod-gray;
			padding: 0.25rem;

			&:not(li:last-child) {
				margin-bottom: 0.5rem;
			}

			a {
				font-size: 1.125rem;
			}
		}
	}
}
</style>
