<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import DragDropZone from './DragDropZone.svelte';
	import NewRowModal from './NewRowModal.svelte';

	type Row = { id: number; label: string; items: Item[]; color: string };
	type Item = { id: number; name: string; };

	let rows: Row[] = $state<Row[]>([]);
	let showModal = $state(false);
	let defaultRowsAdded = $state(false);
	
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

	let startItems = $state<Item[]>([
		{ id: 1, name: 'Item 1' },
		{ id: 2, name: 'Item 2' },
		{ id: 3, name: 'Item 3' }
	]);

	const flipDurationMs = 300;
	function handleDndConsider(e: CustomEvent<DndEvent<Item>>) {
		startItems = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<Item>>) {
		startItems = e.detail.items;
	}
</script>

<h1>Tier List</h1>
<div class="flex flex-row gap-2 pb-4">
	<button class="blue-clicker" onclick={() => addDefaultRows()}>Add Default Rows</button>
	<button class="blue-clicker" onclick={() => showModal = true}>Add Custom Tier Row</button>
</div>

<div class="flex flex-col w-full gap-2">
	<div class="flex flex-col gap-2 min-h-[150px]">
		{#if rows.length === 0}
			<div class="flex justify-center items-center w-full h-[150px] border border-black">
				<p>No rows</p>
			</div>
		{/if}
		{#each rows as row(row.id)}
			<DragDropZone label={row.label} color={row.color} />
		{/each}
	</div>

	<div
		class="dndzone w-full flex flex-row gap-2 p-2"
		use:dndzone="{{items: startItems, flipDurationMs, dropTargetStyle: {outline:'0px solid black'} }}"
		onconsider="{handleDndConsider}" onfinalize="{handleDndFinalize}"
	>
		{#each startItems as item(item.id)}
			<div class="dnd-item flex justify-center items-center w-[120px]" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
		{/each}
	</div>
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