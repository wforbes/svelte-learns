<script lang="ts">
	let numbers = $state([1, 2, 3, 4, 5]);
	function addNumber() {
		numbers.push(numbers.length + 1);
	}
	let sum = $derived(numbers.reduce((a, b) => a + b, 0));
</script>

<div class="flex flex-col items-center justify-center">
	<p class="text-center max-w-md">Numbers: {numbers.join(' + ')} = {sum}</p>
	<button
		onclick={addNumber}
		class="rounded-md px-4 py-2 transition active:scale-95 text-white bg-green-600
		hover:bg-green-700 mt-5">
		Add Number
	</button>
</div>
