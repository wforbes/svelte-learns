<script lang="ts">
	let scoops = $state(1);
	let flavors = $state([]);

	const formatter = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
</script>

<h2>Size</h2>

{#each [1, 2, 3] as number}
	<label>
		<input
			type="radio"
			name="scoops"
			value={number}
			bind:group={scoops}
		/>

		{number} {number === 1 ? 'scoop' : 'scoops'}
	</label>
{/each}

<h2>Flavors</h2>

{#each ['cookies and cream', 'mint choc chip', 'raspberry ripple'] as flavor}
	<label>
		<input
			type="checkbox"
			name="flavors"
			value={flavor}
			bind:group={flavors}
		/>

		{flavor}
	</label>
{/each}

{#if flavors.length === 0}
	<p>Please select at least one flavor</p>
{:else if flavors.length > scoops}
	<p>Can't order more flavors than scoops!</p>
{:else}
	<p>
		You ordered {scoops} {scoops === 1 ? 'scoop' : 'scoops'}
		of {formatter.format(flavors)}
	</p>
{/if}