<script>
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<button onclick={increment} class="green-clicker">
	Clicked {count}
	{count === 1 ? 'time' : 'times'}
</button>

{#if count > 10}
	<p>{count} is greater than 10</p>
{/if}
