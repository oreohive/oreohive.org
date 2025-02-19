<!-- web/sveltekit-app/src/components/PanelBox.svelte-->

<script lang="ts">
	// declare props to accept values from the parent component
	export let desc: string = ' '; // a string for the description text, whitespace by default
</script>

<div class="panel-box">
	<slot />
</div>

<style>
	* {
		z-index: -1;
	}

	/* rectangle */
	.panel-box {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-items: center;
		align-self: center;
		justify-content: center;
		gap: 24px;
		background: #ffffff;
		border-radius: 12px;
		box-shadow: 8px 8px 24px 4px rgba(0, 0, 0, 0.075);
		padding: 16px;
		overflow-x: visible; /* allow horizontal scrolling if needed */
		overflow-y: visible;
		z-index: -1 !important;
		max-width: 85vw;
	}

	.dark .panel-box {
		background: #1a1a1a;
		background-color: #1a1a1a;
		box-shadow: 8px 8px 24px 4px rgba(255, 255, 255, 0.05);
	}
</style>
