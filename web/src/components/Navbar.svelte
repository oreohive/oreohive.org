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
    <div class="links">
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
    

    <WelcomeMsg />
    <ThemeToggle />

    <slot />
</div>

<style>
    .navbar {
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;
        justify-content: space-between;
        gap: 4px;
        padding: 8px;
        z-index: 1;

        background-color: #5a5467;
        color: #5a5467;
        border-radius: 12px;
        box-shadow: 8px 8px 24px 4px rgba(0, 0, 0, 0.075);
    }

    .logo-background {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 12%;
        background-color: #fff;
    }

    .links{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
    }
</style>