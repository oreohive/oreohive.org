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
  import SEO from "$components/SEO.svelte";

  export let data;
</script>

<SEO
  title={data.page.data.meta_title ?? "oreohive.org"} 
  description={data.page.data.meta_description ?? "oops; couldn't fetch a meta description lol"} 
  image={data.page.data.meta_image.url ?? "oop- no meta image!"}
/>

<h1>oreohive human</h1>

{#if data.page}
  <h1>{data.page.data.title ?? ""}</h1>
  <p>{data.page.data.date ?? ""} | {data.page.data.author ?? ""}</p>
  <PrismicRichText field={data.page.data.description ?? ""} />

  <PrismicImage field={data.page.data.image ?? ""} />

  <div class="text-box" style="border-style: none !important; border-width: 0px !important;">
    <PrismicRichText field={data.page.data.article_content ?? "Something weird happened, and there's no article content here anymore...? Sorry about that. :'))"} />
  </div>
  <SliceZone slices={data.page.data.slices} {components} />
{/if}