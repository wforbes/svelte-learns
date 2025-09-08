<script lang="ts">
	import Modal from './Modal.svelte';
	import type { Item } from './types';
	import { v4 as uuidv4 } from 'uuid';

	let { addItem, showModal = $bindable() } = $props();

	let newItemName = $state('');

	function createItemAndClose() {
		if (newItemName.trim() === ''){
			alert('Item name cannot be empty');
			return;
		}

		addItem({ name: newItemName, id: uuidv4() } as Item);
		newItemName = '';
		showModal = false;
	}
</script>

<Modal bind:showModal={showModal}>
	{#snippet header()}
		<h2>Add New Item</h2>
	{/snippet}
	<div class="flex flex-col gap-2 p-4">
		<input
			type="text"
			class="border border-black rounded-md px-2 py-1"
			bind:value={newItemName}
			placeholder="Item Name"
			onkeydown={(e) => { if (e.key === 'Enter') createItemAndClose(); }}
		/>
	</div>
	{#snippet footer()}
		<button class="blue-clicker" onclick={createItemAndClose}>Add</button>
	{/snippet}
</Modal>