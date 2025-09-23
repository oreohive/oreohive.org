<!-- src/routes/+layout.svelte -->

<!-- rewritten for Svelte 5! -->

<script lang="ts">
  import type { Snippet } from "svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { afterNavigate } from "$app/navigation";
  import Footer from "$components/Footer.svelte";
  import Navbar from "$components/Navbar.svelte";

  // define children and named snippets as props
  let { children } = $props();

  // rune for navbar height
  let navHeight = $state(0);

  // rune for whether or not other music is playing
  let isOtherMusicPlaying = $state(false);


  // element bind for navbar
  let navbar: HTMLElement;

  // reactive block for side effects
  $effect(() => {
    // runs when 'navbar' rune changes
    if (navbar) {
      navHeight = navbar.offsetHeight;
    }
  });

  // checking for playing audio
  function checkAudioState() {
    const audios = document.querySelectorAll("audio:not(.home-audio")
    isOtherMusicPlaying = Array.from(audios).some((a) => {
    // Assert that 'a' is an HTMLMediaElement
    const audioEl = a as HTMLMediaElement;
    return !audioEl.paused && !audioEl.ended;
    });
  };

  // afterNavigate for checks after successful navigation
  afterNavigate(() => {
    if (!browser) return;
  
    const accepted = localStorage.getItem("accepted_terms");
    const path = page.url.pathname;
    const skip = ["/onboarding", "/edu", "/studies", "/thegoodinternet"];
    if (!accepted && !skip.some((p) => path.startsWith(p))) {
      window.location.href = `onboarding?redirect=${encodeURIComponent(path)}`;
    }
    
    // call audio check function after navigation
    checkAudioState();
  });

  // use onMount for initial setup
  onMount(() => {
    const handleAudioEvent = () => checkAudioState();
    ["play", "pause", "ended"].forEach((evt) => {
      document.removeEventListener(evt, handleAudioEvent, true);
    });

    return () => {
      ["play", "pause", "ended"].forEach((evt) => {
        document.removeEventListener(evt, handleAudioEvent, true);
      });
    };
  });

</script>

<div bind:this={navbar}>
  <Navbar />
</div>

<div class="content-wrapper" style="padding-top: {navHeight}px;">
  {@render children()}
</div>

<Footer />