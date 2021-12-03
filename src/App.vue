<!-- Notes about Lesson 28 -->
<!-- Slots are really useful to passing custom events to components (Modal.vue), slots pass templates to components which props don't really do, we don't use slots to pass a simple data like strings -->
<!-- Slots are very suseful when you have a certain structure in your component, you can use them in different parts of your component, there are re-usable -->
<!-- To make it clearer, their major difference is that with props, the parent can only pass the data down to the child without any control over how it will be rendered. But with slots, the parent can determine exactly how the data should be rendered, or even pass down another component. -->

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
	<div v-if="showModal">
		<!-- @close means we are listening to this custom event emitting from Modal.vue -->
		<!-- Passing some content (a template) as slot to this custom component  -->
		<Modal theme="sale" @close="toggleModal">
			<h1>Ninja Giveway!</h1>
			<p>Grab your ninja swag for half price!</p>
			<!-- Create a named slot "links" for a link -->
			<!-- Regular slot won't work for a link as it would take only what is inside <slot></slot> in Modal component -->
			<template v-slot:links>
				<a href="#">Sign Up now</a>
				<a href="#">more info</a>
			</template>
		</Modal>
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
