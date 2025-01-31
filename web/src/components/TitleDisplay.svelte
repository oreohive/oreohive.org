<!-- web/sveltekit-app/src/components/TitleDisplay.svelte-->

<script>
  export let title;
</script>

<div class="title-display">
	<h1>{title}</h1>
</div>

<style>
	.title-display {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}
</style>
