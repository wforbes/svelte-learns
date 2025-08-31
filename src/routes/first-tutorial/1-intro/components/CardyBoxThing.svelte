<script lang="ts">
	let { children } = $props();
</script>

<div class="rounded-md border border-gray-400 border-b-2 mx-auto mt-5 p-3">
	{@render children()}
</div>