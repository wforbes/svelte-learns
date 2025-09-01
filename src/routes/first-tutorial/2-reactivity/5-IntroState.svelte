<script lang="ts">
	let count = $state(0);
	function increment() {
		count += 1;
	}
</script>


<button onclick={increment} class="rounded-md px-4 py-2 transition active:scale-95 text-white bg-green-600 hover:bg-green-700">
	Clicked {count}
	{count === 1 ? 'time': 'times'}
</button>