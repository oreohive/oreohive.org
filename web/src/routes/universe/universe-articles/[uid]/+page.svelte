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
  
    export let data;
  </script>
  
  <h1>oreohive activity log</h1>
  
  {#if data.page}
    <h1>{data.page.data.title ?? ""}</h1>
    <p>{data.page.data.timestamp ?? ""} | {data.page.data.author ?? ""}</p>
    <PrismicRichText field={data.page.data.description ?? ""} />
  
    <PrismicImage field={data.page.data.image ?? ""} />
  
    <div class="text-box">
      <PrismicRichText field={data.page.data.article_content} />
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
      max-width: 50vw;
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