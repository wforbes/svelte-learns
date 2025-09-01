<script lang="ts">
	import BigRedButton from './23-BigRedButton.svelte';
	import horn from './23-levelup.mp3';

	const audio = new Audio();
	audio.src = horn;

	function honk() {
		audio.load();
		audio.play();
	}
</script>

<BigRedButton onclick={honk} />
