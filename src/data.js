export const data = {
	en: {
		navigation: [
			{ name: "Home", submenu: [], goto: "#" },
			{ name: "Pages", submenu: [], goto: "#" },
			{ name: "Courses", submenu: [], goto: "#" },
			{ name: "Features", submenu: [], goto: "#" },
			{ name: "Blog", submenu: [], goto: "#" },
			{ name: "Shop", submenu: [], goto: "#" },
		],
		views: [
			{ name: "Header", tag: "header", content: [] },
			{
				name: "Main",
				tag: "main",
				content: {
					sections: [
						{ name: "about", title: "Build Your Dream Today", subtitle: "start learning coding languages", content: [] },
						{ name: "courses", title: "Latest featured courses", subtitle: "Choose where you'd like to begin", content: [] },
						{ name: "upcoming", title: "Upcoming Events", subtitle: "Get in contact now", content: [] },
						{ name: "testimonial", title: "What make they love us?", subtitle: "people are praising maxcoach", content: [] },
					],
				},
			},
			{
				name: "Footer",
				tag: "footer",
				content: {
					address: "382 NE 192st St # 87394 Miami, FL 33179-3899",
					phone: "+1(305)547-9909(9am-5pm EST, Monday - Friday)",
					mail: "support@maxcoach.components",
					social: [
						{ name: "facebook", link: "#" },
						{ name: "twitter", link: "#" },
						{ name: "instagram", link: "#" },
						{ name: "linkedin", link: "#" },
					],
				},
			},
		],
	},
};
