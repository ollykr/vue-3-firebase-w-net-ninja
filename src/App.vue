<!-- Each Component has template, script and style in every Vue project -->
<!-- However, script and style are optional, but Template is mandatory -->
<!-- When we render a Component to DOM, its template is injected into the DOM  -->
<!-- A root tag has always be <template> which is a Vue tag, not HTML tag -->
<!-- But inside <template> you can organize your code however you wish -->
<!-- Vue 3 allows multiple root elements inside <template> -->
<template>
	<!-- First root element -->
	<img alt="Vue logo" src="./assets/logo.png" />
	<!-- Second root element -->
	<HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// Objects being exported
export default {
	name: "App",
	components: {
		HelloWorld,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
