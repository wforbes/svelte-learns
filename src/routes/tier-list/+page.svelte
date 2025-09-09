<script lang="ts">
	import TierRow from './TierRow.svelte';
	import NewRowModal from './NewRowModal.svelte';
	import StartingRow from './StartingRow.svelte';
	import { v4 as uuidv4 } from 'uuid';
	import { rows, startItems, flipMs, defaultRowsAdded } from './store';

	let showModal = $state(false);

	startItems.set([
		{ id: uuidv4(), name: 'Item 1', imgUrl: null },
		{ id: uuidv4(), name: 'Item 2', imgUrl: null },
		{ id: uuidv4(), name: 'Item 3', imgUrl: null }
	]);

	function handleAddRow(label: string, color: string) {
		const newRow = { id: uuidv4(), label, items: [], color };
		rows.update(rows => [...rows, newRow]);
	}

	function addDefaultRows() {
		const defaultRows = [
			{ id: uuidv4(), label: 'S', items: [], color: 's' },
			{ id: uuidv4(), label: 'A', items: [], color: 'a' },
			{ id: uuidv4(), label: 'B', items: [], color: 'b' },
			{ id: uuidv4(), label: 'C', items: [], color: 'c' },
			{ id: uuidv4(), label: 'D', items: [], color: 'd' },
			{ id: uuidv4(), label: 'F', items: [], color: 'f' }
		];
		rows.update(rows => [...rows, ...defaultRows]);
		defaultRowsAdded.set(true);
	}

	function resetItems() {
		const rowItems = $rows.flatMap(row => row.items);
		startItems.update(items => [...items, ...rowItems]);
		rows.update(rows => rows.map(row => ({ ...row, items: [] })));
	}

</script>

<h1>Tier List</h1>
<div class="flex flex-row gap-2 pb-4 justify-center">
	<button class="blue-clicker" onclick={() => addDefaultRows()} disabled={$defaultRowsAdded}>Add Default Rows</button>
	<button class="blue-clicker" onclick={() => showModal = true}>Add Custom Tier Row</button>
	<button class="red-clicker" onclick={resetItems}>Reset Items</button>
</div>

<div class="flex flex-col w-full gap-2">
	<div class="flex flex-col gap-2 min-h-[100px]">
		{#if $rows.length === 0}
			<div class="flex flex-col justify-center items-center w-full h-[100px] border border-black">
				<p>No rows</p>
				<p>(Add some to get started)</p>
			</div>
		{/if}
		{#each $rows as row(row.id)}
			<TierRow id={row.id} label={row.label} color={row.color} />
		{/each}
	</div>
	<StartingRow />
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