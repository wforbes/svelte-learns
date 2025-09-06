<script lang="ts">
	import { dndzone } from 'svelte-dnd-action';
	import type { DndEvent } from 'svelte-dnd-action';
	import { flip } from 'svelte/animate';

	let { name } = $props<{ name: string }>();

	type Item = { id: number; name: string; };
	const flipDurationMs = 300;
	let items = $state<Item[]>([]);
	
	function handleDndConsider(e: CustomEvent<DndEvent<Item>>) {
		items = e.detail.items;
	}
	function handleDndFinalize(e: CustomEvent<DndEvent<Item>>) {
		items = e.detail.items;
	}

</script>

<div class="flex flex-row gap-2 w-full border border-black">
	<div class="dnd-item flex justify-center items-center w-[120px] border bg-black text-white">{name}</div>
	<div class="dndzone w-full flex flex-row gap-2 p-2 h-[150px]" use:dndzone="{{items: items, flipDurationMs, dropTargetStyle: {outline:'0px solid black'} }}" onconsider="{handleDndConsider}" onfinalize="{handleDndFinalize}">
		{#each items as item(item.id)}
			<div class="dnd-item flex justify-center items-center w-[120px] border border-blue-500" animate:flip="{{duration: flipDurationMs}}">{item.name}</div>
		{/each}
	</div>
</div>

<style>
	
</style>