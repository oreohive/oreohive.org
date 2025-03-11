<!-- src/routes/+layout.svelte -->

<script lang="ts">
  import { browser } from "$app/environment";
  import { page, navigating, updated } from "$app/state";
  import { onMount } from "svelte";
  import { beforeNavigate, afterNavigate } from "$app/navigation";
  import Navbar from "$components/Navbar.svelte";
  import Footer from "$components/Footer.svelte";
  import FullPageTitle from "$components/FullPageTitle.svelte";
  import KofiButton from "$components/KofiButton.svelte";
  import ConnectionsDisplay from "$components/ConnectionsDisplay.svelte";
  import { on } from "events";

  let isOtherMusicPlaying = false;
  function checkOtherMusicPlaying() {
        const audios = document.querySelectorAll("audio");
        isOtherMusicPlaying = Array.from(audios).some(audio => !audio.paused && !audio.ended && !audio.classList.contains("home-audio"));
  }

  onMount(() => {
    // client (+layout.svelte) checks local storage
    if (browser) {
      const accepted = localStorage.getItem("accepted_terms");
 
      // check if current path starts with '/onboarding'
      const isOnOnboardingPath = page.url.pathname.startsWith("/onboarding");

      // redirect if localStorage is missing and we're not on onboarding
      if (!accepted && !isOnOnboardingPath) {
        let currentUrl = page.url.pathname
        window.location.href = `/onboarding?redirect=${currentUrl}`; // redirect to onboarding with current (previous) page as a query parameter
      }
    }
  });
  export const ssr = true
  export const trailingSlash = "never";
  export const currentUrl = page.url.pathname;

  {onMount(() => {
    checkOtherMusicPlaying();
    document.addEventListener("play", checkOtherMusicPlaying, true);
    document.addEventListener("pause", checkOtherMusicPlaying, true);
    document.addEventListener("ended", checkOtherMusicPlaying, true);
  })}
  {beforeNavigate(() => {
    checkOtherMusicPlaying();
    document.addEventListener("play", checkOtherMusicPlaying, true);
    document.addEventListener("pause", checkOtherMusicPlaying, true);
    document.addEventListener("ended", checkOtherMusicPlaying, true);
  })}
  {afterNavigate(() => {
    checkOtherMusicPlaying();
    document.addEventListener("play", checkOtherMusicPlaying, true);
    document.addEventListener("pause", checkOtherMusicPlaying, true);
    document.addEventListener("ended", checkOtherMusicPlaying, true);
  })}
</script>

<Navbar />

<div data-tap-disabled="true" >
{#if !isOtherMusicPlaying}
<audio class="home-audio" loop autoplay hidden>
<source src="/music/oreohive.org-the-good-internet-dec-2024.mp3" type="audio/mpeg">your browser does not support the audio element.</audio>
{/if}
</div>

<slot />
<Footer />