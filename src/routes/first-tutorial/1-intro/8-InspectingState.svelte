<script lang="ts">
	let numbers = $state([1, 2, 3, 4])
	let total = $derived(numbers.reduce((t, n) => t + n, 0))

	function addNumber() {
		numbers.push(numbers.length + 1)

		// non-reactive state snapshot
		console.log($state.snapshot(numbers))
	}

	// automatically logs a state snapshot whenever it changes
	//	- this auto stripped out of prod build
	//$inspect(numbers);

	// customize how the info is displayed using .with
	//	- like passing it the console.trace to see change origin
	$inspect(numbers).with(console.trace)
</script>
<p class="mb-3">
	open browser dev tools console logs to see
	this in action &lbrack; <span class="term">F12</span>
	or <span class="term">Ctrl+Shft+i</span>&rbrack;
</p>
<p class="text-xl font-bold!">{numbers.join(' + ')} = {total}</p>

<button
	onclick={addNumber}
	class="green-clicker"
>
	Add a number
</button>