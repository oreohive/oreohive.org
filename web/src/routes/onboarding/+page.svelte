<script>
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";

    function accept_locally() {
        if (browser) {
            localStorage.setItem("accepted_terms", "true");
        }
    }
</script>


<div class="top-section" style="display: flex; flex-direction: row; align-items: center;">
    <p style="display: flex; min-height: 24px;">oreohive.org/onboarding</p>

    <div class="svelte-notice">
        <img src="icons/svelte.svg" width="32px" height="32px" alt="svelte logo" style="vertical-align: middle;"/>
        <p style="display: flex; align-items: centre; justify-content: center; vertical-align: middle; margin: 0px; gap: 0px; border-style: none; min-height: 24px;">oreohive.org is built with sveltekit + vite &lt;3 </p>
    </div>
</div>

<h1 style="margin-top: 64px; margin-bottom: 16px;">welcome to oreohive.org</h1>

<div data-tap-disabled="true" >
<audio loop autoplay hidden>
    <source src="/music/spectrum-obligato-ebb-&-flow-oreohive-onboarding-ver.mp3" type="audio/mpeg">
    your browser does not support the audio element.
</audio>
</div>

<div class="accept-button">
<form method="post" action="?/accept" use:enhance on:submit={accept_locally}>
    <button type="submit" name="accept">
        i accept the oreohive organisation's terms & ethics of use
    </button>
</form>
</div>
<p style="font-size: 0.9em; padding: 12px; margin-top: 32px;">nb! you may need to review and accept updates in the future.</p>

<div class="docs-note" style="display: flex; flex-direction: column; align-items: center;">
<a href="/terms/r1-0-1/Terms-&-Ethics-of-Use-182e-r1.0.1.html" target="_blank">terms & ethics of use (oreohive document 182e) r1.0.1 (html)</a>
<a href="/terms/r1-0-1/Terms-of-Purchasing-&-Exchange-182e-r1.0.1.html" target="_blank">terms of purchasing & exchange (oreohive document 183e) r1.0.1 (html)</a>
<p style="font-size: 0.675em; max-width: 40vw;">
        as it states, agreeing to our terms & ethics of use (182e) means also agreeing to the associated / most recent terms of purchasing & exchange (183e).<br>
        once you've accepted, you can then access oreohive.org/terms, on which you may check for later revisions or updated publications which may apply to you. we advise you routinely do this.<br><br>
        you can only use any of our (the oreohive organisation's) services, sites, software, products, or experiences for any purpose, ever, in any circumstance, if you agree that you understand, have read, and will honour our terms & ethics of use.
        <br>in using, interacting with, utilising, downloading, sending content or requests to, or otherwise manipulating or leveraging our products, services, software, apis or experiences, you agree to our terms & ethics of use of most recent publishing.<br><br>
        however, we strongly and <b>sincerely believe that our terms & ethics of use do not infringe on your rights</b>, including your right to privacy, and mainly exist to protect us from silly actors and silly people.<br><br>
        this includes respecting the licenses with which we distribute our content (GNU AGPL-3.0 by default for code, CC BY-NC-SA 4.0 by default for anything else) and not feeding any of our content to ai models for training, learning or remembering, or exposing any of it in an environment in which this could happen.<br><br>
        oreohive.org, this website, comes with <b>absolutely NO WARRANTY</b>, to the extent <b>permitted by applicable law</b>. <b>we are not liable</b>. get rekt
</p>
</div>

<style>
    .accept-button {
        margin: 48px;
    }
    .docs-note {
        margin: 48px;
        margin-bottom: 24px;
        gap: 4px;
        padding: 12px;
        border-radius: 12px;
        border-style: dashed;
        border-color: #ffbcd4;
        background-color: hsl(330, 100%, 98%);
    }
    .dark .docs-note { /* oops forgot to add this lmao */
        color: #000000 !important; /* make text colour black so it's readable on background */
    }
    .svelte-notice {
        display: flex;
        margin: 12px;
        align-items: center; 
        vertical-align: middle;
        border-radius: 12px;
        border-width: 1px;
        border-style: dashed;
    }
    img {
        vertical-align: middle;
        border-radius: 12px;
    }
    button:hover {
        background-color: #ff7eb9;
        color: #ffe2ec;
        transform: scale(1.1);
        box-shadow: 8px 8px 32px 16px rgba(0, 0, 0, 0.05);
    }
    button {
        color: #ff7eb9;
        background-color: #ffe2ec;
        border-radius: 12px;
        border-style: none;
        padding: 12px;
        font-size: 1.25em;
        transition: transform 0.05s ease, box-shadow 0.05s ease;
    }
    
</style>