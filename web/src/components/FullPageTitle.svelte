<!-- web/src/components/FullPageTitle.svelte-->

<script>
  import ScrollDownArrow from "./ScrollDownArrow.svelte";

    export let title;
</script>

<div class="title-display">
    <h1>{title}</h1>

    <div class="scroll-down-arrow">
        <ScrollDownArrow />
    </div>
</div>

<style>
    h1 {
        color: #000000;
        position: absolute;
    }
    .dark h1 {
        background-color: #121212;
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
    .scroll-down-arrow {
        position: relative;
        top: 392px
    }
</style>
