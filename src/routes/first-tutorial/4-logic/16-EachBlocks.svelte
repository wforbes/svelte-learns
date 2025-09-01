<script>
	const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
	let selected = $state(colors[0]);
</script>

<div class="main-container">
	<h1 class="color-display" style="color: {selected}">Pick a color</h1>

	<div class="color-buttons">
		{#each colors as color, i}
			<button
				style="background: {color}"
				class="color-button"
				aria-label="{color}"
				aria-current={selected === color}
				onclick={() => selected = color}
			>{i + 1}</button>
		{/each}
	</div>
</div>

<style>
	h1.color-display {
		font-size: 2rem;
		font-weight: 700;
		transition: color 0.2s;
		text-shadow:
			-1px -1px 0 black,
            1px -1px 0 black,
            -1px 1px 0 black,
            2px 1px 0 black;
	}

	div.main-container {
		background-color: lightblue;
		padding: 0.5em;
	}

	div.color-buttons {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		grid-gap: 5px;
		max-width: 400px;
		min-height: 50px;
	}

	button.color-button {
		aspect-ratio: 1;
		border-radius: 50%;
		background: var(--color, #fff);
		transform: translate(-2px,-2px);
		filter: drop-shadow(2px 2px 3px rgba(0,0,0,0.2));
		transition: all 0.1s;
		color: white;
		font-weight: 700;
		font-size: 2rem;
		text-shadow: 
			-1px -1px 0 black,
            1px -1px 0 black,
            -1px 1px 0 black,
            2px 2px 0 black;
	}

	button.color-button[aria-current="true"] {
		transform: none;
		filter: none;
		box-shadow: inset 3px 3px 4px rgba(0,0,0,0.2);
	}
</style>