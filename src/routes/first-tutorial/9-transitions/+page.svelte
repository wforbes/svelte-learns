<script lang="ts">
	import CardyBoxThing from '../components/CardyBoxThing.svelte';
	import TransitionDirective from './36-TransitionDirective.svelte';
	import AddingParams from './37-AddingParams.svelte';
	import BonusAddingParams from './37-BonusAddingParams.svelte';
	import InAndOut from './38-InAndOut.svelte';
	import CustomCSSTransition from './39-CustomCSSTransition.svelte';
	import CustomJSTransition from './40-CustomJSTransition.svelte';
	import TransitionEvents from './41-TransitionEvents.svelte';
	import GlobalTransitions from './42-GlobalTransitions.svelte';
	import KeyBlocks from './43-KeyBlocks/43-KeyBlocks.svelte';

	let x = $state(0);
	let y = $state(0);
	function getCoords(node: HTMLElement) {
		x = node.getBoundingClientRect().x;
		y = node.getBoundingClientRect().y;
	}

</script>

<h1>Actions</h1>
<p class="text-center">
	Tutorials from the Svelte website. Starting <a href="https://svelte.dev/tutorial/svelte/transition">here</a>.
</p>


<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Transition Directive:</span>
	</p>
	<div class="ex-container">
		<TransitionDirective />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Adding Params:</span>
	</p>
	<div class="ex-container">
		<AddingParams />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title" use:getCoords>Bonus - Adding Params:</span> This is a <i>bonus</i> exercise I made up with the goal of learning more about transitions.
		It isn&apos;t on the svelte website, and I&apos;ve included it in the project files with the same reference number as the 'Adding Params' exercise &lpar;37&rpar;.
		<br />
		<span class="ex-title">Desc:</span> Here I&apos;ve used a custom transition function in the 'BonusAddingParams' component
		to animate the element as fading in/out from the specified coordinates in the parent component. First, I used the 'getCoords' action function to get the
		coordinates of the element containing the text 'Bonus - Adding Params'. Then, I passed these coordinates to the 'BonusAddingParams' component as props.
		Those coordinates are passed from the $props into the transition function 'flyFrom'. There, the coordinates are used to calculate the distance to travel.
		Then, the distance is used to animate the element using a CSS transform.
	</p>
	<div class="ex-container">
		<BonusAddingParams from_x={x} from_y={y} />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">In and Out:</span>
	</p>
	<div class="ex-container">
		<InAndOut />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Custom Transition:</span>
	</p>
	<div class="ex-container">
		<CustomCSSTransition />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Custom JS Transition:</span>
	</p>
	<div class="ex-container">
		<CustomJSTransition />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Transition Events:</span>
	</p>
	<div class="ex-container">
		<TransitionEvents />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Global Transitions:</span>
	</p>
	<div class="ex-container">
		<GlobalTransitions />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Key Blocks:</span>
	</p>
	<div class="ex-container">
		<KeyBlocks />
	</div>
</CardyBoxThing>