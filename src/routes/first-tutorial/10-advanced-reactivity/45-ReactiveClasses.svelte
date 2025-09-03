<script lang="ts">
	const MAX_SIZE = 200;

	class Box {
		embiggenAmount = $state(10);
		width = $state(0);
		height = $state(0);
		area = $derived(this.width * this.height);

		constructor(width: number, height: number) {
			this.width = width;
			this.height = height;
		}

		embiggen(amount: number) {
			if (this.width + amount > MAX_SIZE || this.height + amount > MAX_SIZE) {
				return;
			}
			this.width += amount;
			this.height += amount;
		}

		canEmbiggen(amount: number) {
			return this.width + amount <= MAX_SIZE && this.height + amount <= MAX_SIZE;
		}
	}

	const box = new Box(100, 100);
</script>

<label>
	<input type="range" bind:value={box.width} min={0} max={MAX_SIZE} />
	{box.width}
</label>

<label>
	<input type="range" bind:value={box.height} min={0} max={MAX_SIZE} />
	{box.height}
</label>

<button class="blue-clicker" onclick={() => box.embiggen(box.embiggenAmount)} disabled={!box.canEmbiggen(box.embiggenAmount)}>
	embiggen
</button>

<hr>

<div class="min-h-50 flex items-center justify-center">
	<div
		class="box"
		style:width="{box.width}px"
		style:height="{box.height}px"
	>
		{box.area}
	</div>
</div>

<style>
	label {
		display: flex;
		align-items: center;
	}

	hr {
		margin: 1em 0;
		border: none;
		border-bottom: 1px solid #888;
	}

	.box {
		background: radial-gradient(at 25% 25%, hsl(15 100 60), hsl(15 100 50)) ;
		border-radius: 2px;
		filter: drop-shadow(0 0 10px hsl(15 100 50 / 0.3));
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}
</style>
