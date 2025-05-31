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
    <div class="left links">
        <a href="/" style="width: auto;">
            <!-- ignore width assigned to a elements -->
            <div class="logo-background">
                <img
                    src={img_url}
                    alt="logo"
                    style="width: 48px; height: auto; border-radius: 50%;"
                />
                <!-- we factor this (or, specifically, subsequent navbar height) into the likes of fullpagetitle component configuration and use -->
            </div>
        </a>
        <button on:click={history.back()}>&lt;- back</button>
        <button on:click={navigateToHome}>go home!</button>
        <div class="entries">
            <a href="/activity-log">blog</a>
            <a href="/sliceydicey">tools</a>
            <a href="/about">about</a>
        </div>
    </div>

    <WelcomeMsg />

    <div class="right links">
        <div class="entries">
            <a href="https://github.com/oreohive/oreohive.org">github</a>
            <a href="https://ko-fi.com/oreohive">ko-fi</a>
            <a href="https://liberapay.com/oreohive">liberapay</a>
        </div>
        <ThemeToggle />
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
    .logo-background {
        display: flex;
        align-items: center;
        justify-content: center; /* quite important lol; makes image go skew-whiff if this is unset */
        width: 32px;
        height: 32px;
        border-radius: 12%;
        background-color: #ffebbc;
        margin: 0px;
    }
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: space-between;
        gap: 8px;
        width: 35%;
    }

    a,
    button {
        margin: 0px;
        gap: 0px;
        font-family: Poppins, sans-serif;
        font-size: 0.8rem;
        font-weight: 300;
        width: 91.5px;
        text-align: center;
        text-decoration: none;
        background-color: rgba(0, 0, 0, 0.075);
        border-width: 2px !important;
        border-color: rgba(0, 0, 0, 0.075) !important;
        border-style: solid !important;
        color: #beb7cc;
        border-radius: 6px;
    }
    a :hover {
        color: #fff !important;
    }
    .entries {
        font-size: 0.8rem;
        font-weight: 600;
        display: flex;
        flex-direction: row;
        gap: 4px;
        justify-content: space-between;
        align-content: space-between;
        border-style: dashed;
        border-width: 1px;
        border-color: #585266;
        border-radius: 12px;
    }
</style>
