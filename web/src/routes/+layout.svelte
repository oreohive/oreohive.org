<!-- src/routes/+layout.svelte -->

<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import ThemeToggle from "$components/ThemeToggle.svelte";

    let subdomain: string | null = null;
    console.log("subdomain =", subdomain);

    $: {
        page.subscribe((value) => {
            subdomain = value.data?.subdomain || null;
        });
    }

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

<ThemeToggle />

{#if subdomain === "edu"}
    <p>edu.oreohive.org | you're on the edu subdomain!</p>
{:else if subdomain === "labs"}
    <p>labs.oreohive.org | welcome to the labs subdomain!</p>
{:else}
<span>
<p style="
  font-weight: 300; 
  font-size: 0.8rem; 
  display: flex; 
  flex-direction: row; 
  align-items: flex-start;
  align-self: flex-start;
  justify-content: flex-start;
  justify-self: flex-start;
  text-align: left;
">
  <a href="https://oreohive.org" style="
    display: inline; 
    font-weight: inherit; 
    font-size: inherit; 
    color: inherit;
    align-items: flex-start;
    align-self: flex-start;
    justify-content: flex-start;
    justify-self: flex-start;
    text-align: left;

  ">oreohive.org</a>&nbsp;| welcome to the main site! (no subdomain)
</p>
</span>

{/if}

<div class="container">
    <slot></slot>
</div>

<style global>
    * {
        display: flex;
	    flex-direction: column;
	    align-items: left;
	    align-self: center;
	    justify-content: left;
	    justify-self: center;
	    font-family: Poppins, sans-serif;
	    border-radius: 12px;
        margin: 0px;
        padding: 0px;
        gap: 0px;

    }
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Poppins, sans-serif;
    }
    .text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
        justify-content: flex-start;
        justify-self: center;
        font-family: Poppins, sans-serif;
        background-color: #fcfcff;
        border-radius: 12px;
        box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
        max-width: 50vw !important;
    }

    /* inverted styles for dark mode */
    .dark * {
        background-color: #1a1a1a !important; 
    }

    .dark p, .dark a, .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6,
    .dark .text-box {
        display: inline;
	    font-weight: inherit;
	    font-size: inherit;
	    color: inherit;
        background-color: #2a2a2a !important;
        color: #f5f5f5 !important; // text lol
        box-shadow: 8px 8px 24px 12px rgba(255, 255, 255, 0.05);
    }
</style>
