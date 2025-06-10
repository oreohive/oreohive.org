<!-- src/components/Navbar.svelte -->

<!-- this component is used for the navbar at the top of the screen
it contains the logo, welcome message, and theme toggle switch
currently little actual navigation going on but maybe soon enough we might throw some quick links up here lol -->

<script lang="ts">
    export let img_url: string = "/logo.webp"; // a string for image / corner icon / logo url
    import WelcomeMsg from "./WelcomeMsg.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    function navigateToHome() {
        window.location.href = "/";
    }
</script>

<div class="navbar">
    <div class="left links" style="align-self: center; justify-content: flex-start;">
        <div class="entries">
            <a href="/" style="width: auto;">
                <!-- ignore width assigned to a elements -->
                <div class="logo-background">
                    <img
                        src={img_url}
                        alt="logo"
                        style="width: 48px; height: 48px; border-radius: 50%;"
                    />
                    <!-- we factor this (or, specifically, subsequent navbar height) into the likes of fullpagetitle component configuration and use -->
                </div>
            </a>
            <button on:click={history.back()}>&lt;- back</button>
            <button on:click={navigateToHome}>go home!</button>
            <a href="/activity-log">blog</a>
            <a href="/sliceydicey">tools</a>
            <a href="/about">about</a>
        </div>
    </div>
    <WelcomeMsg />
    <div class="right links" style="align-self: center; justify-content: flex-end;">
        <div class="entries">
            <a href="https://github.com/oreohive/oreohive.org"><img src="/icons/github/github-mark-white.svg" style="height: 32px; width: 32px;"></a>
            <a href="https://ko-fi.com/oreohive"><img src="/icons/ko-fi/kofi_symbol.svg" style="height: 32px; width: 32px;"></a>
            <a href="https://liberapay.com/oreohive"><img src="/icons/liberapay/liberapay_logo_white.svg" style="height: 32px; width: 32px;"></a>
            <ThemeToggle />
        </div>
    </div>

    <slot />
</div>

<style>
    .navbar {
        width: 100%;
        display: flex;
        position: fixed;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        align-self: center;
        justify-content: space-between;
        justify-self: center;
        margin: 0px 0px 0px 0px;
        padding: 0px;
        gap: 0px;
        z-index: 99;

        background-color: #5a5467;
        background-image: linear-gradient(315deg, #5a5a5a 0%, #5a5467 50%);
        color: #5a5467;
        border-radius: 0px 0px 6px 6px;
        box-shadow: 8px 8px 24px 4px rgba(0, 0, 0, 0.075);
    }
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: space-between;
        flex-wrap: wrap;
        gap: 8px;
        min-width: 30vw; /* ensures that WelcomeMsg remains centred when between the two links elements without wrapping :) */
    }
    .entries {
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
        flex-direction: row;
        gap: 4px;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        border-style: none;
        border-width: 0px;
        border-color: #585266;
        border-radius: 12px;
    }

    a,
    button {
        display: flex !important;
        margin: 0px;
        gap: 0px;
        padding: 0px; /* ensures text fully saturates available space inside buttons before overflowing */
        padding-block: 0px;
        align-self: center;
        justify-self: center;
        align-items: center;
        justify-content: center;
        font-family: Poppins, sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        width: auto;
        height: 32px !important; /* to match logo-background element */
        text-align: center;
        text-decoration: none;
        flex-wrap: nowrap;
        overflow: hidden;
        box-sizing: unset !important; /* removes discrepancy in height between buttons and a elements */
        
        align-items: center;
        align-content: center; /* horizontally centres text (on buttons and links) */
        justify-items: center;
        justify-content: center;
        background-color: rgba(0, 0, 0, 0.075);
        border-width: 4px !important;
        border-color: rgba(0, 0, 0, 0.075) !important;
        border-style: solid !important;
        border-radius: 12% !important;
        color: #beb7cc;
    }
    a :hover {
        color: #fff !important;
    }
    img {
        border-radius: 2px !important; /* avoid cropping icons of buttons */
        width: 32px !important;
        height: 32px !important;
    }
    :global(.logo-background) {
        display: flex;
        align-items: center;
        justify-content: center; /* quite important lol; makes image go skew-whiff if this is unset */
        width: 32px !important;
        height: 32px !important;
        border-radius: 12%;
        background-color: #ffebbc;
        margin: 0px;
    }
</style>
