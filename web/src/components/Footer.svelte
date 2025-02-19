<!-- src/components/Footer.svelte -->

<script lang="ts">
    export let img_url: string = '/logo.webp'; // a string for image / corner icon / logo url
    import WelcomeMsg from "./WelcomeMsg.svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
</script>

<div class="footer">
    <a href="https://ko-fi.com/oreohive">
        <div class="logo-background">
        <img src={img_url} alt="logo" style="width: 96px; height: 96px; border-radius: 0%;" />
        </div>
    </a>
    <div class="footer-message">
    <p style="font-size: 0.75em; color: #ffebbc;">copyleft 2025 <a href="https://github.com/oreohive" target=”_blank”>the oreohive organisation</a> @ oreohive.org  |  attributions are required!</p>
    <p>in using, accessing, engaging with, contributing to or connecting to this website, you agree to our <a href="/onboarding" target=”_blank”>terms & ethics of use</a>.</p>
    <p>this strictly prohibits the use of any of our software, services, products, platforms, experiences, assets or resources (including modified, derivative works, or works deriving from / utilising resources from us or our works) for the purpose of training or improving machine learning or 'ai' algorithms, including but not limited to artificial intelligence (models), natural language processing (models), data mining or large language (models).
        this condition applies to any derivatives, modifications, or updates based on our code, works, assets or resources.</p>
    <p>any usage of this software or any of our assets, code, resources or works in any ai-training dataset is cconsidered a breach of our terms & ethics of use, thus a breach of the license upon which you use our software, services, products or experiences in any capacity
        our works may not be included in any dataset used for training or improving machine learning algorithms, including but not limited to artificial intelligence, natural language processing, or data mining.</p>
    <p>any person, organisation, entity or party found to be in violation of these restrictions will be subject to legal action, and may be held liable for any damages (we may perceive) resulting from such use.</p>
    <p>please refer to our terms & ethics of use for more information. we appreciate your cooperation and understanding.</p>
    
    <p style="font-size: 1.25em;">all our code is licensed (by default) under the <a href="https://www.gnu.org/licenses/agpl-3.0.en.html#license-text" target=”_blank”>GNU AGPL-3.0</a>. all our other works, by default, are licensed under <a href="https://creativecommons.org/licenses/by-nc-sa/4.0" target=”_blank”>CC BY-NC-SA 4.0</a>!</p>
    </div>
    
    <p>made with &lt;3 by <a href="https://github.com/dopreo" target=”_blank”>a kid in the UK</a></p>
    <slot />
</div>

<style>
    .footer{
        display: flex;
        flex-direction: row;
        align-self: center;
        align-items: center;
        justify-content: space-between;
        z-index: 1;
        padding: 24px;
        margin: -8px !important;
        gap: 0px !important;

        background-color: #5a5a5a;
        color: #ece4ff;
        border-radius: 6px 6px 0px 0px;
    }

    .footer-message p {
        max-width: 200vw !important;
        width: 1440px;
        border-style: none;
        margin: 0px;
        gap: 0px;
        padding: 4px;
        font-size: 0.5em;
    }

    .logo-background {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffebbc;
        padding: 6px;
        margin: 16px;
        border-radius: 48%;
        z-index: -1;
    }

    img {
        z-index: 1;
    }

    a {
    color: #ffbcd4;
    text-decoration: underline dashed #ffffff;
  }
</style>