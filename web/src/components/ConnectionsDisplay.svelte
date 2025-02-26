<!-- src/components/ConnectionsDisplay.svelte -->

<script lang="ts">
  import Panel from "./Panel.svelte";
  import KofiButton from "./KofiButton.svelte";

	// declare props to accept values from parent component
	export let desc: string = ' '; // a string for the description text, whitespace by default; ok if unused btw
</script>

<div class="container">
<div class="centre-container">

	<div class="panel-box" style="background-color:rgb(255, 252, 252);">
	<slot />
	</div>#

</div>
</div>

<style>
	/* rectangle */
	:global(.panel-box) {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		align-self: center;
		justify-content: center;
		gap: 16px;
		background: #ffffff;
		border-radius: 12px !important;
		box-shadow: 8px 12px 24px 16px rgba(0, 0, 0, 0.075) !important;
		padding: 16px;
		z-index: 1;
		max-width: 582.258271px !important;
	}
	:global(.dark .panel-box) {
		background-color: #1a1a1a;
		box-shadow: 8px 8px 24px 4px rgba(255, 255, 255, 0.05);
	}
</style>
