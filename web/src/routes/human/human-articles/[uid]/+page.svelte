<!-- src/routes/human/human-articles/[uid]/+page.svelte -->

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

  export let data;
</script>

<h1>oreohive human</h1>

{#if data.page}
  <h1>{data.page.data.title ?? ""}</h1>
  <p>{data.page.data.date ?? ""} | {data.page.data.author ?? ""}</p>
  <PrismicRichText field={data.page.data.description ?? ""} />

  <PrismicImage field={data.page.data.image ?? ""} />

  <div class="text-box">
    <PrismicRichText field={data.page.data.article_content ?? "Something weird happened, and there's no article content here anymore...? Sorry about that. :'))"} />
  </div>
  <SliceZone slices={data.page.data.slices} {components} />
{/if}