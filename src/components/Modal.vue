<!-- A Modal / pop up component -->
<template>
	<!-- A semitransparent backdrop behind a modal -->
	<div class="backdrop">
		<div class="modal">
			<h1>Modal Title</h1>
			<p>modal content</p>
		</div>
	</div>
</template>
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
</style>
