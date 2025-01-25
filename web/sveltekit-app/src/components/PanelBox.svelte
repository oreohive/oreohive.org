<!-- web/sveltekit-app/src/components/panel-box.svelte-->

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
	}
	/* rectangle */
	.panel-box {
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 16px;
		--panel-box-height: 132px;
		width: calc(var(--panel-box-height) * 1.5);
		height: var(--panel-box-height);
		background: #e8e8e8;
		border-radius: calc(var(--panel-box-height) * 0.1);
		box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
	}
</style>
