<!-- src/components/FullPageTitle.svelte-->

<!-- this component takes up an entire page's worth of screen real estate 
it's kind of like a slice of webpage
it has a background, then centres a title in the middle of it
this title is centred both vertically and horizontally on top of the background image chosen
this might perhaps not be the most elegant solution ever, maybe it's better to use a background image in the parent component and then have the title display on top of that?
we can work on it :))) -->

<script>
    export let title;
</script>

<div class="fullpagetitle-display">
    <div class="blur">
        <div class="title-pill"><h1>{title}</h1></div>
        <slot />
    </div>
</div>

<style>
    .fullpagetitle-display {
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("/backgrounds/codioful.webp");

        overflow: hidden;
        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 76px) !important; /* since navbar is 76px tall, we need to account for that */
        margin: 0px;
        width: 100vw;
    }
  
    /* background blur using backdrop-filter */
    /* https://blog.prototypr.io/how-to-make-a-background-blur-in-css-with-one-line-of-code-e446c7236e60 <3 */
    .blur {
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.4); /* make sure this colour has an opacity of less than 1! */
        backdrop-filter: blur(8px); /* this be the blur! */
        height: 100vh;
        width: 100vw;
        overflow: hidden;
    }
    .title-pill {
        display: flex;
        align-items: center;
        justify-content: center;
        border-style: solid;
        border-width: 6px;
        border-color: #fff;
        min-width: 25vw;
        max-width: 100%;
        border-radius: 256px;
        padding: 4px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 8px;
        padding-right: 8px;
        margin: 0px;
        margin-left: 428px !important;
        margin-right: 428px !important;
        overflow: hidden;
    }
    h1 {
        font-style: normal;
        font-weight: 500;
        color: #fff !important;
        margin: 18px;
    }
</style>
