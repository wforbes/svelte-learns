<script lang="ts">
	import tippy, { type Props } from 'tippy.js';

	let content = $state('');

	function tooltip(node: HTMLElement, fn: () => Partial<Props>) {
		console.log(node)
		$effect(() => {
			const tooltip = tippy(node, {
				...fn(),
				offset: [
					0, 
					 -(node.getBoundingClientRect().height + (content.length > 0 ? 36 : 12))
				] // needed to offset the tooltip to appear below the button
				// because otherwise the tooltip is appearing above it for some reason
			});

			return tooltip.destroy;
		});
	}
</script>
<div class="flex flex-row gap-2 p-10">
	<input bind:value={content} placeholder="Enter content" type="text" class="border rounded-md px-4 py-2 transition active:scale-95 mb-2" />

	<button
		use:tooltip={() => ({ content, appendTo: document.body })} 
		class="rounded-md px-4 py-2 transition active:scale-95 text-white bg-green-600 hover:bg-green-700"
	>
		Hover me
	</button>
</div>
<style>
	:global {
		[data-tippy-root] {
			--bg: #666;
			background-color: var(--bg);
			color: white;
			border-radius: 0.2rem;
			padding: 0.2rem 0.6rem;
			filter: drop-shadow(1px 1px 3px rgb(0 0 0 / 0.1));

			* {
				transition: none;
			}
		}

		[data-tippy-root]::before {
			--size: 0.4rem;
			content: '';
			position: absolute;
			left: calc(50% - var(--size));
			top: calc(-2 * var(--size) + 1px);
			border: var(--size) solid transparent;
			border-bottom-color: var(--bg);
		}
	}
</style>
