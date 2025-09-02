export function trapFocus(node: HTMLElement) {
	const previous = document.activeElement as HTMLElement;

	function focusable() {
		return Array.from(node.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')) as HTMLElement[];
	}

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	function handleKeydown(event: KeyboardEvent) {
		if (event.key !== 'Tab') return;

		const current = document.activeElement;

		const elements = focusable();
		const first = (elements as HTMLElement[]).at(0);
		const last = (elements as HTMLElement[]).at(-1)

		if (event.shiftKey && current === first) {
			last?.focus();
			event.preventDefault();
		}

		if (!event.shiftKey && current === last) {
			first?.focus();
			event.preventDefault();
		}
	}

	$effect(() => {
		focusable()[0]?.focus();

		// add event listener that intercepts tab key presses
		node.addEventListener('keydown', handleKeydown);

		//clean up when node is unmounted - remove event listener,
		//  and restore focus where it was before the element mounted
		return () => {
			node.removeEventListener('keydown', handleKeydown);
			previous?.focus();
		};
	});
}
