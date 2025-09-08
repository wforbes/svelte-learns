<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import type { Item } from './types';

	let { label, color, items = $bindable(), flipMs = 300 } = $props<{ label: string, color: string, items: Item[], flipMs?: number }>();

	let _items = $state<Item[]>(items);
	
	function handleDndConsider(e: CustomEvent<DndEvent<Item>>) {
		_items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<Item>>) {
		_items = e.detail.items;
	}

</script>

<div class="flex flex-row gap-2 w-full border border-black">
	<div class="dnd-item flex justify-center items-center w-[120px] border {color ? `bg-${color}-tier` : 'bg-black text-white'}">{label}</div>
	<div
		class="dndzone w-full flex flex-row gap-2 p-2 h-[100px] border border-black bg-gray-200"
		use:dndzone="{{
			items: _items,
			flipDurationMs: flipMs,
			dropTargetStyle: {outline:'0px solid black'} 
		}}" 
		onconsider="{handleDndConsider}"
		onfinalize="{handleDndFinalize}"
	>
		{#each _items as item(item.id)}
			<div class="dnd-item flex justify-center items-center w-[100px] border border-blue-500 bg-white" animate:flip="{{duration: flipMs}}">{item.name}</div>
		{/each}
	</div>
</div>

<style>
	
</style>