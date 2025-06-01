<!-- src/components/WelcomeMsg.svelte -->

<!-- this component is used only in the navbar
it's the central message that pops up indicating current subdomain
(currently irrelevant but still good for testing and future) -->

<script lang="ts">
    import { browser } from "$app/environment";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    let subdomain: string | null = null;
    console.log("subdomain =", subdomain);

    $: {
        page.subscribe((value) => {
            subdomain = value.data?.subdomain || null;
        });
    }
</script>


{#if subdomain === "edu"}
    <p>edu.oreohive.org | you're on the edu subdomain!</p>
{:else if subdomain === "labs"}
    <p>labs.oreohive.org | welcome to the labs subdomain!</p>
{:else}
    <p class="navbar-msg"><a href="https://www.oreohive.org"><b>check us out</b>! we're all dressed up for <b>pride month</b>!</p>
{/if}

<style>
    p {
        display: flex;
        align-items: center;
        align-self: center; /* important! :) */
        justify-content: center;
        justify-self: center;
        text-align: center;

        font-size: 0.8rem;
        font-weight: 400;
        color: #beb7cc !important; /* !important prevents dark mode overruling to white lol */
        font-family: Poppins, sans-serif
    }
    a {
        display: inline;
        
        align-items: center;
        align-self: center;
        justify-content: center;
        justify-self: center;
        text-align: center;
        word-break: normal;

        font-size: inherit;
        font-weight: inherit;
        color: inherit;
    }

    .navbar-msg {
        /* some styles of p have been discontinued in p's refinement
        this is a place for those style choices to continue to be established
        on messages specifically in the navbar */
        border-style: none;
        border-width: 0px;
        border-color: #585266;
        padding: 10px;
    }
</style>
