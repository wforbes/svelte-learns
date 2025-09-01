<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import YourFirstComponent from './0-YourFirstComponent.svelte';
	import DynamicAttributes from './1-DynamicAttributes.svelte';
	import Styling from './2-Styling.svelte';
	import NestedComponents from './3-NestedComponents.svelte';
	import HtmlTags from './4-HtmlTags.svelte';
</script>

<h1>Introduction</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/welcome-to-svelte">here</a>.
</p>

<CardyBoxThing>
	<div class="ex-container">
		<YourFirstComponent />
	</div>
</CardyBoxThing>
	
<CardyBoxThing>
	<div class="ex-container">
		<DynamicAttributes />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<div class="ex-container">
		<Styling />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<div class="ex-container">
		<NestedComponents />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<div class="ex-container">
		<HtmlTags />
	</div>
</CardyBoxThing>