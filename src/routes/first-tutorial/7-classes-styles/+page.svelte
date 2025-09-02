<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import ClassAttribute from './31-ClassAttribute.svelte';
	import StyleDirective from './32-StyleDirective.svelte';
	import ComponentStyles from './33-ComponentStyles.svelte';
</script>

<h1>Classes & Styles</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/classes">here</a>.
</p>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">The Class Attribute:</span>
	</p>
	<div class="ex-container">
		<ClassAttribute />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">The Style Directive:</span>
	</p>
	<div class="ex-container">
		<StyleDirective />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Component Styles:</span>
	</p>
	<div class="ex-container">
		<ComponentStyles />
	</div>
</CardyBoxThing>
