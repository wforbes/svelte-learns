<script lang="ts">
	import CardyBoxThing from './1-intro/components/CardyBoxThing.svelte';
	import YourFirstComponent from './1-intro/0-YourFirstComponent.svelte';
	import DynamicAttributes from './1-intro/1-DynamicAttributes.svelte';
	import Styling from './1-intro/2-Styling.svelte';
	import NestedComponents from './1-intro/3-NestedComponents.svelte';
	import HtmlTags from './1-intro/4-HtmlTags.svelte';
	import IntroState from './1-intro/5-IntroState.svelte';
	import DeepState from './1-intro/6-DeepState.svelte';
	import DerivedState from './1-intro/7-DerivedState.svelte'
	import InspectingState from './1-intro/8-InspectingState.svelte'
</script>

<h1>Welcome</h1>

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

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">State:</span> Svelte uses the <span class="term">$state</span> rune to 
		declare reactive state variables. This is similar to the <span class="term">useState</span> 
		hook in React, or the <span class="term">ref</span> in Vue.
		<br />
		<a href="https://svelte.dev/docs/svelte/$state" target="_blank">
			svelte.dev: $state docs
		</a>
	</p>
	<div class="ex-container">
		<IntroState />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Deep State:</span> 
		Svelte&apos;s state can react to mutations, this is called
		<span class="term">deep reactivity</span>. If used with an
		array or simple object, we get a <span class="term">state proxy</span>.
		This allows us to run code when properties are read or written,
		like <span class="code">arr.push(...)</span>.
		<br />
		This allows modifying a property of an object and performing a
		granular update in the UI for anything using that property.
	</p>
	<ul class="ex-list">
		<li>
			<a href="https://svelte.dev/docs/svelte/$state" target="_blank">
				svelte.dev: $state docs
			</a>
		</li>
	</ul>
	<div class="ex-container">
		<DeepState />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Derived State:</span> 
		The <span class="term">$derived</span> rune can be used to 
		declare a value that is automatically re-evaluated whenever 
		its dependencies change. Functionally similar to Vue's
		<span class="term">computed</span> properties, or using React's 
		<span class="term">useMemo</span> hook.
	</p>
	<ul class="ex-list">
		<li>
			<a href="https://svelte.dev/tutorial/svelte/derived-state" target="_blank">
				svelte.dev: "Derived state" tutorial
			</a>
		</li>
		<li class="list-none list-outside">
			<a href="https://svelte.dev/docs/svelte/$derived" target="_blank">
				svelte.dev: $derived docs
			</a>
		</li>
	</ul>
	<div class="ex-container">
		<DerivedState />
	</div>
</CardyBoxThing>

<CardyBoxThing>
	<p class="ex">
		<span class="ex-title">Inspecting State:</span>
		Svelte has a couple utility methods that can take a variable or piece of
		state to 'inspect' it, seeing its contents or more information about it.
		<br />
		The <span class="code">$state.snapshot(...)</span> method can be used to 
		get a non-reactive snapshot of the state at a certain point in execution.
		<br />
		The <span class="code">$inspect(...)</span> rune can be used at the root 
		of a component&apos;s root ts script scope to automatically log a state 
		snapshot whenever the provided piece of state changes.
		<br />
		Calling the inspect rune with <span class="code">.with(...)</span> allows
		providing context to the inspected output, like here 
		<span class="code">$inspect(numbers).with(console.trace)</span> will
		automatically log the contents of the <span class="term">numbers</span>
		array whenever it changes, along with the stack trace to expose where 
		in the component that the change originated from.
	</p>
	<ul class="ex-list">
		<li>
			<a href="https://svelte.dev/tutorial/svelte/inspecting-state" target="_blank">
				svelte.dev/tutorial/svelte/inspecting-state
			</a>
		</li>
		<li>
			<a href="https://svelte.dev/docs/svelte/$state#$state.snapshot" target="_blank">
				svelte.dev/docs/svelte/$state#$state.snapshot
			</a>
		</li>
		<li>
			<a href="https://svelte.dev/docs/svelte/$inspect" target="_blank">
				svelte.dev/docs/svelte/$inspect
			</a>
		</li>
	</ul>
	<div class="ex-container">
		<InspectingState />
	</div>
</CardyBoxThing>
