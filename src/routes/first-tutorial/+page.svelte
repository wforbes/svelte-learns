<script lang="ts">
	import Nested from './Nested.svelte';
	let name = "Svelte";
	let imgSubject = "Ross"
	let src = "/code-meme.png"
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

<style>
	p {
		color: goldenrod;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>