<script lang="ts">
	let name = $state('world');
</script>

<input bind:value={name} class="border border-gray-300 rounded-md px-2 py-1" />

<h1>Hello {name}!</h1>