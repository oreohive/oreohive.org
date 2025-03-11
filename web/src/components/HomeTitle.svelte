<!-- src/components/HomeTitle.svelte-->

<script>
    export let title;
    export let desc;
</script>

<div class="hometitle-display">

    <div class="left-pane">
    <div class="left-pane-text">
    <h1>{title}</h1>
    <p>{desc}</p>
    </div>  
    </div>

    <div class="background-image">
    <div class="blur">
    </div>
    </div>

</div>

<style>
    h1 {
        color: #000000;
        font-family: Poppins, sans-serif;
        margin-left: 16px;
    }
    .dark h1 {
        color: #5a5467;
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
    .hometitle-display {
        position:  relative;
        display: flex;
        flex-direction: row;
        height: calc(100vh - 65px); /* since navbar is like 65px tall, we need to account for that */
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! */
        background-position: center;
        overflow: hidden;
    }
    .left-pane {
        display: flex;
        flex-direction: column;
        width: 50vw;
        align-items: center;
        justify-content: center;
        background-color: #e8e8e8;
        margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! x2 */
        gap: 0px;
    }
    .left-pane-text {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        max-width: 512px;
    }
    .background-image {
        position:  relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        height: calc(100vh - 65px); /* since navbar is like 65px tall, we need to account for that */
        width: 50vw;
        margin: 0px;

        background-image: url("/backgrounds/codioful.jpg");
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;

        overflow: hidden;
    }
</style>
