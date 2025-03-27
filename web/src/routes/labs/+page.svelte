<script lang="ts">
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

<TitleDisplay title="labs articles" />

{#if data.posts && data.posts.length > 0}
<ul>
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li style="display: flex; border-style: dashed; background-color:hsl(340, 22%, 95%);">
      <div style="display: flex; flex-direction: row;">
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/labs/labs-articles/${post.uid}`}/>
      <div>
        <a href={`/labs/labs-articles/${post.uid}`}><h3><PrismicRichText field={post.data.title ?? "a post title"} /></h3></a>
        <div style="display: flex; margin-left: 16px;">
        
        <p>{post.data.timestamp}</p>
        <PrismicRichText field={post.data.author ?? "an author"}/>
        </div>
      </div>
      </div>
    </li>
  {/each}
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}