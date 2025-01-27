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
		display: flex;
		justify-content: center;
		flex-flow: column;
		align-self: center;
		align-items: center;
		position: absolute;
		right: 0;
		left: 0;
		top: 0;
		bottom: 0;
	}

	/* rectangle */
	.panel-box {
		margin: 0 auto;
		min-width: 1012px;
		min-height: 152px;
		position: relative;
		display: flex;
		flex-direction: row;
		align-self: center;
		align-items: center;
		justify-content: center;
		margin-top: 16px;
		--panel-box-height: 132px;
		width: calc(var(--panel-box-height) * 1.5);
		height: var(--panel-box-height);
		background: #ffffff;
		border-radius: calc(var(--panel-box-height) * 0.1);
		box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
		gap: 16px;
		left: 0px;
		right: 0px;
	}
</style>
