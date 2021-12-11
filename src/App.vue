<template>
	<div id="app">
		<!-- check here for the language -->
		<template v-if="datas">
			<Header :data="headerData" />
			<Main :data="mainData" />
			<Footer :data="footerData" />
		</template>
		<template v-else><span>This content is not available in your country</span></template>
	</div>
</template>

<script>
import Footer from "./components/Footer/Footer.vue";
import Header from "./components/Header/Header.vue";
import Main from "./components/Main/Main.vue";

import data from "./data";

export default {
	name: "App",
	mounted() {
		this.getLanguage();
		this.setMainData();
		this.setHeaderData();
		this.setFooterData();
	},
	data() {
		return {
			datas: null,
			footerData: null,
			headerData: null,
			mainData: null,
			language: "en",
		};
	},
	methods: {
		setFooterData() {
			this.footerData = this.datas.views.footer;
		},
		setHeaderData() {
			this.headerData = this.datas.views.header;
		},
		setMainData() {
			this.mainData = this.datas.views.main;
		},
		getLanguage() {
			if (Object.keys(data).includes(this.language)) {
				this.datas = data[this.language];
			} else {
				this.datas = null;
			}
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
</style>
