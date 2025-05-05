<script>
    import { enhance } from "$app/forms";
    import { browser } from "$app/environment";
    import { onMount } from "svelte";
    let redirectTo = "/";
    let redirectToCleaned = "";

    if (browser) {
        // extract the redirect query parameter
        const urlParams = new URLSearchParams(window.location.search);
        redirectTo = urlParams.get("redirect") || "/";

        if (redirectTo.endsWith("/")) {
            redirectToCleaned = redirectTo.slice(0, -1);
        } else {
            redirectToCleaned = redirectTo;
        }
    }

    onMount(() => {
        // if the user has already accepted the terms, redirect to the home page
        if (browser) {
            // extract the redirect query parameter
            const urlParams = new URLSearchParams(window.location.search);
            redirectTo = urlParams.get("redirect") || "/";

            if (redirectTo.endsWith("/")) {
                redirectToCleaned = redirectTo.slice(0, -1);
            } else {
                redirectToCleaned = redirectTo;
            }
        }
    });
    function accept_locally() {
        if (browser) {
            localStorage.setItem("accepted_terms", "true");

            // redirect to the specified path or home if not specified
            window.location.href = redirectTo;
        }
    }
</script>

<svelte:head>
    <title>onboarding | oreohive.org</title>
    <meta
        name="description"
        content="oreohive.org/onboarding - you don't sign your soul away by using our stuff, don't worry."
    />
</svelte:head>

<div class="container">

<div class="top-section" style="display: flex; flex-direction: row; align-items: center; justify-content: center; padding: 12px; gap: 12px;">
    <p style="min-height: 24px; border-style: dashed;">
        oreohive.org/onboarding
    </p>

    <div class="svelte-notice">
        <img src="icons/svelte.svg" width="32px" height="32px" alt="svelte logo" />
        <p style="margin: 0px; gap: 0px; border-style: none; min-height: 24px;">oreohive.org is built with sveltekit + vite &lt;3</p>
    </div>
</div>

<h1 style="margin-top: 64px; margin-bottom: 16px;">welcome to oreohive.org</h1>

<div data-tap-disabled="true">
    <audio loop autoplay hidden><source src="/music/2025-02-27-oreohive-spectrumstep.mp3" type="audio/mpeg" />
        oops! your browser does not support the audio element.
    </audio>
</div>

<div style="position: relative; display: flex; flex-direction: column; flex-wrap: wrap; min-height: 45vh; align-items: center; justify-content: centre;">

    <div style="position: relative; min-height: 35vw; display: flex; flex-wrap: nowrap; align-items: center; justify-content: center;"> <!-- don't give this a height or max-height lol -->
        <form on:submit={accept_locally}>

            <div class="centre-conta" style="display: flex; flex-direction: column; align-items: center; gap: 16px;">

                <button type="submit" name="accept">
                    <b>i accept the oreohive organisation's terms & ethics of use</b>, thus the use of cookies :)
                </button>

                <div style="display: flex; flex-direction: row; gap: 12px;">
                    <p style="color: #ff0059;">you'll be taken here when you hit this button:</p>
                    <p style="text-decoration: none;">oreohive.org{redirectToCleaned}</p>
                </div>

                <p style="max-width: fit-content; font-size: 0.9em; padding: 12px; margin-top: 32px; border-style: dashed; border-width: 1.25px;">
                    nb! you may need to review and accept updates in the future.
                </p>

            </div>

        </form>
    </div>

    <div class="docs-note">
        <a
            href="/terms/r1-0-1/Terms-&-Ethics-of-Use-182e-r1.0.1.html"
            target="_blank"
            >terms & ethics of use (oreohive document 182e) r1.0.1 (html)</a
        >
        <a
            href="/terms/r1-0-1/Terms-of-Purchasing-&-Exchange-183e-r1.0.1.html"
            target="_blank"
            >terms of purchasing & exchange (oreohive document 183e) r1.0.1
            (html)</a
        >
        <p style="font-size: 0.675em; max-width: 40vw;">
            as it states, agreeing to our terms & ethics of use (182e) means
            also agreeing to the associated / most recent terms of purchasing &
            exchange (183e).<br />
            once you've accepted, you can then access oreohive.org/terms, on which
            you may check for later revisions or updated publications which may apply
            to you. we advise you routinely do this.<br /><br />
            you can only use any of our (the oreohive organisation's) services, sites,
            software, products, or experiences for any purpose, ever, in any circumstance,
            if you agree that you understand, have read, and will honour our terms
            & ethics of use.
            <br />in using, interacting with, utilising, downloading, sending
            content or requests to, or otherwise manipulating or leveraging our
            products, services, software, apis or experiences, you agree to our
            terms & ethics of use of most recent publishing.<br /><br />
            however, we strongly and
            <b
                >sincerely believe that our terms & ethics of use do not
                infringe on your rights</b
            >, including your right to privacy, and mainly exist to protect us
            from silly actors and silly people.<br /><br />
            this includes respecting the licenses with which we distribute our content
            (GNU AGPL-3.0 by default for code, CC BY-NC-SA 4.0 by default for anything
            else) and not feeding any of our content to ai models for training, learning
            or remembering, or exposing any of it in an environment in which this
            could happen.<br /><br />
            oreohive.org, this website, comes with
            <b>absolutely NO WARRANTY</b>, to the extent
            <b>permitted by applicable law</b>. <b>we are not liable</b>. get
            rekt
        </p>
    </div>
</div>
</div>

<style>
    .accept-button {
        margin: 48px;
    }
    .docs-note {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        margin: 0px;
        gap: 6px;
        padding: 12px;
        border-radius: 12px;
        border-width: 2px;
        border-style: solid;
        border-color: #ffffff;
        background-color: rgba(255, 255, 255, 0.2);
    }
    .svelte-notice {
        display: flex;
        align-items: center;
        border-radius: 12px;
        border-width: 1px;
        border-style: dashed;
    }
    img {
        vertical-align: middle;
        border-radius: 12px;
    }
    button:hover {
        color: #000000;
        background-color: #fff7ac;
        transform: scale(1.05);
        box-shadow: 8px 8px 64px 16px rgba(0, 0, 0, 0.2);
    }
    button {
        color: #5a5467;
        background-color: #ffebbc;
        border-style: dashed !important;
        border-width: 2.5px !important;
        border-color: #5a5467 !important;
        border-radius: 12px;
        border-style: none;
        padding: 12px;
        font-size: 1.5em;
        transition:
            transform 0.04s ease,
            box-shadow 0.1s ease;
        box-shadow: 0px 0px 32px 16px rgba(255, 218, 30, 0.2);
        max-width: 512px;
    }
</style>
