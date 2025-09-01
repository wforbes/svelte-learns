<script lang="ts">
	let numbers = $state([1, 2, 3, 4, 5]);
	let total = $derived(numbers.reduce((t, n) => t + n, 0))
	function addNumber() {
		numbers.push(numbers.length + 1)
	}
</script>

<p class="font-bold!">{numbers.join(' + ')} = {total}</p>

<button
	onclick={addNumber}
	class="green-clicker"
>
	Add a number
</button>

