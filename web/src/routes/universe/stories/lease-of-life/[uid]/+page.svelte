<!-- src/routes/universe/stories/lease-of-life/[uid]/+page.svelte -->

<script lang="ts">
    import {
        PrismicEmbed,
        PrismicImage,
        PrismicLink,
        PrismicRichText,
        PrismicText,
        SliceZone,
    } from "@prismicio/svelte";
    import { components } from "$lib/slices";
    import { page } from "$app/state";
    import { isFilled, asImageSrc } from "@prismicio/client";

    export let data;
</script>

<h3><i>oreohive universe - lease of life</i></h3>

<svelte:head>
    <title>{data.page.data.meta_title}</title>
    {#if isFilled.keyText(data.page.data.meta_description)}
        <meta name="description" content={page.data.meta_description} />
    {/if}
    {#if isFilled.image(page.data.meta_image)}
        <meta property="og:image" content={asImageSrc(page.data.meta_image)} />
    {/if}
</svelte:head>

{#if data.page}
    <h1>Chapter {data.page.data.chapter_number ?? ""}</h1>
    <h3><i>'{data.page.data.chapter_name ?? ""}'</i></h3>

    <div class="text-box">
        <PrismicRichText field={data.page.data.chapter_content} />
    </div>
    <SliceZone slices={data.page.data.slices} {components} />
{/if}

<style>
    .text-box {
        display: flex;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        background-color: #fcfcff;
        border-radius: 12px;
        box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
        max-width: 100%;
    }

    p {
        color: #5a5467;
    }

    .text-box {
        display: flex;
        flex-direction: column;
        font-family: Poppins, sans-serif;
        background-color: #fcfcff;
        border-radius: 12px;
        box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
    }
</style>
