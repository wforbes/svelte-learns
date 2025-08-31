<script lang="ts">
	let numbers = $state([1, 2, 3, 4, 5]);
	let total = $derived(numbers.reduce((t, n) => t + n, 0))
	function addNumber() {
		numbers.push(numbers.length + 1)
	}
</script>

<p>{numbers.join(' + ')} = {total}</p>

<button
	onclick={addNumber}
	class="rounded-md px-4 py-2 transition active:scale-95 text-white bg-green-600 hover:bg-green-700 mt-5"
>
	Add a number
</button>

