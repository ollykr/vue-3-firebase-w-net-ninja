<!-- Notes about Lesson 22 -->
<!-- Template refs allow us to store a reference to a DOM element inside a variable, once we have that refs, we can use regular JS methods and properties, e.g change classes, styles, text content, etc  -->

<!-- Each Component has template, script and style in every Vue project -->
<!-- However, script and style are optional, but Template is mandatory -->
<!-- When we render a Component to DOM, its template is injected into the DOM  -->
<!-- A root tag has always be <template> which is a Vue tag, not HTML tag -->
<!-- But inside <template> you can organize your code however you wish -->
<!-- Vue 3 allows multiple root elements inside <template> -->
<template>
	<!-- From data() property -->
	<h1>{{ title }}</h1>
	<!-- Template refs example -->
	<!-- If we want to get a handle of the input element, we need to use "ref='name'" -->
	<input type="text" ref="name" />
	<button @click="handleClick">click me</button>
</template>

<script>
// Objects "default" being exported
// This object represents the root component
export default {
	name: "App",
	data() {
		return {
			title: "My First Vue App :)",
		};
	},
	methods: {
		handleClick() {
			// 'this' refers to this component
			// via $refs object I can access any ref="" in the <template> above, e.g ref="name"
			console.log(this.$refs.name);
			// We can add/remove CSS class using template refs
			// Regular JS, no Vue stuff
			this.$refs.name.classList.add("active");
			// make text field or input element on focus after clicking it
			this.$refs.name.focus();
		},
	},
	// 'components' property registers any nested components (e.g "HelloWorld")
	// components: {
	// 	HelloWorld,
	// },
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
