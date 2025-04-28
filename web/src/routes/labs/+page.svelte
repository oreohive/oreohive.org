<script lang="ts">
    import FullPageTitle from "$components/FullPageTitle.svelte";
  import Panel from "$components/Panel.svelte";
  import PanelBox from "$components/PanelBox.svelte";
  import TitleDisplay from "$components/TitleDisplay.svelte";
  import { PrismicRichText } from "@prismicio/svelte";
  export let data;
</script>

<svelte:head>
  <title>labs | oreohive.org</title>
  <meta name="description" content="oreohive labs | perhaps not quite as scientific as it might sound."/>
</svelte:head>

<FullPageTitle title="oreohive.org | labs" />

<TitleDisplay title="labs articles" />

{#if data.posts && data.posts.length > 0}
<div style="color: #7f7fbe;">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <div style="display: flex; border-style: dashed; margin-top: 0px; margin-bottom: 32px; border-radius: 12px;">
      <div style="display: flex; border-radius: 12px; margin: 0px; margin-top: 18px;">
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/labs/labs-articles/${post.uid}`}/>
      <div>
        <a href={`/labs/labs-articles/${post.uid}`}><h3><PrismicRichText field={post.data.title ?? "a post title"} /></h3></a>
        <div style="display: flex; margin-left: 16px;">
        
        <p>{post.data.timestamp}</p>
        <PrismicRichText field={post.data.author ?? "an author"}/>
        </div>
      </div>
      </div>
    </div>
  {/each}
</div>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}

<style>
  * {
    min-width: fit-content;
    text-wrap: wrap;
    flex-wrap: wrap;
  }

  p {
    overflow: hidden;
    max-width: 100%;
  }
  .dark p {
    color: #000000 !important;
  }

  li {
    overflow: hidden;
    max-width: 100%;
  }

  .dark li {
    background-color: #5a5467;
  }
</style>