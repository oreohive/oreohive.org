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

  {#each data.page.data.post_content as content}
    {#if content.type === 'paragraph'}
      <p>{@html content.text}</p>
    {/if}
    {#if content.type === 'image'}
      <img src={content.url} alt={content.alt} style="width: 512px; height: 512px;">
    {/if}
  {/each}

  <SliceZone slices={data.page.data.slices} {components} />
{/if}
