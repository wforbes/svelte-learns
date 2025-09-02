<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import DOMEvents from './19-DOMEvents.svelte'
	import InlineHandlers from './20-InlineHandlers.svelte'
	import Capturing from './21-Capturing.svelte'
	import ComponentEvents from './22-ComponentEvents.svelte'
	import SpreadingEvents from './23-SpreadingEvents.svelte'
	
</script>

<h1>Events</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/dom-events">here</a>.
</p>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">DOM Events:</span>
	</p>
	<div class="ex-container">
		<DOMEvents />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Inline Handlers:</span>
	</p>
	<div class="ex-container">
		<InlineHandlers />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Capturing:</span>
	</p>
	<div class="ex-container">
		<Capturing />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Component Events:</span>
	</p>
	<div class="ex-container">
		<ComponentEvents />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Spreading Events:</span>
	</p>
	<div class="ex-container">
		<SpreadingEvents />
	</div>
</CardyBoxThing>
