<!-- src/routes/+layout.svelte -->

<script lang="ts">
        import { browser } from '$app/environment';
        import { page } from '$app/state';
        import { onMount } from 'svelte';

        onMount(() => {
                // client (+layout.svelte) checks local storage
                if (browser) {
                        const accepted = localStorage.getItem('accepted_terms');

                        // redirect if localStorage is missing and we're not on onboarding
                        if (!accepted && page.url.pathname !== '/onboarding') {
                                window.location.href = '/onboarding';
                        }
                }
        });
</script>

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
