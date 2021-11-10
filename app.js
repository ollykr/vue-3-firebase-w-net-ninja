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
			url: "http//www.thenetninja.co.uk",
			showBooks: true,
			// array property consisting an object properties for 'title' and 'author' which we can output as a list using v-for
			books: [
				{
					title: "name of the wind",
					author: "patrick rothfuss",
					img: "/assets/1.jpg",
					isFav: true,
				},
				{
					title: "the way of kings",
					author: "brandon sanderson",
					img: "/assets/2.jpg",
					isFav: false,
				},
				{
					title: "the final empire",
					author: "brandon sanderson",
					img: "/assets/3.jpg",
					isFav: true,
				},
			],
		};
	},
	// Create a component method
	methods: {
		toggleShowBooks() {
			// Toggle functionality - hide/show
			this.showBooks = !this.showBooks;
		},
		toggleFav(book) {
			book.isFav = !book.isFav;
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
