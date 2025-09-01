<p class="text-left! w-full">
	Without capture: event happens in the order of the elements bubbling up/out.
</p>
<div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydown={(e) => alert(`<input> ${e.key}`)} placeholder="Type something" />
</div>

<p class="mt-4 text-left! w-full">
	With capture: the alert firing order is reversed
</p>
<div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
	<input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} placeholder="Type something" />
</div>

<style>
	input {
		border: 1px solid black;
	}
</style>