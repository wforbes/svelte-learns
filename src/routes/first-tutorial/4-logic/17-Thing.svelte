<script lang='ts'>
	const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

	// `name` is updated whenever the prop value changes...
	let { name } = $props();

	// ...but `emoji` is fixed upon initialisation
	const emoji = (emojis as any)[name] as string;
</script>

<p>{emoji} = {name}</p>