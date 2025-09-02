<script lang="ts">
	import { marked } from 'marked';

	let value = $state(`Some words are *italic*, some are **bold**\n\n- lists\n- are\n- cool`);
</script>

<div class="grid">
	input
	<textarea bind:value={value}></textarea>

	output
	<div class="output">{@html marked(value)}</div>
	<!-- can also use shorthand syntax: <textarea bind:value /> if 'value' is the variable name like this -->
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: 5em 1fr;
		grid-template-rows: 1fr 1fr;
		grid-gap: 1em;
		height: 100%;
	}

	textarea {
		flex: 1;
		resize: none;
		padding: 0.5rem;
		border: 1px solid #ccc;
	}
	div.output > ul {
		list-style: disc!important;
		padding-left: 1rem;
	}
</style>