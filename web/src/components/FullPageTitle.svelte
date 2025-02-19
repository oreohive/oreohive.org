<!-- web/src/components/FullPageTitle.svelte-->

<script>

    export let title;
</script>

<div class="title-display">
    <h1>{title}</h1>

</div>

<style>
    h1 {
        color: #000000;
        position: absolute;
    }
    .dark h1 {
        color: #f5f5f5;
    }
    .title-display {
        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 76px) !important; /* since navbar is 76px tall, we need to account for that */
        min-width: 100vw;
        background-color: #e8e8e8;
        margin: 8px;
    }
</style>
