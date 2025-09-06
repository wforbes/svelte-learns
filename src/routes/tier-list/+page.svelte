<script lang="ts">
	import { flip } from 'svelte/animate';
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import DragDropZone from './DragDropZone.svelte';
	import Modal from './Modal.svelte';

	type Row = { id: number; name: string; items: Item[]; };
	type Item = { id: number; name: string; };

	let rows: Row[] = $state<Row[]>([]);
	let showModal = $state(false);
	let newRowName = $state('');
	
	function addRow(name: string) {
		rows.push({ id: rows.length + 1, name, items: [] });
		showModal = false;
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
	<button class="blue-clicker" onclick={() => showModal = true}>Add Row</button>
</div>

<div class="flex flex-col w-full gap-2">
	<div class="flex flex-col gap-2 min-h-[150px]">
		{#if rows.length === 0}
			<div class="flex justify-center items-center w-full h-[150px] border border-black">
				<p>No rows</p>
			</div>
		{/if}
		{#each rows as row(row.id)}
			<DragDropZone name={row.name} />
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

<Modal bind:showModal>
	{#snippet header()}
		<h2>Add Row</h2>
	{/snippet}
	<div>
		<input type="text" bind:value={newRowName} />
		<button onclick={() => addRow(newRowName)}>Add</button>
	</div>
</Modal>


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