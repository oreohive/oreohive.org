<!-- src/routes/activity-log/[uid]/+page.svelte -->

<script lang="ts">
  import { SliceZone } from '@prismicio/svelte';
  import { components } from '$lib/slices';
  import { page } from '$app/state';

  export let data;
</script>

<h1>oreohive activity log</h1>

{#if data.page}
  <h2>{data.page.data.title}</h2>
  <p>{data.page.data.date} | {data.page.data.author}</p>
  <p>{data.page.data.description}</p>

  <img src={data.page.data.image.url} alt={data.page.data.image.alt} style="width: 512px; height: 512px;">

  <div class="text-box">
  {#each data.page.data.post_content as content} <!-- may switch save us lmao -->
    {#if content.type === 'paragraph'}
      <p>{@html content.text}</p>
    {/if}
    {#if content.type === 'heading1'}
      <h1>{@html content.text}</h1>
    {/if}
    {#if content.type === 'heading2'}
      <h2>{@html content.text}</h2>
    {/if}
    {#if content.type === 'heading3'}
      <h3>{@html content.text}</h3>
    {/if}
    {#if content.type === 'heading4'}
      <h4>{@html content.text}</h4>
    {/if}
    {#if content.type === 'heading5'}
      <h5>{@html content.text}</h5>
    {/if}
    {#if content.type === 'heading6'}
      <h6>{@html content.text}</h6>
    {/if}
    {#if content.type === 'image'}
      <img src={content.url} alt={content.alt} style="width: 512px; height: 512px;">
    {/if}
  {/each}
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
      max-width: 25vw !important;
      padding: 12px;
      margin: 12px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 0px
  }
</style>