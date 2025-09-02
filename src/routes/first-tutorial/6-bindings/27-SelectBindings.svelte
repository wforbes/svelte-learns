<script lang="ts">
	let questions = $state([
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	] as { id: number, text: string }[]);

	let selected = $state<{ id: number, text: string } | undefined>(undefined);

	let answer = $state('');

	function handleSubmit(e: Event) {
		e.preventDefault();

		alert(
			`answered question ${selected?.id} (${selected?.text}) with "${answer}"`
		);
	}
</script>

<h2>Insecurity questions</h2>

<form onsubmit={handleSubmit} class="flex flex-col gap-2">
	<select
		bind:value={selected}
		onchange={() => (answer = '')}
		class="border border-gray-300 rounded-md px-2 py-1"
		placeholder="Select a question"
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} class="border border-gray-300 rounded-md px-2 py-1" placeholder="Answer" />

	<button disabled={!answer} type="submit" class="green-clicker disabled:opacity-50 disabled:cursor-not-allowed">
		Submit
	</button>
</form>

<p>
	selected question {selected
		? selected.id
		: '[waiting...]'}
</p>
