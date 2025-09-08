<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import type { Item } from './types';
	import { rows, flipMs } from './store';

	let { id, label, color } = $props<{ id: string, label: string, color: string, flipMs?: number }>();

	const row = $derived($rows.find(row => row.id === id));

	let items = $state(row?.items || []);
	$effect(() => {
		if (row) {
			items = row.items;
		}
	});
	
	
	function handleDndConsider(e: CustomEvent<DndEvent<Item>>) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<Item>>) {
		items = e.detail.items;

		rows.update(rows => rows.map(row => row.id === id ? { ...row, items } : row));
	}

</script>

<div class="flex flex-row gap-2 w-full border border-black">
	<div class="dnd-item flex justify-center items-center w-[120px] border {color ? `bg-${color}-tier` : 'bg-black text-white'}">{label}</div>
	<div
		class="dndzone w-full flex flex-row gap-2 p-2 h-[100px] border border-black bg-gray-200"
		use:dndzone="{{
			items,
			flipDurationMs: $flipMs,
			dropTargetStyle: {outline:'0px solid black'} 
		}}" 
		onconsider="{handleDndConsider}"
		onfinalize="{handleDndFinalize}"
	>
		{#each items as item(item.id)}
			<div class="dnd-item flex justify-center items-center w-[100px] border border-blue-500 bg-white" animate:flip="{{duration: $flipMs}}">{item.name}</div>
		{/each}
	</div>
</div>

<style>
	
</style>