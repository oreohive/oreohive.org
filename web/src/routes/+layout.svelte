<!-- src/routes/+layout.svelte -->

<script lang="ts">
    import { browser } from '$app/environment';
    import { page } from '$app/stores';
    import { onMount } from 'svelte';

    let subdomain: string | null = null;

    $: {
        page.subscribe(value => {
            subdomain = value.data?.subdomain || null;
        });
    }

    onMount(() => {
        // client (+layout.svelte) checks local storage
        if (browser) {
            const accepted = localStorage.getItem('accepted_terms');

            // redirect if localStorage is missing and we're not on onboarding
            let currentPage = { url: { pathname: '' } };
            page.subscribe(value => {
                currentPage = value;
            });
            if (!accepted && currentPage.url.pathname !== '/onboarding') {
                window.location.href = '/onboarding';
            }
        }
    });

    export const prerender = false; // turn off prerendering globally (at least, for all files using this layout)
</script>

{#if subdomain === 'edu'}
    <p>edu.oreohive.org | you're on the edu subdomain!</p>
{:else if subdomain === 'labs'}
    <p>labs.oreohive.org | welcome to the labs subdomain!</p>
{:else}
    <p>oreohive.org | welcome to the main site! (no subdomain)</p>
{/if}

<div class="container">
    <slot></slot>
</div>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-family: Poppins, sans-serif;
    }
</style>
