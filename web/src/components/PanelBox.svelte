<!-- src/components/PanelBox.svelte-->

<!-- this is a component that stores Panel.svelte components 
panels are kind of like our own special big ui buttons; they have colours and have neat animations on hover etc.
this PanelBox.svelte component just organises and sorts them; it's the intended parent for Panel.svelte panels -->

<script lang="ts">
    // declare props to accept values from parent component
    export let desc: string = " "; // a string for the description text, whitespace by default; ok if unused btw
</script>

<slot />

<style>
    :global(.panel-box) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
        background: #ffffff;
        border-radius: 20px !important;
        box-shadow: 2px 8px 24px 4px rgba(0, 0, 0, 0.175) !important;
        padding: 12px;
        z-index: 1;
        max-width: 622px !important;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    :global(.dark .panel-box) {
        background-color: #787089 !important;
        box-shadow: 8px 8px 24px 4px rgba(255, 255, 255, 0.05);
    }
</style>
