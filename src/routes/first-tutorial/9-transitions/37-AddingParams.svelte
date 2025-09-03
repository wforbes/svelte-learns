<script lang="ts">
	import { fly } from 'svelte/transition';

	let visible = $state(true);
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<div class="h-10">
	{#if visible}
		<p transition:fly={{ y: 50, duration: 2000 }}>
			Fades in and out
		</p>
	{/if}
</div>