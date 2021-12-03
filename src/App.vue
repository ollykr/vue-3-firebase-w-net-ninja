<!-- Notes about Lesson 30 -->
<!-- We change <div> with <teleport> for both Modals to be able to teleport the modals outside of app.vue (see public/index.html) -->

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
	<!-- to=".modals" means we want to teleport the modal to a div with a class of "modals" in public/index.html -->
	<teleport to=".modals" v-if="showModal">
		<Modal theme="sale" @close="toggleModal">
			<h1>Ninja Giveway!</h1>
			<p>Grab your ninja swag for half price!</p>
			<template v-slot:links>
				<a href="#">Sign Up now</a>
				<a href="#">more info</a>
			</template>
		</Modal>
	</teleport>
	<teleport to=".modals" v-if="showModalTwo">
		<Modal theme="sale" @close="toggleModalTwo">
			<h1>Oleg's Giveway!</h1>
			<p>Grab whatever you need for half price!</p>
			<p>Enjoy your day!</p>
			<template v-slot:linksTwo>
				<a href="https://ccohs.ca">Sign Up now</a>
				<a href="https://ccohs.ca/ccohs.html">More info</a>
			</template>
		</Modal>
	</teleport>
	<!-- @click.alt means that the modal opens only on alt clicking -->
	<button @click.alt="toggleModal">open modal(alt)</button>
	<button @click="toggleModalTwo">open My modal</button>
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
			showModal: false,
			showModalTwo: false,
		};
	},
	methods: {
		toggleModal() {
			// Reversing the current value
			this.showModal = !this.showModal;
		},
		toggleModalTwo() {
			// Reversing the current value
			this.showModalTwo = !this.showModalTwo;
		},
	},
};
</script>
<!-- Global Styles -->
<!-- Injected into a <head> of App.vue -->
<style>
#app,
.modals {
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
