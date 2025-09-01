<script lang="ts">
	import PackageInfo from './12-PackageInfo.svelte';

	const pkg = {
		name: 'svelte',
		version: '5.25.0',
		description: 'blazingly fast',
		website: 'https://svelte.dev',
	}
</script>

<PackageInfo {...pkg} />