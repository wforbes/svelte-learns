<script>
	import Thing from './17-Thing.svelte';

	let things = $state([
		{ id: 1, name: 'apple' },
		{ id: 2, name: 'banana' },
		{ id: 3, name: 'carrot' },
		{ id: 4, name: 'doughnut' },
		{ id: 5, name: 'egg' }
	]);
</script>

<button class="green-clicker mb-2" onclick={() => things.shift()}>
	Remove first thing
</button>

<!-- adding (thing.id) here sets the key of each iteration -->
{#each things as thing (thing.id)} 
	<Thing name={thing.name} />
{/each}