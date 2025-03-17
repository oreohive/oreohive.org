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
  import { url } from "inspector";
  import { isFilled, asImageSrc } from "@prismicio/client";

  export let data;
</script>

<svelte:head>
<!-- testing - metadata / og -->
<title>{data.page.data.meta_title}</title>
<meta property="og:locale" content="en_GB" />
<meta property="og:type" content="article" />
<meta property="og:image" content={data.page.data.image.url} />
<meta property="og:site_name" content="oreohive.org">
<meta property="og:title" content={data.page.data.title} />
<meta property="og:description" content={data.page.data.description} />
<meta property="og:url" content={data.page.url} />

<meta property="locale" content="en_GB" />
<meta property="type" content="article" />
<meta property="image" content={data.page.data.image.url} />
<meta property="site_name" content="oreohive.org">
<meta property="title" content={data.page.data.title} />
<meta property="description" content={data.page.data.description} />
<meta property="url" content={data.page.url} />

{#if isFilled.keyText(page.data.meta_description)}
    <meta name="description" content={page.data.meta_description} />
{/if}
{#if isFilled.image(page.data.meta_image)}
    <meta property="og:image" content={asImageSrc(page.data.meta_image)} />
{/if}
</svelte:head>

<h1>oreohive activity log</h1>

{#if data.page}
  <h1>{data.page.data.title ?? ""}</h1>
  <p>{data.page.data.date ?? ""} | {data.page.data.author ?? ""}</p>
  <p>{data.page.data.description ?? ""}</p>

  <PrismicImage field={data.page.data.image ?? ""} />

  <PrismicRichText field={data.page.data.post_content ?? "Something weird happened, and there's no article content here anymore...? Sorry about that. :'))"} />
  
  <SliceZone slices={data.page.data.slices} {components} />
{/if}