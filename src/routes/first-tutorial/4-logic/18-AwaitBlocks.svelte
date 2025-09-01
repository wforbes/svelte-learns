<script>
	import { roll } from './18-utils';

	let promise = $state(roll());
</script>

<button class="green-clicker mb-2" onclick={() => promise = roll()}>
	roll the dice
</button>

{#await promise}
	<p>...rolling</p>
{:then number}
	<p>you rolled a {number}!</p>
{:catch error}
	<p class="text-red-500">{error.message}</p>
{/await}
