<template>
	<div class="card">
		<a :href="goto">
			<div class="card-image">
				<div>
					<img :src="require(`@/assets/images/${cover}.jpg`)" alt="cover image" />
				</div>
			</div>
			<div class="card-price">
				<span>{{ price }}</span>
			</div>
			<div class="card-info">
				<div class="user">
					<div class="user-image">
						<figure><img :src="require(`@/assets/images/${image}.jpeg`)" alt="user avatar" /></figure>
					</div>
					<div class="user-name">
						<span>{{ name }}</span>
					</div>
				</div>
			</div>
			<div class="card-title">
				<h1>{{ title }}</h1>
			</div>
			<div class="card-tags">
				<div class="tag">
					<span><ion-icon name="person-outline"></ion-icon></span><span>{{ lessons }} Lessons</span>
				</div>
				<div class="tag">
					<span><ion-icon name="newspaper-outline"></ion-icon></span><span>{{ students }} Students</span>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "CourseCard",
	data() {
		return {};
	},
	props: {
		name: String,
		image: String,
		cover: String,
		price: String,
		title: String,
		lessons: String,
		students: String,
		goto: String,
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";

.card {
	width: 100%;
	margin: 0.5rem;
	display: block;
	overflow: hidden;
	max-width: 320px;
	position: relative;
	transition: 0.2s ease;
	border-radius: 0.5rem;

	a {
		display: flex;
		position: relative;
		flex-direction: column;

		.card-image {
			overflow: hidden;
			position: relative;

			> div:first-of-type {
				overflow: hidden;
				padding-bottom: calc(100% * (3 / 4));
				> img {
					top: 0;
					width: 100%;
					object-fit: cover;
					position: absolute;
				}
			}
		}

		.card-price {
			top: 0;
			right: 0;
			display: flex;
			color: $white;
			font-weight: 600;
			position: absolute;
			font-size: 0.875rem;
			padding: 0.5rem 1rem;
			background-color: $jungle-green;
			border-bottom-left-radius: 0.5rem;
		}

		.card-info {
			display: block;
			padding: 0.5rem;
			margin-top: -1rem;
			> .user {
				display: flex;
				align-items: center;
				> .user-image {
					width: 2rem;
					height: 2rem;
					display: flex;
					overflow: hidden;
					align-items: center;
					margin-right: 0.5rem;
					border-radius: 999999px;
					justify-content: center;

					> figure {
						width: 100%;
						height: 100%;
						display: flex;
						flex-shrink: 0;
					}
					img {
						width: 100%;
						object-fit: contain;
					}
				}

				> .user-name {
					color: $oslo-gray;
				}
			}
		}

		.card-title {
			font-size: 1rem;
			color: $cod-gray;
			padding: 0.5rem;
		}

		.card-tags {
			display: flex;
			padding: 0.5rem;
			color: $oslo-gray;
			align-items: center;
			font-size: 0.875rem;
			> .tag {
				display: flex;
				align-items: center;
				margin-right: 1rem;
				> span:last-child {
					margin-left: 0.5rem;
				}
			}
		}
	}

	&:hover {
		background-color: $white;
		box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.2);
	}
}
</style>
