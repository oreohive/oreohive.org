<!-- src/components/HTitle.svelte-->

<script>
    export let title;
    export let desc;
    export let direction = "left";
</script>

<div class="hometitle-display">
    {#if direction == "left"}
        <div class="title-pane">
            <div class="title-pane-text">
                <h1>{title}</h1>
                <p class="desc">{desc}</p>
                <slot />
            </div>
        </div>
        <div class="background-image">
            <div class="htitle-blur"></div>
        </div>
    {:else}
        <div class="background-image">
            <div class="htitle-blur"></div>
        </div>
        <div class="title-pane">
            <div class="title-pane-text">
                <h1>{title}</h1>
                <p class="desc">{desc}</p>
                <slot />
            </div>
        </div>
    {/if}
</div>

<style>
    h1 {
        font-family: Poppins, sans-serif;
        margin: 12px;
        gap: 0px;
        padding: 0px;
    }
    .desc {
        margin-left: 12px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
        padding: 0px;
        gap: 0px;
        font-weight: 200;
        color: #7f7f7f;
        font-style: italic;
        font-family:'Courier New', Courier, monospace;
    }

    /* background blur using backdrop-filter */
    /* https://blog.prototypr.io/how-to-make-a-background-blur-in-css-with-one-line-of-code-e446c7236e60 <3 */
    .htitle-blur {
        background: rgba(
            255,
            255,
            255,
            0
        ); /* make sure this colour has an opacity of less than 1! */
        backdrop-filter: blur(8px); /* this be the blur! */
        height: 100vh;
        width: 100%;
        max-width: 100vw;
        overflow: hidden;
    }
    .hometitle-display {
        position: relative;
        display: flex;
        flex-direction: row;
        height: calc(
            100vh - 65px
        ); /* since navbar is like 65px tall, we need to account for that */
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! */
        background-position: center;
        overflow: hidden;
    }
    .title-pane {
        display: flex;
        flex-direction: column;
        width: 50vw;
        align-items: center;
        justify-content: center;
        background-color: #e8e8e8;
        background-image: linear-gradient(270deg, #e8e8e8 0%, #fff 100%);
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! x2 */
        gap: 0px;
    }
    .title-pane-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 380px;
    }
    .background-image {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: calc(
            100vh - 65px
        ); /* since navbar is like 65px tall, we need to account for that */
        width: 50vw;
        margin: 0px;

        background: repeating-linear-gradient(147deg, #fff7ac, #ffbcd4, #b0ffbe, #5757e4);
        background-size: 300% 300%;
        animation: gradient-animation 30s ease infinite;

        background-position: center;
        background-repeat: no-repeat;

        overflow: hidden;
    }

    @keyframes gradient-animation {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    :global(.dark .title-pane) {
        background-color: #1c1c1b;
        background-image: linear-gradient(270deg, #1c1c1b 0%, #2d2020);
    }
</style>
