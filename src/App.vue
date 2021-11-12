<!-- Each Component has template, script and style in every Vue project -->
<!-- However, script and style are optional, but Template is mandatory -->
<!-- When we render a Component to DOM, its template is injected into the DOM  -->
<!-- A root tag has always be <template> which is a Vue tag, not HTML tag -->
<!-- But inside <template> you can organize your code however you wish -->
<!-- Vue 3 allows multiple root elements inside <template> -->
<template>
	<!-- From data() property -->
	<h1>{{ title }}</h1>
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
