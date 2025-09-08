<script lang="ts">
	import Modal from './Modal.svelte';

	let { addRow, showModal = $bindable() } = $props();

	let newRowLabel = $state('');
	let newRowColor = $state('');

	let preSetColors = $state(['s', 'a', 'b', 'c', 'd', 'f']);

	function setNewRowColor(color: string) {
		newRowColor = color;
	}

	function createRowAndClose(newRowLabel: string, newRowColor: string) {
		if (newRowLabel.trim() === ''){
			alert('Row label cannot be empty');
			return;
		}

		addRow(newRowLabel, newRowColor);
		newRowLabel = '';
		newRowColor = '';
		showModal = false;
	}
</script>

<Modal bind:showModal={showModal}>
	{#snippet header()}
		<h2>Add Custom Tier Row</h2>
	{/snippet}
	<div class="flex flex-col gap-2 p-4">
		<input type="text" class="border border-black rounded-md px-2 py-1" bind:value={newRowLabel} placeholder="Row Label" />
		<div class="flex flex-col gap-2 mt-2 border border-black rounded-md">
			<label for="newRowColor" class="w-full text-center">Color</label>
			<div id="newRowColor" class="flex flex-row gap-2 h-[60px] justify-center p-2">
				{#each preSetColors as color}
					<button class="bg-{color}-tier tier-color-box {newRowColor === color ? 'border-2 border-black' : ''}" onclick={() => setNewRowColor(color)}>{color.toUpperCase()}</button>
				{/each}
			</div>
		</div>
	</div>
	{#snippet footer()}
		<button class="blue-clicker" onclick={() => createRowAndClose(newRowLabel, newRowColor)}>Add</button>
	{/snippet}
</Modal>