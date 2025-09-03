<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import RawState from './44-RawState/44-RawState.svelte';
	import ReactiveClasses from './45-ReactiveClasses.svelte';
</script>

<h1>Advanced Reactivity</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/raw-state">here</a>.
</p>


<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Raw State:</span>
	</p>
	<div class="ex-container">
		<RawState />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Reactive Classes:</span>
	</p>
	<div class="ex-container">
		<ReactiveClasses />
	</div>
</CardyBoxThing>