<!-- src/components/Navbar.svelte -->

<!-- this component is used for the navbar at the top of the screen
it contains the logo, welcome message, and theme toggle switch
currently little actual navigation going on but maybe soon enough we might throw some quick links up here lol -->

<script lang="ts">
    export let img_url: string = '/logo.webp'; // a string for image / corner icon / logo url
    import WelcomeMsg from "./WelcomeMsg.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    function navigateToHome() {
        window.location.href = 'https://www.oreohive.org';
    }
</script>

<div class="navbar">
    <div class="left links">
        <a href="https://www.oreohive.org">
            <div class="logo-background">
            <img src={img_url} alt="logo" style="width: 48px; height: 48px; border-radius: 50%;" />
            <!-- if this img is 48px tall, the navbar should take up 64px vertically at the top of the screen -->
            <!-- this is increased by the 12px of margin it has to 76px -->
            <!-- we factor this into the likes of fullpagetitle component configuration and use -->
            </div>
        </a>
        <button on:click={navigateToHome}>go home!</button>
    </div>
    <div style="font-size: 0.8rem; font-weight: 600; width: 19vw; display: flex; flex-direction: row; flex-wrap: wrap; gap: 14px; justify-content: space-between; align-content: center; border-style: dashed; border-width: 1px; border-color: white; border-radius: 12px; padding: 10px;">
            <a href="/activity-log">activity log</a>
            <a href="/sliceydicey">tools</a>
            <a href="/about">about</a>
    </div>
    

    <WelcomeMsg />
    <div style="font-size: 0.8rem; font-weight: 600; width: 19vw; display: flex; flex-direction: row; flex-wrap: wrap; gap: 14px; justify-content: space-between; align-content: center; border-style: dashed; border-width: 1px; border-color: white; border-radius: 12px; padding: 10px;">
            <a href="https://github.com/oreohive/oreohive.org">github</a>
            <a href="https://ko-fi.com/oreohive">ko-fi</a>
            <a href="https://liberapay.com/oreohive">liberapay</a>
            <a href="https://tumblr.com/oreohive">tumblr</a>
    </div>
    <div class="right links">
    <ThemeToggle />margin-left: 16px;
    </div>

    <slot />
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: -8px 0px 0px 0px;
        gap: 4px;
        padding: 8px;
        z-index: 1;

        background-color: #5a5467;
        color: #5a5467;
        border-radius: 0px 0px 12px 12px;
        box-shadow: 8px 8px 24px 4px rgba(0, 0, 0, 0.075);
        width: 100;
    }
    .logo-background {
        display: flex;
        align-items: center;
        border-radius: 12%;
        background-color: #fff;
        margin: 0px;
    }
    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        width: 180px; /* consistent width across both left links and right links ensures main central WelcomeMsg is centred */
    }
    a {
        margin: 0px;
        padding: 0px;
        gap: 0px;
        font-family: Poppins, sans-serif;
        text-decoration: none;
        color: #fff;
        text-wrap: nowrap;
    }
</style>