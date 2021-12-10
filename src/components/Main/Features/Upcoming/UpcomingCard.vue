<template>
	<div class="upcoming-card">
		<div class="upcoming-card-left">
			<div class="upcoming-card-left-small-title">
				<span><ion-icon name="location-outline"></ion-icon></span><span>{{ place }}</span>
			</div>
			<div class="upcoming-card-left-title">{{ title }}</div>
		</div>
		<div class="upcoming-card-right">
			<div class="upcoming-card-right-date">
				<h1>{{ day }}</h1>
				<h3>{{ month }}</h3>
			</div>
			<div class="upcoming-card-right-button">
				<div class="button">
					<a href="#">Get ticket</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "UpcomingCard",
	props: {
		name: String,
		place: String,
		day: String,
		month: String,
	},
	data() {
		return {};
	},
};
</script>

<style lang="scss" scoped></style>
