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
    <p><a href="https://oreohive.org">oreohive.org</a>&nbsp;| welcome to the main site! (no subdomain)</p>


{/if}

<style>
    p {
        display: flex;
        flex-direction: row;

        align-items: flex-start;
        align-self: flex-start;
        justify-content: flex-start;
        justify-self: flex-start;
        text-align: left;

        font-size: 0.8rem;
        font-weight: 600;
        color: #fcfcff;
        font-family: Poppins, sans-serif
    }
    a {
        display: inline;
        
        align-items: flex-start;
        align-self: flex-start;
        justify-content: flex-start;
        justify-self: flex-start;
        text-align: left;

        font-size: inherit;
        font-weight: inherit;
        color: inherit;
    }
</style>