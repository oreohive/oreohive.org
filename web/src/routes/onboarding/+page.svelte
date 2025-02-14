<script>
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";

    function accept_locally() {
        if (browser) {
            localStorage.setItem("accepted_terms", "true");
        }
    }
</script>

<p>oreohive.org/onboarding</p>
<img src="icons/svelte.svg" width="256px" height="256px" alt="oreohive logo"/>
<p>oreohive.org is built with sveltekit + vite &lt;3</p>

<h1>welcome to oreohive.org</h1>

<audio src="/music/2025-02-14-spectrumstep.mp3" loop autoplay hidden>
    your browser does not support the audio element.
</audio>

<form method="post" action="?/accept" use:enhance on:submit={accept_locally}>
    <button type="submit" name="accept">
        i accept the oreohive organisation's terms & ethics of use
    </button>
</form>
<p>nb! you may need to review and accept updates in the future.</p>

<div style="display: flex; flex-direction: column; align-items: center;">
<a href="http://localhost:5173/terms/r1-0-1/Terms-&-Ethics-of-Use-182e-r1.0.1.html">terms & ethics of use (oreohive document 182e) r1.0.1 (html)</a>
<a href="http://localhost:5173/terms/r1-0-1/Terms-of-Purchasing-&-Exchange-182e-r1.0.1.html">terms of purchasing & exchange (oreohive document 183e) r1.0.1 (html)</a>
<p style="font-size: 0.675em; max-width: 40vw;">
        <br>as it states, agreeing to our terms & ethics of use (182e) means also agreeing to the associated / most recent terms of purchasing & exchange (183e).<br>
        once you've accepted, you can then access oreohive.org/terms, on which you may check for later revisions or updated publications which may apply to you. we advise you routinely do this.<br><br>
        you can only use any of our (the oreohive organisation's) services, sites, software, products, or experiences for any purpose, ever, in any circumstance, if you agree that you understand, have read, and will honour our terms & ethics of use.
        <br>in using, interacting with, utilising, downloading, sending content or requests to, or otherwise manipulating or leveraging our products, services, software, apis or experiences, you agree to our terms & ethics of use of most recent publishing.<br><br>
        however, we strongly and <b>sincerely believe that our terms & ethics of use do not infringe on your rights</b>, including your right to privacy, and mainly exist to protect us from dodgy actors and weird people.<br><br>
        this includes respecting the licenses with which we distribute our content (GNU AGPL-3.0 by default for code, CC BY-NC-SA 4.0 by default for anything else) and not feeding any of our content to ai models for training, learning or remembering, or exposing any of it in an environment in which this could happen.<br><br>
        oreohive.org, this website, comes with <b>absolutely NO WARRANTY</b>, to the extent <b>permitted by applicable law</b>. <b>we are not liable</b>. get rekt
        <br><br>
</p>
</div>


<style global>
    @keyframes colourShift {
        0% {
            filter: hue-rotate(0deg);
        }
        100% {
            filter: hue-rotate(360deg);
        }
    }
</style>
