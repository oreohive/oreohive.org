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

<br /><br />
<h1>oreohive activity log</h1>

{#if data.page}
  <h1>{data.page.data.title}</h1>
  <p>{data.page.data.date} | {data.page.data.author}</p>
  <p>{data.page.data.description}</p>

  <PrismicImage field={data.page.data.image} />

  <div class="text-box">
    <p><PrismicRichText field={data.page.data.post_content} /></p>
  </div>
  <SliceZone slices={data.page.data.slices} {components} />
{/if}

<style>
  .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Poppins, sans-serif;
  }

  .text-box {
      display: flex;
      flex-direction: column;
      align-items: left;
      align-self: center;
      justify-content: left;
      justify-self: center;
      font-family: Poppins, sans-serif;
      background-color: #fcfcff;
      border-radius: 12px;
      box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
      max-width: 720px !important;
      min-width: 384px !important;
      padding-left: 24px;
      padding-right: 24px;
      margin: 12px;
  }

  p {
    color: #5a5467;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #000000 !important;
    margin-bottom: -1px !important;
    margin-top: -1px !important;
  }

  .text-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        align-self: center;
        justify-content: flex-start;
        justify-self: center;
        font-family: Poppins, sans-serif;
        background-color: #fcfcff;
        border-radius: 12px;
        box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
        max-width: 50vw !important;
    }

    /* inverted styles for dark mode */
    .dark * {
        background-color: #1a1a1a !important; 
    }

    .dark p, .dark a, .dark h1, .dark h2, .dark h3, .dark h4, .dark h5, .dark h6,
    .dark .text-box {
      display: inline;
	    font-weight: inherit;
	    font-size: inherit;
	    color: inherit;
      background-color: #2a2a2a !important;
      color: #f5f5f5 !important;
      box-shadow: 8px 8px 24px 12px rgba(255, 255, 255, 0.05);
    }
</style>