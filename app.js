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
	},
	// Make computed property inside a component (the same level as methods)
	computed: {
		filteredBooks() {
			// the above function returns a value
			// 'this' references a component and 'books' is the component's data property we want to access via JS 'filter' method
			// 'filter' method fires up a callback function for each item inside "books" array
			// Each time an item is true, we keep it in the 'filtered' array, if it returns false , we filters this item out of array
			// We want to return TRUE, if "isFav" exists
			return this.books.filter((book) => book.isFav);
		},
	},
});

// Mount Vue App into a DOM (represented by "div id="app" in index.html)
app.mount("#app");
