<script lang="ts">
	import Nested from './Nested.svelte';
	let name = "Svelte";
	let imgSubject = "Ross"
	let src = "/code-meme.png"
	let string = `this string contains some <strong>HTML!!!</strong>`

	let count = $state(0);
	function increment() {
		count += 1;
	}
</script>

<h1>Welcome</h1>

<div class="mx-auto">
	<p class="text-center">
		Hello {name.toUpperCase()}!
	</p>
	<img
		{src}
		alt="{imgSubject} is sarcastically moody, 90s people loved that."
		width="300"
	/>
</div>

<div class="rounded-md border border-gray-400 border-b-2 mx-auto mt-5 p-3">
	<p>This demonstrates nested components.</p>
	<Nested />
</div>

<div class="rounded-md border border-gray-400 border-b-2 mx-auto mt-5 p-3">
	{@html string}
</div>

<div class="flex items-center justify-center rounded-md border border-gray-400 border-b-2 mx-auto mt-5 p-3 w-50 ">
	<button onclick={increment} class="rounded-md px-4 py-2 transition active:scale-95 text-white bg-green-600 hover:bg-green-700">
		Clicked {count}
		{count === 1 ? 'time': 'times'}
	</button>
</div>

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>