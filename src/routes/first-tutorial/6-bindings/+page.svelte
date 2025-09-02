<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import TextInputs from './24-TextInputs.svelte';
	import NumericInputs from './25-NumericInputs.svelte';
	import CheckboxInputs from './26-CheckboxInputs.svelte';
	import SelectBindings from './27-SelectBindings.svelte';
	import GroupInputs from './28-GroupInputs.svelte';
	import SelectMultiple from './29-SelectMultiple.svelte';
	import TextareaInputs from './30-TextareaInputs.svelte';
</script>

<h1>Bindings</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/text-inputs">here</a>.
</p>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Text Inputs:</span>
	</p>
	<div class="ex-container">
		<TextInputs />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Numeric Inputs:</span>
	</p>
	<div class="ex-container">
		<NumericInputs />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Checkbox Inputs:</span>
	</p>
	<div class="ex-container">
		<CheckboxInputs />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Select Bindings:</span>
	</p>
	<div class="ex-container">
		<SelectBindings />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Group Inputs:</span>
	</p>
	<div class="ex-container">
		<GroupInputs />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Select Multiple:</span>
	</p>
	<div class="ex-container">
		<SelectMultiple />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Textarea Inputs:</span>
	</p>
	<div class="ex-container">
		<TextareaInputs />
	</div>
</CardyBoxThing>