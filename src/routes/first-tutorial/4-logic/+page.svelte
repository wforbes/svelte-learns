<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import IfBlocks from './13-IfBlocks.svelte';
	import ElseBlocks from './14-ElseBlocks.svelte';
	import ElseIfBlocks from './15-ElseIfBlocks.svelte';
	import EachBlocks from './16-EachBlocks.svelte';
	import KeyedEachBlocks from './17-KeyedEachBlocks.svelte';
</script>

<h1>Logic</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/if-blocks">here</a>.
</p>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">If Blocks:</span>
	</p>
	<div class="ex-container">
		<IfBlocks />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Else Blocks:</span>
	</p>
	<div class="ex-container">
		<ElseBlocks />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Else If Blocks:</span>
	</p>
	<div class="ex-container">
		<ElseIfBlocks />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Each Blocks:</span>
	</p>
	<div class="ex-container">
		<EachBlocks />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Keyed Each Blocks:</span>
	</p>
	<div class="ex-container">
		<KeyedEachBlocks />
	</div>
</CardyBoxThing>