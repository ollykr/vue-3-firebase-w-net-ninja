<!-- Notes about Lesson 27 -->
<!-- We want to click on a backfrop element itself, not on its children, to close modal  -->
<!-- Click modifiers modify how click event registers and when we react to them  -->

<!-- Template refs allow us to store a reference to a DOM element inside a variable, once we have that refs, we can use regular JS methods and properties, e.g change classes, styles, text content, etc  -->

<!-- Each Component has template, script and style in every Vue project -->
<!-- However, script and style are optional, but Template is mandatory -->
<!-- When we render a Component to DOM, its template is injected into the DOM  -->
<!-- A root tag has always be <template> which is a Vue tag, not HTML tag -->
<!-- But inside <template> you can organize your code however you wish -->
<!-- Vue 3 allows multiple root elements inside <template> -->
<!-- If we wanted to, we could create an entire webpage inside <template> component below, but it will quickly become too large, gigantic. So it is not good idea to place everything in one single component, in one single vue file -->
<!-- Instead we should split our Vue code into multiple components: navbar, header, sidebar, article, footer components -->
<!-- Components structure (or a "component tree") can be: App.vue (i.e root component): Header.vue, Article.vue (it has "child" components: Content.vue and Comments.vue to which "Article.vue" is a "parent" component), Footer.vue  -->
<template>
	<!-- From data() property -->
	<h1>{{ title }}</h1>
	<p>Welcome...</p>
	<!-- Use Modal property that was imported from Modal.vue and then registered as a Modal component inside of App component via <script> -->
	<!-- Naming conventions : start your single vue file with a capital letter, if single file vue component has the same filename as regular html file, it may cause conflict, therefore Modal.vue, not modal.vue -->
	<!-- Prop, add it to a Modal below as a attribute (you can call the attribute whatever you want), this is your prop -->
	<!-- You can pass props as string, boolean, numbers, array of data, etc  -->
	<!-- e.g we add an attribute 'header' and set its string value as a prop here, but the name of the prop is a 'header', 'text' is another prop -->
	<!-- To use array as a props , we have to data bind it (bind 'header' to its value ) (:header is a prop, and ="header" is a data that was bound, :text and 'text', prop and data bound to it ) -->
	<!-- 'theme' is our third prop, 'sale' is CSS class as a bound value -->
	<!-- Below is the most common prop pattern -->
	<div v-if="showModal">
		<!-- @close means we are listening to this custom event emitting from Modal.vue -->
		<Modal :header="header" :text="text" theme="sale" @close="toggleModal" />
	</div>
	<!-- @click.alt means that the modal opens only on alt clicking -->
	<button @click.alt="toggleModal">open modal(alt)</button>
</template>

<script>
// 'Modal' here can be called whatever we want
// Also we don't have to add '.vue'
import Modal from "./components/Modal.vue";

// Objects "default" being exported
// This object represents the root component
export default {
	name: "App",
	// We register Modal component inside of App component via 'components' object
	components: { Modal },
	// Our component object
	data() {
		return {
			title: "My First Vue App :)",
			header: "Sign up for the Giveaway!",
			text: "Grab your ninja swag for half price!",
			showModal: false,
		};
	},
	methods: {
		toggleModal() {
			// Reversing the current value
			this.showModal = !this.showModal;
		},
	},
};
</script>
<!-- Global Styles -->
<!-- Injected into a <head> of App.vue -->
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
h1 {
	border-bottom: 1px solid #ddd;
	display: inline-block;
	padding-bottom: 10px;
}
</style>
