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
});

// Mount Vue App into a DOM (represented by "div id="app" in index.html)
app.mount("#app");
