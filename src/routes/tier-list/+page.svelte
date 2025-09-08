<script lang="ts">
	import type { Row, Item } from './types';
	import TierRow from './TierRow.svelte';
	import NewRowModal from './NewRowModal.svelte';
	import StartingRow from './StartingRow.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let rows: Row[] = $state<Row[]>([]);
	let showModal = $state(false);
	let defaultRowsAdded = $state(false);
	let startItems: Item[] = $state<Item[]>([
		{ id: uuidv4(), name: 'Item 1' },
		{ id: uuidv4(), name: 'Item 2' },
		{ id: uuidv4(), name: 'Item 3' }
	]);
	const flipMs = 100;

	function handleAddRow(label: string, color: string) {
		rows.push({ id: rows.length + 1, label, items: [], color });
	}

	function addDefaultRows() {
		rows.push({ id: rows.length + 1, label: 'S', items: [], color: 's' });
		rows.push({ id: rows.length + 1, label: 'A', items: [], color: 'a' });
		rows.push({ id: rows.length + 1, label: 'B', items: [], color: 'b' });
		rows.push({ id: rows.length + 1, label: 'C', items: [], color: 'c' });
		rows.push({ id: rows.length + 1, label: 'D', items: [], color: 'd' });
		rows.push({ id: rows.length + 1, label: 'F', items: [], color: 'f' });
		defaultRowsAdded = true;
	}

	function resetItems() {
		console.log('resetItems');
		console.log('rows', rows); // I think I need a store for this!
		//const items = rows.flatMap(row => row.items);
		//console.log('items', items);
		//startItems = [...startItems, ...items];
		//rows.forEach(row => {
		//	row.items = [];
		//});
	}

	function clearItems() {
		
	}

</script>

<h1>Tier List</h1>
<div class="flex flex-row gap-2 pb-4 justify-center">
	<button class="blue-clicker" onclick={() => addDefaultRows()} disabled={defaultRowsAdded}>Add Default Rows</button>
	<button class="blue-clicker" onclick={() => showModal = true}>Add Custom Tier Row</button>
	<button class="red-clicker" onclick={resetItems}>Reset Items</button>
</div>

<div class="flex flex-col w-full gap-2">
	<div class="flex flex-col gap-2 min-h-[100px]">
		{#if rows.length === 0}
			<div class="flex flex-col justify-center items-center w-full h-[100px] border border-black">
				<p>No rows</p>
				<p>(Add some to get started)</p>
			</div>
		{/if}
		{#each rows as row(row.id)}
			<TierRow label={row.label} color={row.color} bind:items={row.items} {flipMs} />
		{/each}
	</div>
	<StartingRow bind:startItems={startItems} {flipMs} />
</div>

<NewRowModal bind:showModal addRow={handleAddRow} />

<style>
    .dndzone {
		width: 100%;
        border: 1px solid black;
        height: 150px;
    }
    .dnd-item {
        padding: 0.2em;
        border: 1px solid blue;
        margin: 0.15em 0;
    }
</style>