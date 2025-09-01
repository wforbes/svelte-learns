<script lang="ts">
	let { increment, decrement } = $props();
</script>

<div class="flex flex-row gap-2">
	<button
		onclick={decrement}
		class="green-clicker"
	>-1</button>
	<button
		onclick={increment}
		class="green-clicker"
	>+1</button>
</div>