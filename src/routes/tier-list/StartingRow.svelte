<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';
	import NewItemModal from './NewItemModal.svelte';
	import type { Item } from './types';
	import { startItems, flipMs } from './store';
	import TierItem from './TierItem.svelte';
	//let { startItems = $bindable(), flipMs = 300 } = $props<{ startItems: Item[], flipMs?: number }>();

	let showModal = $state(false);

	function handleDndConsider(e: CustomEvent<DndEvent<Item>>) {
		startItems.set([...e.detail.items]);
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<Item>>) {
		startItems.set([...e.detail.items]);
	}

	function handleAddItem(newItem: Item) {
		startItems.update(items => [...items, newItem]);
	}

	function openNewItemModal() {
		showModal = true;
	}

</script>

<div class="flex flex-col gap-2 w-full border border-black p-2 bg-black">
	<div
		class="dndzone w-full flex flex-row gap-2 p-2 h-[100px] border border-black bg-gray-200"
		use:dndzone="{{items: $startItems, flipDurationMs: $flipMs, dropTargetStyle: {outline:'0px solid black'} }}"
		onconsider="{handleDndConsider}" onfinalize="{handleDndFinalize}"
	>
		{#each $startItems as item(item.id)}
			<div class="flex justify-center items-center h-full" animate:flip="{{duration: $flipMs}}">
				<TierItem item={item} />
			</div>
		{/each}
	</div>
	<div class="flex flex-row justify-center p-2">
		<button class="blue-clicker mt-0!" onclick={openNewItemModal}>Add New Item</button>
	</div>
</div>

<NewItemModal bind:showModal={showModal} addItem={handleAddItem} />

<style>
	
</style>