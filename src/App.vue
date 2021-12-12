<template>
	<div id="app">
		<!-- check here for the language -->
		<template v-if="datas">
			<Header :data="headerData" />
			<Main :data="mainData" />
			<Footer :data="footerData" />
		</template>
		<template v-else>
			<div id="loader">
				<div class="loader"></div>
			</div>
		</template>
	</div>
</template>

<script>
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";

import database from "./data";

export default {
	name: "App",
	created() {
		this.getData();
	},
	data() {
		return {
			datas: null,
			footerData: null,
			headerData: null,
			mainData: null,
			showLoader: false,
			language: "en",
		};
	},
	methods: {
		getData() {
			setTimeout(() => {
				if (database) {
					this.datas = database[this.language];
					this.headerData = this.datas.views.header;
					this.mainData = this.datas.views.main;
					this.footerData = this.datas.views.footer;
				} else {
					this.datas = null;
				}
			}, 1500);
		},
	},
	components: { Header, Main, Footer },
};
</script>

<style lang="scss">
@import "./styles/index.scss";
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
html,
body {
	width: 100%;
	height: 100%;
	font-size: 1rem;
	line-height: 1.5rem;
	scroll-behavior: smooth;
	font-family: "Poppins", sans-serif;
}

a {
	font-size: 1rem;
	color: currentColor;
	line-height: 1.5rem;
	text-decoration: none;
}

#app {
	display: flex;
	min-width: 100vh;
	flex-direction: column;
}

#loader {
	width: 100%;
	height: 100vh;
	display: grid;
	place-items: center;

	> .loader {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 999999px;
		border: 3px solid $gallery;
		border-right-color: $jungle-green;
		animation: spin 500ms linear infinite;

		@keyframes spin {
			to {
				transform: rotate(1turn);
			}
		}
	}
}
</style>
