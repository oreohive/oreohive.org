<!-- src/components/PanelBox.svelte-->

<!-- this is a component that stores Panel.svelte components 
panels are kind of like our own special big ui buttons; they have colours and have neat animations on hover etc.
this PanelBox.svelte component just organises and sorts them; it's the intended parent for Panel.svelte panels -->

<script lang="ts">
	// declare props to accept values from parent component
	export let desc: string = ' '; // a string for the description text, whitespace by default; ok if unused btw
</script>

<div class="panel-box">
	<slot />
</div>

<style>
	* {
		z-index: -1;
	}

	/* rectangle */
	:global(.panel-box) {
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
		overflow-x: visible; /* allow horizontal scrolling, if needed! */
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
