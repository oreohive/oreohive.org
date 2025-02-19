<script lang="ts">
    export let img_url: string = '/logo.webp'; // a string for image / corner icon / logo url
    import WelcomeMsg from "./WelcomeMsg.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
</script>

<div class="navbar">
    <a href="https://oreohive.org">
        <div class="logo-background">
        <img src={img_url} alt="logo" style="width: 48px; height: 48px; border-radius: 50%;" />
        <!-- if this img is 48px tall, the navbar should take up 64px vertically at the top of the screen -->
        <!-- this is increased by the 12px of margin it has to 76px -->
        <!-- we factor this into the likes of fullpagetitle component configuration and use -->
        </div>
    </a>

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
</style>