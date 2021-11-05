// Create Vue App
// { root component }
const app = Vue.createApp({
	// any data, functions, component template to run inside #app
	// template: "<h2>I am the template</h2>",
	// data function that serves as a some sort of Vue variable used inside #app in index.html
	data() {
		// Return an object
		return {
			// properties
			title: "The Final Empire",
			author: "Brandon Sanderson",
			age: 45,
		};
	},
	// Create a component method (called "changeTitle") for click events
	methods: {
		// 'title' is accepted as a parameter, it can be called whatever you want, e.g changeTitle(abc)
		changeTitle(title) {
			// Update a title
			// 'this' references a component itself, just using 'title' doesn't work
			// this.title = "Words of Randiance";
			this.title = title; // or this.title = abc, if changeTitle(abc)
		},
	},
});

// Mount Vue App into a DOM (represented by "div id="app" in index.html)
app.mount("#app");
