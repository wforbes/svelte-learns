<script lang="ts">
	import type { Item } from './types';

	let { item } = $props<{ item: Item }>();

</script>

<div class="dnd-item flex flex-col justify-center items-center h-full w-[100px] border border-blue-500 bg-white">				
	{#if item.imgUrl}
		<img src={item.imgUrl} alt={item.name} class="w-[80px] h-[80px]" />
	{:else}
		<div class="w-full text-center">{item.name}</div>
	{/if}
</div>