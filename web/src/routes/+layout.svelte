<!-- src/routes/+layout.svelte -->

<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/state";
  import { onMount } from "svelte";
  import Navbar from "$components/Navbar.svelte";
  import Footer from "$components/Footer.svelte";
  import FullPageTitle from "$components/FullPageTitle.svelte";
  import KofiButton from "$components/KofiButton.svelte";
  import ConnectionsDisplay from "$components/ConnectionsDisplay.svelte";

  onMount(() => {
    // client (+layout.svelte) checks local storage
    if (browser) {
      const accepted = localStorage.getItem("accepted_terms");
 
      // check if current path starts with '/onboarding'
      const isOnOnboardingPath = page.url.pathname.startsWith("/onboarding");

      // redirect if localStorage is missing and we're not on onboarding
      if (!accepted && !isOnOnboardingPath) {
        const currentUrl = encodeURIComponent(page.url.href);
        window.location.href = `/onboarding?redirect=${currentUrl}`; // redirect to onboarding with current (previous) page as a query parameter
      }
    }
  });
  export const prerender = false;
  export const ssr = true
  export const trailingSlash = "never";
</script>

<Navbar />
<slot />
<Footer />