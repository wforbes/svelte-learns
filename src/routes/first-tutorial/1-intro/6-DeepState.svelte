<script lang="ts">
	let numbers = $state([1, 2, 3, 4, 5]);
	function addNumber() {
		numbers.push(numbers.length + 1);
	}
</script>

<p class="font-bold!">Numbers: {numbers.join(' + ')} = ...</p>
<button
	onclick={addNumber}
	class="green-clicker"
>
	Add Number
</button>
