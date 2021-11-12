<!-- A Modal / pop up component -->
<template>
	<!-- A semitransparent backdrop behind a modal -->
	<div class="backdrop">
		<!-- It doesn't matter that we have 2 classes, data bound (dynamic) and static -->
		<!-- Pass in an object to data bound class, its value is CSS class "sale", 'theme' is a prop, conditional boolen, if them is 'sale', apply certain style -->
		<div class="modal" :class="{ sale: theme === 'sale' }">
			<h1>{{ header }}</h1>
			<p>{{ text }}</p>
		</div>
	</div>
</template>

<!-- Accept a 'header' prop from a parent component to be used in the above <template> -->
<!-- Register a 'header', 'text' and 'theme' props -->
<script>
export default {
	props: ["header", "text", "theme"],
};
</script>

<!-- scoped to this Modal component -->
<!-- Vue scops it by adding random data-attributes to Modal styles' classes in the DOM, there is a slight performance hit with this approach as Vue has to inject it every time page loads-->
<!-- <style scoped> -->
<!-- Better way just to make CSS class more specific .modal h1 {} -->
<style>
.modal {
	width: 400px;
	padding: 20px;
	margin: 100px auto;
	background: white;
	border-radius: 10px;
}
.backdrop {
	top: 0;
	position: fixed;
	background: rgba(0, 0, 0, 0.5);
	width: 100%;
	height: 100%;
}
.modal h1 {
	color: #03cfb4;
	border: none;
	padding: 0;
}
/* Overriding global styles for this component only */
.modal p {
	font-style: normal;
}
.modal.sale {
	background-color: crimson;
	color: white;
}
.modal.sale h1 {
	color: white;
}
</style>
