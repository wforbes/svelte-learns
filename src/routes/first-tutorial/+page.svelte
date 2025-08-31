<script lang="ts">
	import CardyBoxThing from './1-intro/components/CardyBoxThing.svelte';
	import YourFirstComponent from './1-intro/0-YourFirstComponent.svelte';
	import DynamicAttributes from './1-intro/1-DynamicAttributes.svelte';
	import Styling from './1-intro/2-Styling.svelte';
	import NestedComponents from './1-intro/3-NestedComponents.svelte';
	import HtmlTags from './1-intro/4-HtmlTags.svelte';
	import IntroState from './1-intro/5-IntroState.svelte';
	import DeepState from './1-intro/6-DeepState.svelte';
</script>

<h1>Welcome</h1>

<CardyBoxThing>
	<YourFirstComponent />
</CardyBoxThing>
	
<CardyBoxThing>
	<DynamicAttributes />
</CardyBoxThing>

<CardyBoxThing>
	<Styling />
</CardyBoxThing>

<CardyBoxThing>
	<NestedComponents />
</CardyBoxThing>

<CardyBoxThing>
	<HtmlTags />
</CardyBoxThing>

<CardyBoxThing>
	<IntroState />
</CardyBoxThing>

<CardyBoxThing>
	<DeepState />
</CardyBoxThing>
