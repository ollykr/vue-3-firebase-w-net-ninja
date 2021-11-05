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
			showBooks: true,
			title: "The Final Empire",
			author: "Brandon Sanderson",
			age: 45,
			x: 0, // 0 by default
			y: 0, // 0 by default
		};
	},
	// Create a component method
	methods: {
		toggleShowBooks() {
			// Toggle functionality - hide/show
			this.showBooks = !this.showBooks;
		},
		// When we use events like mouseover, mouseleave, etc, we automatically have access to an optional object - event, or 'e' (or whatever we want to call it) which we have to use as a first parameter in a function, 'data' (it can be called anything) is a second parameter which is used for our custom '5' argument
		handleEvents(e, data) {
			console.log(e, e.type); // I can see an object properties in the console
			// e.type lets me to see in console event's type, e.g mouseover, mouseleave, etc
			// If 'data' has an argument (it does - 5), then add it to console
			if (data) {
				console.log(data);
			}
		},
		handleMousemove(e) {
			// update x/y properties
			this.x = e.offsetX;
			this.y = e.offsetY;
		},
	},
});

// Mount Vue App into a DOM (represented by "div id="app" in index.html)
app.mount("#app");
