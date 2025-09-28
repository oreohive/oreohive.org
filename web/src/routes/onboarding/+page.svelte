<!-- src/routes/onboarding/+page.svelte -->

<script>
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
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
  <meta
    name="description"
    content="oreohive.org/onboarding - You don't sign your soul away by using our stuff, don't worry."
  />
</svelte:head>

<div class="container">
  <h1 style="margin-top: 64px;">Welcome to oreohive.org!</h1>
  <p>Click on this fat button to begin:</p>

  <div data-tap-disabled="true">
    <SeamlessAudio
      src="/music/obligato-factory-v1.1.ogg"
      bind:isPlaying={isMusicPlaying}
      volume={0.5}
    />
  </div>

  <div
    style="display: flex; flex-direction: column; flex-wrap: wrap; min-height: 45vh; align-items: center; justify-content: center;"
  >
    <div
      style="position: relative; min-height: 20vw; max-width: 90%; display: flex; flex-wrap: nowrap; align-items: center; gap: 32px;"
    >
      <!-- don't give this a height or max-height lol -->
      <form on:submit={accept_locally}>
        <div style="gap: 16px;">
          <button type="submit" name="accept">
            I acknowledge that all of this is given to me under the <b
              >oreohive Source No-AI-Training License</b
            >, and agree to the use of <b>cookies</b> :)
          </button>

          <div
            style="margin-top: 16px; gap: 0px; display: flex; flex-direction: row;"
          >
            <p style="color: #ff0059;">You'll be taken here:&nbsp</p>
            <p>oreohive.org{redirectToCleaned}</p>
          </div>

          <p
            style="max-width: fit-content; font-size: 0.9em; padding: 12px; margin-top: 32px; border-style: dashed; border-width: 1.25px;"
          >
            NB! You may need to review and accept updates in the future.
          </p>
        </div>
      </form>
    </div>

    <div class="docs-note">
      <a href="/source-license/v0.1" target="_blank"
        >oreohive Source No-AI-Training License v0.1</a
      >
      <p style="font-size: 0.675em; max-width: 40vw;">
        Once you've accepted, you can still access oreohive.org/onboarding
        later, at which you may check for later revisions or updated
        publications which may apply to you. We advise you routinely do this.<br
        /><br />
        You can only use any of our (the oreohive organisation's) services, sites,
        software, products, or experiences for any purpose, ever, in any circumstance,
        if you agree that you understand, have read, and will honour our oreohive
        Source No-AI-Training License.
        <br />In using, interacting with, utilising, downloading, sending
        content or requests to, or otherwise manipulating or leveraging our
        products, services, software, apis or experiences, you receive this with
        (under) our oreohive Source No-AI-Training License of most recent
        publishing.<br /><br />
        oreohive.org, this website, comes with
        <b>absolutely NO WARRANTY</b>, to the extent
        <b>permitted by applicable law</b>. <b>we are not liable</b>. get rekt
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
