<script lang="ts">
    import { onMount } from "svelte";
    import { page } from "$app/state";
    import { beforeNavigate, afterNavigate, } from "$app/navigation";
    import { settings } from '$lib/globalState.svelte'; // settings object

    // local state for widget
    let widgetIsOpen = false;

    // use localStorage to make settings persistent across sessions

    onMount(() => {
        const stored = localStorage.getItem("sfxEnabled");
        if (stored !== null) {
            settings.sfxEnabled = stored === "true";
        }
    });

    // toggle widget open / closed in bottom right
    function toggleWidget(event: MouseEvent) {
        event.stopPropagation();
        widgetIsOpen = !widgetIsOpen;
    }

    function toggleSetting(
        settingKey: keyof typeof settings,
        event: MouseEvent,
    ) {
        event.stopPropagation();
        settings[settingKey] = !settings[settingKey];
        localStorage.setItem(settingKey, settings[settingKey].toString());
    }

    beforeNavigate (() => {
        currentRoute = page.url.pathname;
    });
    afterNavigate (() => {
        currentRoute = page.url.pathname;
    });

    // determine if we should show toggles based on current route ($page.url.pathname)
    $: currentRoute = page.url.pathname;
    $: showSfxSetting = currentRoute.includes(
        "edu/a-level/english-lit/texts/je/activities/quotesquery",
    );
    $: hasSettings = showSfxSetting;
    
    export { settings };
</script>

{#if hasSettings}
<div class="settings-widget">
    {#if widgetIsOpen}
        <div class="widget-content" on:click|stopPropagation>
            <h3>Settings</h3>
            {#if showSfxSetting}
                <div class="setting-item">
                    <label>
                        <input
                            type="checkbox"
                            bind:checked={settings.sfxEnabled}
                            on:click={(e) => toggleSetting("sfxEnabled", e)}
                        />
                        Silly sounds
                    </label>
                </div>
            {/if}
        </div>
    {/if}
    <button class="toggle-btn" on:click={toggleWidget}>
        {#if widgetIsOpen}close Settings{:else}Settings{/if}
    </button>
</div>
{/if}

<style>
    .settings-widget {
        position: fixed;
        bottom: 1em;
        right: 1em;
        z-index: 1000;
        font-family: sans-serif;
    }
    .widget-content {
        padding: 5em;
        margin-bottom: 0.5em;
        border: 1px solid #ccc;
        border-radius: 16px;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
    }
    .toggle-btn {
        background: #ffebbc;
        color: #5a5467;
        border: none;
        padding: 0.5em 1em;
        border-radius: 16px;
        cursor: pointer;
    }
    .toggle-btn:hover {
        background: #fff7ac;
    }
    .setting-item {
        margin-bottom: 0.5em;
    }
</style>
