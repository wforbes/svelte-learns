<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import type { TransitionConfig } from 'svelte/transition';

	let visible = $state(true);
	let { from_x, from_y } = $props<{ from_x: number, from_y: number }>();

	// custom transition function
	function flyFrom(
		node: HTMLElement,
		{ from_x, from_y, duration = 400, delay = 0 }: { from_x: number; from_y: number; duration?: number; delay?: number }
	): TransitionConfig {
		const style = getComputedStyle(node);
		const transform = style.transform === 'none' ? '' : style.transform;
		const opacity = +style.opacity;

		const { x: to_x, y: to_y } = node.getBoundingClientRect();

		const dx = from_x - to_x;
		const dy = from_y - to_y;

		return {
			delay,
			duration,
			easing: cubicOut,
			css: (t, u) => `
			transform: ${transform} translate(${u * dx}px, ${u * dy}px);
			opacity: ${t * opacity};
		`
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

{#if visible}
	<p transition:flyFrom={{ from_x, from_y, duration: 2000 }}>
		<strong>Bonus - Adding Params</strong>
	</p>
{/if}