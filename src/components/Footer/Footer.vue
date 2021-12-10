<template>
	<footer>
		<div class="container">
			<div class="top">
				<div class="top-address">
					<ul>
						<li>
							<span>{{ data.content.address }}</span>
						</li>
						<li>
							<span>{{ data.content.phone }}</span>
						</li>
						<li>
							<span>{{ data.content.mail }}</span>
						</li>
						<li>
							<a href="#" v-for="(value, index) in data.content.social" :key="`social-key-${index}`">
								<ion-icon :name="`logo-${data.content.social[index].name}`"></ion-icon>
							</a>
						</li>
					</ul>
				</div>
				<div class="top-links">
					<ul v-for="(menu, index) in data.content.links" :key="`menu-key-${index}`">
						<li class="title">
							<span>{{ menu.title }}</span>
						</li>
						<li v-for="(link, idx) in menu.list" :key="`menu-key-${idx}`">
							<a href="#">{{ menu.list[idx].name }}</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="credits">
				<span>{{ data.content.rights }}</span>
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
	props: {
		data: Object,
	},
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
