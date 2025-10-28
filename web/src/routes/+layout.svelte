<!-- src/routes/+layout.svelte -->

<script lang="ts">
        import { browser } from "$app/environment";
        import { page, navigating, updated } from "$app/state";
        import { onMount, onDestroy } from "svelte";
        import { beforeNavigate, afterNavigate } from "$app/navigation";
        import Navbar from "$components/Navbar.svelte";
        import Footer from "$components/Footer.svelte";
        import SettingsWidget from "$components/SettingsWidget.svelte";
        import { injectAnalytics } from "@vercel/analytics/sveltekit";

        let navHeight = 0;
        let isOtherMusicPlaying = false;

        function updateNavbarHeight() {
                const navEl = document.querySelector(".navbar") as HTMLElement;
                if (navEl) {
                        /* console.log('updateNavbarHeight() fired!'); */
                        navHeight = navEl.offsetHeight ?? 0;
                        /* console.log("navHeight:", navHeight); */
                }
        }

        function checkOtherMusicPlaying() {
                const audios = document.querySelectorAll(
                        "audio:not(.home-audio)"
                );
                isOtherMusicPlaying = Array.from(audios).some(
                        (a) => !a.paused && !a.ended
                );
        }

        function ensureAccepted() {
                if (!browser) return;
                const accepted = localStorage.getItem("accepted_terms");
                const path = page.url.pathname;
                const skip = [
                        "/onboarding",
                        "/edu",
                        "/studies",
                        "/thegoodinternet",
                ];
                if (!accepted && !skip.some((p) => path.startsWith(p))) {
                        window.location.href = `/onboarding?redirect=${encodeURIComponent(path)}`;
                }
        }

        onMount(() => {
                // initial stuff
                updateNavbarHeight();
                checkOtherMusicPlaying();
                ensureAccepted();

                // resize watchman
                window.addEventListener("resize", updateNavbarHeight);

                // audio watchman
                ["play", "pause", "ended"].forEach((evt) =>
                        document.addEventListener(
                                evt,
                                checkOtherMusicPlaying,
                                true
                        )
                );

                // hook into nav
                beforeNavigate(() => {
                        ensureAccepted();
                        checkOtherMusicPlaying();
                });
                afterNavigate(() => {
                        ensureAccepted();
                        checkOtherMusicPlaying();
                        updateNavbarHeight();
                });

                onDestroy(() => {
                        window.removeEventListener(
                                "resize",
                                updateNavbarHeight
                        );
                        ["play", "pause", "ended"].forEach((evt) =>
                                document.removeEventListener(
                                        evt,
                                        checkOtherMusicPlaying,
                                        true
                                )
                        );
                });
        });

        // Vercel analytics
        injectAnalytics();
</script>

<div>
        <Navbar />
</div>

<div class="content" style="padding-top: {navHeight}px;">
        <slot />
</div>

<SettingsWidget />

<Footer>
        <slot name="footer" />
</Footer>
