<!-- src/components/HTitle.svelte-->

<script>
    export let title;
    export let desc;
    export let direction = "left"
    export let img_url = "/logo.webp"
</script>

<div class="homepoint-display">
    {#if direction == "left"}
        <div class="pane">
            <div class="pane-text">
                <h1>{title}</h1>
                <slot />
            </div>
        </div>

        <div class="background-image">
            <div class="hpoint-blur">
                <img src={img_url}>
            </div>
        </div>

    {:else}
        <div class="background-image">
            <div class="hpoint-blur">
                <img class="point-picture" src={img_url}>
            </div>
        </div>

        <div class="pane">
            <div class="pane-text">
                <h1>{title}</h1>
                <slot />
            </div>  
        </div>

    {/if}

</div>
<style>
    :global(p) {
        font-size: 1em;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }
    :global(h1) {
        font-size: 1.75em;
        color:rgb(201, 111, 111);
        font-family: Poppins, sans-serif;
        margin-left: 8px;
        margin-right: 0px;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    /* background blur using backdrop-filter */
    /* https://blog.prototypr.io/how-to-make-a-background-blur-in-css-with-one-line-of-code-e446c7236e60 <3 */
    .hpoint-blur {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.9); /* make sure this colour has an opacity of less than 1! */
        backdrop-filter: blur(8px); /* this be the blur! */
        min-height: 80vh;
	    width: 100%;
        max-width: 100vw;
        overflow: hidden;
    }
    .hpoint-blur .dark { /* todo: fix lmao */
        background: rgba(255, 255, 255, 0.1) !important;
    }
    .homepoint-display {
        position:  relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-height: 60vh;
        max-height: 180vh;
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! */
        overflow: hidden;
    }
    .pane {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 50vw;
        min-height: 60vh;
        max-height: 180vh;
        align-items: center;
        flex-wrap: wrap;
        justify-content: center;
        background-color: #fcfcff;
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! x2 */
        padding: 0px !important;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .pane-text {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: flex-start;
        min-height: 60vh;
        max-height: 180vh;
        max-width: 512px;
        padding: 8px;
        justify-content: center;
        background-color: #ffffff;
        border-radius: 12px;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .background-image {
        position:  relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        width: 50vw;
        max-height: 80vh;
        margin: 0px;

        background-image: url("/backgrounds/codioful.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        overflow: hidden;
    }
    :global(.dark .pane) {
        background-color: #5a5467;
    }
    :global(.dark .pane-text) {
        background-color:rgb(120, 112, 137);
    }
</style>