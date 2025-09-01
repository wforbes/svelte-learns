<script lang="ts">
	let m = $state({ x: 0, y: 0 });

	function onpointermove(event: PointerEvent) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
</script>

<div {onpointermove}>
	The pointer is at {Math.round(m.x)} x {Math.round(m.y)}
</div>

<style>
	div {
		width: 100%;
		height: 30vh;
		padding: 1rem;
		background-color: gray;
		color: white;
	}
</style>
