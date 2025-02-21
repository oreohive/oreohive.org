<!-- src/components/TitleDisplay.svelte-->

<!-- this component is used for page titles and little more
kind of like a glorified h1 but ensures positioning
was created with different functionality in which the title would be vertically centred too, not just horizontally
but this is now taken care of by the FullPageTitle.svelte component -->

<script>
    export let title;
</script>

<div class="title-display">
    <h1>{title}</h1>
</div>

<style>
    /* I FOUND YOU */
    /* finally found the style here that was giving me grief in making titles remain black even in dark mode */
    /* YES I FINALLY FOUND YOU */

    .title-display {
        /* don't put z-index: -1; here apparently, else it hides the title */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;
        margin: 16px;
    }
</style>
