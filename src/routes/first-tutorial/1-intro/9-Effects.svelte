<script lang="ts">
	let elapsed = $state(0)
	let interval = $state(1000)

	$effect(() => {
		const id = setInterval(() => {
			elapsed += 1;
		}, interval)

		return () => {
			clearInterval(id)
		}
	})
</script>

<p>elapsed: {elapsed}</p>
<p>interval: {interval}</p>
<div class="flex flex-row gap-2">
	<button
		onclick={() => interval /= 2}
		class="green-clicker"
	>
		speed up
	</button>
	<button
		onclick={() => interval *=2}
		class="green-clicker"
	>
		slow down
	</button>
</div>