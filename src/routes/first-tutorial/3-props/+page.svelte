<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import DeclaringProps from './10-DeclaringProps.svelte';
	import DefaultValues from './11-DefaultValues.svelte';
	import SpreadProps from './12-SpreadProps.svelte';
</script>


<h1>Props</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/declaring-props">here</a>.
</p>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Declaring Props:</span>
	</p>
	<div class="ex-container">
		<DeclaringProps />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Default Values:</span>
	</p>
	<div class="ex-container">
		<DefaultValues />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Spread Props:</span>
	</p>
	<div class="ex-container">
		<SpreadProps />
	</div>
</CardyBoxThing>
