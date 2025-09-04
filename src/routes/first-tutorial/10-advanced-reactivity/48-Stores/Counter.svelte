<script>
	import { count } from './shared.js';
</script>

<div class="flex flex-row gap-2">
	<button class="blue-clicker" onclick={() => $count += 1 }>
		clicks: {$count}
	</button>
</div>
