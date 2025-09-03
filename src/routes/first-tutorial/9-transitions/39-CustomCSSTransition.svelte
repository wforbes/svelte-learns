<script lang="ts">
	import { elasticOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	let visible = $state(true);

	function spin(node: HTMLElement, { duration }: { duration: number }) {
		return {
			duration,
			css: (t: number, u: number) => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${Math.trunc(t * 360)},
						${Math.min(100, 1000 * u)}%,
						${Math.min(50, 500 * u)}%
					);`
			}
		};
	}
</script>

<label>
	<input type="checkbox" bind:checked={visible} />
	visible
</label>

<div class="h-30">
	{#if visible}
		<div
			in:spin={{ duration: 8000 }}
			out:fade
		>
			<span>transitions!</span>
		</div>
	{/if}
</div>

<style>

	span {
		font-size: 4em;
	}
</style>
