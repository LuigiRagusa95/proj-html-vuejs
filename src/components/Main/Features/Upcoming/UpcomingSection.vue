<template>
	<section class="upcoming">
		<div class="container">
			<div class="title">
				<h3>Get in contact now</h3>
				<h1>Upcoming <strong>Events</strong></h1>
			</div>
			<div class="card-list">
				<UpcomingCard v-for="(data, index) in upcomingCards" :key="`upcoming-card-${index}`" :name="data.name" :place="data.place" :day="data.day" :month="data.month" />
			</div>
			<div class="link">
				<a>
					Excited about our event?
					<a href="#"
						>View all events
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
	data() {
		return {
			upcomingCards: [
				{ name: "Storytelling Workshop", day: "22", month: "nov", place: "Texas, US" },
				{ name: "Painting Art Contest 2020", day: "10", month: "oct", place: "New York, US" },
				{ name: "International Art Fair 2020", day: "23", month: "nov", place: "Hamburg, Germany" },
				{ name: "Street Performance: Call for Artist", day: "15", month: "dec", place: "Illinois, US" },
				{ name: "Consumer Food Safety Education Conference", day: "22", month: "jul", place: "Illinois, US" },
				{ name: "How meditation improve your mental", day: "12", month: "aug", place: "Dubai" },
			],
		};
	},
};
</script>

<style lang="scss" scoped>
@import "../../../../styles/index.scss";
.upcoming {
	> .container {
		margin: 0 auto;
		padding: 2rem 0;
		max-width: 1400px;

		> .title {
			width: 100%;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;

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
			}
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
