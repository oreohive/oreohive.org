<!-- web/sveltekit-app/src/components/PanelBox.svelte-->

<script lang="ts">
	// declare props to accept values from the parent component
	export let desc: string = ' '; // a string for the description text, whitespace by default
</script>

<p class="panel-desc">{desc}</p>
<div class="panel-box">
	<slot />
</div>

<style>
	* {
		box-sizing: border-box;
		overflow: visible;
		z-index: -1;
	}

	/* rectangle */
	.panel-box {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: 16px;
		background: #ffffff;
		border-radius: 12px;
		box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
		padding: 16px;
		overflow-x: visible; /* allow horizontal scrolling if needed */
		overflow-y: visible;
		z-index: -1;
	}

	.panel-box > * {
		flex: 0 0 auto; /* prevent children from shrinking or growing */
		margin-left: 16px;
		margin-right: 16px;
		overflow-x: visible;
		overflow-y: visible;
		z-index: -1;
	}
</style>
