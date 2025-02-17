<!-- src/routes/+layout.svelte -->

<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { onMount } from "svelte";
    import Navbar from "$components/Navbar.svelte";

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

<div class="container">
    <slot></slot>
</div>

<style global>
    * {
        display: flex;
	    flex-direction: column;
	    font-family: Poppins, sans-serif;
	    border-radius: 12px;
        margin: 0px;
        padding: 0px;
        gap: 0px;
        max-width: 100vw;

    }
    .container {
        display: flex;
        flex-direction: column;
        font-family: Poppins, sans-serif;
    }
</style>