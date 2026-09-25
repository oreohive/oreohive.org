<!-- src/routes/onboarding/+page.svelte -->

<script>
  import {browser} from "$app/environment";
  import {onMount} from "svelte";
  import SeamlessAudio from "$lib/SeamlessAudio.svelte";

  let isMusicPlaying = false; // state to control audio loop
  let redirectTo = "/";
  let redirectToCleaned = "";
  isMusicPlaying = false;

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
      isMusicPlaying = true;

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
  <meta name="description" content="oreohive.org/onboarding - You don't sign your soul away by using our stuff, don't worry." />
</svelte:head>

<div class="container">
  <div data-tap-disabled="true">
    <SeamlessAudio src="/music/obligato-factory-v2.0.ogg" bind:isPlaying={isMusicPlaying} volume={0.5} />
  </div>

  <div style="display: flex; flex-direction: column; flex-wrap: nowrap; min-height: 30vw; max-width: 69%;">
    <!-- don't give this a height or max-height lol -->
    <h1>Welcome to oreohive.org!</h1>
    <p>
      Accept that this is given to you under the <b>oreohive Source No-AI-Training License</b>, and agree to cookies:
    </p>

    <form on:submit={accept_locally}>
      <div style="gap: 16px;">
        <button type="submit" name="accept">I agree</button>

        <p style="max-width: fit-content; font-size: 0.75em; padding: 12px; margin-top: 32px;"> You may need to review and accept updates in the future. </p>
      </div>
    </form>

    <div class="docs-note">
      <a href="https://github.com/oreohive/source/blob/main/LICENSE" target="_blank">oreohive Source No-AI-Training License (most recent)</a>
      <p style="font-size: 0.675em; max-width: 40vw;">
        You can still visit oreohive.org/onboarding later, at which you may check for later revisions which may apply to you. We advise that you routinely do this.
        You can only use any of our (the oreohive organisation's) services, sites, software, products, or experiences for any purpose, ever, in any
        circumstance, if you agree that you understand, have read, and will honour our oreohive Source No-AI-Training License. In using, interacting with,
        utilising, downloading, sending content or requests to, or otherwise manipulating or leveraging our products, services, software, APIs or experiences,
        you receive this with (under) our oreohive Source No-AI-Training License of most recent publishing. oreohive.org, this website, comes with
        <b>absolutely NO WARRANTY</b>
        , to the extent
        <b>permitted by applicable law</b>
        .
        <b>We are not liable</b>
        . Get rekt.
      </p>
    </div>
  </div>
</div>

<style>
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
  button:hover {
    color: #000000;
    background-color: #fff7ac;
    transform: scale(1.05);
    box-shadow: 8px 8px 64px 16px rgba(0, 0, 0, 0.2);
  }
  button {
    color: #5a5467;
    background-color: #ffebbc;
    border-radius: 12px;
    border-style: none;
    padding: 12px;
    font-size: 1.25em;
    transition:
      transform 0.04s ease,
      box-shadow 0.1s ease;
    box-shadow: 0px 0px 32px 16px rgba(255, 218, 30, 0.2);
    max-width: 480px;
  }
</style>
