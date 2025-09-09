<script lang="ts">
	import Modal from './Modal.svelte';
	import type { Item } from './types';
	import { v4 as uuidv4 } from 'uuid';
	//import { enhance } from '$app/forms';
	//import { fail } from '@sveltejs/kit';
	//import { invalidate } from '$app/navigation';

	let { addItem, showModal = $bindable() } = $props();

	let newItemName = $state('');
	let newItemImage = $state<File | null>(null);

	$effect(() => {
		newItemName = '';
		newItemImage = null;
	});

	async function createItemAndClose() {
		if (newItemName.trim() === ''){
			alert('Item name cannot be empty');
			return;
		}
		if (newItemImage?.name !== '' && newItemImage?.size !== 0) {
			try {
				const formData = new FormData();
				formData.append('itemName', newItemName);
				formData.append('itemImage', newItemImage as File);
				const response = await fetch('/tier-list', {
					method: 'POST',
					body: formData
				});
				const data = await response.json();
				console.log('data', data);
				addItem({ name: newItemName, id: uuidv4(), imgUrl: data.imagePath ? data.imagePath : null });
				showModal = false;
				newItemName = '';
				newItemImage = null;
				//await invalidate('/tier-list');
				return;
			} catch (error) {
				console.error('Error creating item', error);
				alert('Error creating item');
			}
		}

		addItem({ name: newItemName, id: uuidv4(), imgUrl: null });
		showModal = false;
		return;
	}
</script>

<Modal bind:showModal={showModal}>
	{#snippet header()}
		<h2>Add New Item</h2>
	{/snippet}
	
	<div class="flex flex-col gap-2 p-4">
		<input
			type="text"
			name="itemName"
			class="border border-black rounded-md px-2 py-1"
			bind:value={newItemName}
			placeholder="Item Name"
		/>
		<input
			type="file"
			name="itemImage"
			class="border border-black rounded-md px-2 py-1"
			onchange={(e) => (newItemImage = e.currentTarget.files?.[0] ?? null)}
			placeholder="Item Image"
			accept="image/*"
		/>
	</div>
	<button class="blue-clicker" onclick={createItemAndClose}>Add</button>
	
	{#snippet footer()}
		<span></span>		
	{/snippet}
</Modal>