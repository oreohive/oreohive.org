<!-- src/routes/+layout.svelte -->

<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import Navbar from "$components/Navbar.svelte";
  import Footer from "$components/Footer.svelte";
  import FullPageTitle from "$components/FullPageTitle.svelte";

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
  :global(html) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }

  :global(.container) {
    /* for centring and positioning centre-container */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: Poppins, sans-serif;
    width: 100vw;
    min-height: fit-content;
  }

  :global(.centre-container) {
    /* sits within container */
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 32px;
    margin-bottom: 32px;
    padding-top: 16px;
    padding-bottom: 16px;

    border-width: 3px;
    border-style: dashed;
    border-color: #5a5467;
    border-radius: 12px;
    font-family: Poppins, sans-serif;
    min-height: fit-content;
    max-width: 720px;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    flex-direction: column;
    align-items: center;
    justify-items: center;
    align-content: center;
    justify-content: center;
    max-width: 480px;
    margin-top: 12px;
    margin-bottom: 0px;
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
    font-family: Poppins, sans-serif;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 6px;
    margin-right: 6px;
    padding: 10px;
  }

  /* inverted styles for dark mode */
  :global(.dark body) {
    /* container but for dark theme */
    background: #1a1a1a !important;
    color: #ffffff;
  }
  :global(.dark p, .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6) {
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
    color: #df5f8c;
    text-decoration: underline dashed #ffffff;
  }

  :global(img) {
    float: left;
    max-width: 256px;
    max-height: 256px;
    object-fit: cover;
    background-size: cover;
  }

  :global(.dark .navbar) {
        background-color: #362729;
    }
</style>
