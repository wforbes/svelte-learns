<script lang="ts">
	let name = "Svelte";
	let imgSubject = "Ross"
	let src = "/code-meme.png"
</script>

<h1>Welcome</h1>

<div class="mx-auto">
	<p>
		Hello {name.toUpperCase()}!
	</p>
	<img
		{src}
		alt="{imgSubject} is sarcastically moody, 90s people loved that."
		width="300"
	/>
</div>