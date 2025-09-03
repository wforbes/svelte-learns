<script lang="ts">
	import { fly } from 'svelte/transition';

	let visible = $state(true);
	let status = $state('waiting...');
</script>

<p>status: {status}</p>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<div class="h-10">
{#if visible}
	<p
		transition:fly={{ y: 50, duration: 2000 }}
		onintrostart={() => status = 'intro started'}
		onoutrostart={() => status = 'outro started'}
		onintroend={() => status = 'intro ended'}
		onoutroend={() => status = 'outro ended'}
	>
		Flies in and out
	</p>
{/if}
</div>