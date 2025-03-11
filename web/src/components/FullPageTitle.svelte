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
        color: #5a5467;
    }
    .fullpagetitle-display {
        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        min-height: calc(100vh - 76px) !important; /* since navbar is 76px tall, we need to account for that */
        margin: 0px;
        background-image: url("/backgrounds/codioful.jpg");
        background-size: cover;
        background-position: center;
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
