<!-- web/src/components/FullPageTitle.svelte-->

<script>
    export let title;
</script>

<div class="title-display">
    <div class="blur"></div>
    <h1>{title}</h1>
</div>

<style>
    h1 {
        color: #000000;
        position: absolute;
        font-family: Poppins, sans-serif;
    }
    .dark h1 {
        color: #5a5467 !important;
    }
    .title-display {
        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 76px) !important; /* since navbar is 76px tall, we need to account for that */
        max-width: 100vw;
        background-color: #e8e8e8;
        margin: 0px;
        background-image: url("/backgrounds/palette.png");
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }
  
    /* background blur using backdrop-filter */
    /* https://blog.prototypr.io/how-to-make-a-background-blur-in-css-with-one-line-of-code-e446c7236e60 <3 */
    .blur {
        background: rgba(255, 255, 255, 0.5); /* make sure this colour has an opacity of less than 1! */
        backdrop-filter: blur(8px); /* this be the blur! */
        height: 100vh;
	    width: 100%;
        max-width: 100vw;
        overflow: hidden;
    }
</style>
