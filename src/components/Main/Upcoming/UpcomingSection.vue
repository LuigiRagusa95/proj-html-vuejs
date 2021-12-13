<template>
	<section class="upcoming">
		<div class="container">
			<div class="title">
				<h3>{{ data.subtitle }}</h3>
				<h1>
					{{ data.title }} <strong>{{ data.keyword }}</strong>
				</h1>
			</div>
			<div class="card-list">
				<UpcomingCard v-for="(data, index) in data.cards" :key="`upcoming-card-${index}`" :name="data.name" :place="data.place" :day="data.day" :month="data.month" :button="data.button" />
			</div>
			<div class="link">
				<a>
					Excited about our event?
					<a :href="data.button.goto">
						{{ data.button.label }}
						<span><ion-icon name="arrow-forward-outline"></ion-icon></span>
					</a>
				</a>
			</div>
		</div>
	</section>
</template>

<script>
import UpcomingCard from "./UpcomingCard.vue";
export default {
	components: { UpcomingCard },
	name: "UpcomingSection",
	props: {
		data: Object,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
@import "@/styles/index.scss";
.upcoming {
	> .container {
		margin: 0 auto;
		padding: 2rem 0;
		max-width: 1400px;

		> .title {
			@include title();
		}

		> .card-list {
			display: flex;
			flex-wrap: wrap;
			margin-top: 2rem;
			justify-content: center;
		}

		> .link {
			display: flex;
			margin-top: 2rem;
			color: $oslo-gray;
			line-height: 1.5rem;
			justify-content: center;

			a > a {
				display: flex;
				align-items: center;
				color: $jungle-green;
				margin-left: 0.25rem;
				text-decoration: underline;
				> * {
					margin-left: 0.25rem;
				}
			}
		}
	}
}
</style>
