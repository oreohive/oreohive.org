<!-- src/routes/+layout.svelte -->

<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Navbar from "$components/Navbar.svelte";
  import Footer from "$components/Footer.svelte";

  onMount(() => {
    // client (+layout.svelte) checks local storage
    if (browser) {
      const accepted = localStorage.getItem("accepted_terms");

      // redirect if localStorage is missing and we're not on onboarding
      let currentPage = { url: { pathname: "" } };
      page.subscribe((value) => {
        currentPage = value;
      });
      if (!accepted && currentPage.url.pathname !== "/onboarding") {
        window.location.href = "/onboarding";
      }
    }
  });
</script>

<Navbar />
<slot />
<Footer />

<style global>
  * {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    gap: 0px;
    word-break: break-word !important;
    white-space: normal !important;
    border-radius: 12px;
    font-family: Poppins, sans-serif;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    max-width: 480px;
    margin-top: 64px;
    margin-bottom: 6px;
    margin-left: 48px;
    margin-right: 48px;
    padding: 0px;
    gap: 0px;

    word-break: break-word !important;
    white-space: normal !important;
  }

  :global(p, ul, ol, li) {
    border-radius: 12px;
    border-width: 1px;
    border-style: dashed;
    font-size: 0.95em;
    font-family: Poppins, sans-serif;
    max-width: 480px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 6px;
    margin-right: 6px;
    padding: 10px;
    word-break: break-word !important;
    white-space: normal !important;
  }

  :global(.container) {
    /* for centring and positioning centre-container */
    display: flex;
    flex-direction: column;
    align-items: center !important;
    justify-items: center !important;
    align-content: center !important;
    justify-content: center !important;
  }

  :global(.centre-container) {
    /* sits within container */
    display: flex;
    flex-direction: column;
    max-width: 1080px;
    min-width: 720px;
    min-height: 360px;
    align-items: center !important;
    justify-items: center !important;
    align-content: center !important;
    justify-content: center !important;

    margin-top: 32px;
    margin-bottom: 64px;
    margin-left: 0px;
    margin-right: 0px;
    padding-top: 16px;
    padding-bottom: 16px;
    padding-left: -48px;
    padding-right: -48px;

    border-width: 3px;
    border-style: dashed;
    border-color: #5a5467;
    border-radius: 12px;
    font-family: Poppins, sans-serif;
  }

  /* inverted styles for dark mode */
  :global(.dark body) {
    /* container but for dark theme */
    background: #1a1a1a !important;
    color: #ffffff;
  }
  :global(.dark p, .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6) {
    /* @css-ignore */
    color: #ffffff;
  }
  :global(.dark .text-box) {
    /* text-box but for dark theme */
    background-color: #2a2a2a !important;
    color: #f5f5f5;
    box-shadow: 8px 8px 24px 12px rgba(255, 255, 255, 0.05);
  }
  :global(.dark .container) {
    /* container but for dark theme */
    background-color: #121212;
    color: #f5f5f5;
  }

  :global(a) {
    color: #ffbcd4;
    text-decoration: underline dashed #ffffff;
  }
</style>
