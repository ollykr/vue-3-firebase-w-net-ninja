<!-- Notes about Lesson 23 -->
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
	<!-- Use Modal property that was imported from Modal.vue and then registered as a Modal component inside of App component via <script> -->
	<!-- Naming conventions : start your single vue file with a capital letter, if single file vue component has the same filename as regular html file, it may cause conflict, therefore Modal.vue, not modal.vue -->
	<Modal />
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
		};
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
