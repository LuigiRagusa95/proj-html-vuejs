<template>
	<div class="accordion">
		<label :class="{ active: currentOpen === index }" v-for="(data, index) in accordion" :key="`accordion-key-${index}`" @click="show(index)">
			<h1>
				<span>{{ data.title }}</span>
				<span>
					<ion-icon v-if="currentOpen !== index" name="add-circle-outline"></ion-icon>
					<ion-icon v-else name="remove-circle-outline"></ion-icon>
				</span>
			</h1>
			<p v-if="currentOpen === index">{{ data.paragraph }}</p>
		</label>
	</div>
</template>

<script>
export default {
	name: "Accordion",
	data() {
		return {
			accordion: [
				{
					title: "Multiple platforms Supported for Teaching & Studying",
					paragraph: "MaxCoach supports the act of teaching and learning on multiple platforms like online or offline via material downloads. We know things aren't supposed to be devoured in a short time, you can always access our knowledge base from any device. ",
				},
				{
					title: "Multiple course Participation at the Same Time",
					paragraph: "Lorem ipsum...",
				},
				{
					title: "Track Study Progress & Deliver Prompt Feedback",
					paragraph: "Lorem ipsum...",
				},
			],
			currentOpen: -1,
		};
	},
	created() {
		this.currentOpen = 0;
	},
	methods: {
		show(index) {
			index !== this.currentOpen ? (this.currentOpen = index) : (this.currentOpen = -1);
		},
	},
	computed: {},
};
</script>

<style lang="scss" scoped>
@import "../../../styles/index.scss";

.accordion {
	display: block;

	> label {
		display: flex;
		margin-top: 1rem;
		flex-direction: column;
		transition: 0.2s ease;
		border-radius: 0.25rem;
		box-shadow: 0 2px 8px rgba($color: #000000, $alpha: 0.4);

		> h1 {
			display: flex;
			cursor: pointer;
			color: $cod-gray;
			line-height: 2rem;
			align-items: center;
			font-size: 0.9375rem;
			padding: 0.5rem 1rem;
			border-radius: 0.25rem;
			letter-spacing: 0.02rem;
			background-color: $white;
			justify-content: space-between;

			> span:last-of-type {
				font-size: 1.5rem;
			}
		}

		> p {
			padding: 1rem;
			color: $oslo-gray;
			transition: 0.2s ease;
		}

		&.active {
			h1 {
				color: $white;
				background-color: $jungle-green;
				border-radius: 0.25rem 0.25rem 0 0;
			}

			span {
				color: $white;
			}
		}
	}
}
</style>
