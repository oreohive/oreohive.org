<!-- src/routes/activity-log/[uid]/+page.svelte -->

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

<h1 style="font-size: 22px;">oreohive labs research log</h1>

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
  <h1><PrismicRichText field={data.page.data.title ?? "a title"} /></h1>
  <div style="display: flex; flex-direction: row; align-items: flex-end;"><p>{data.page.data.timestamp ?? ""}<br>logged by:</p><PrismicRichText field={data.page.data.author ?? "an author"} /></div>
  <PrismicRichText field={data.page.data.description ?? ""} />

  <PrismicImage field={data.page.data.image ?? ""} width=256px/>


  <PrismicRichText field={data.page.data.article_content} />
  <SliceZone slices={data.page.data.slices} {components} />
{/if}

<style>
  .text-box {
    display: flex;
    flex-direction: column;
    font-family: Poppins, sans-serif;
    border-radius: 12px;
    box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
  }

  p {
    color: #5a5467;
  }
</style>
