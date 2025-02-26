<!-- src/components/PanelBox.svelte-->

<!-- this is a component that stores Panel.svelte components 
panels are kind of like our own special big ui buttons; they have colours and have neat animations on hover etc.
this PanelBox.svelte component just organises and sorts them; it's the intended parent for Panel.svelte panels -->

<script lang="ts">
	// declare props to accept values from parent component
	export let desc: string = ' '; // a string for the description text, whitespace by default; ok if unused btw
</script>

<slot />

<style>
</style>
