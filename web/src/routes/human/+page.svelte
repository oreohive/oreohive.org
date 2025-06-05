<!-- src/routes/human/+page.svelte -->

<script lang="ts">
  import Panel from "$components/Panel.svelte";
  import PanelBox from "$components/PanelBox.svelte";
  import TitleDisplay from "$components/TitleDisplay.svelte";
  export let data;
</script>

<svelte:head>
  <title>human | oreohive.org</title>
  <meta name="description" content="oreohive human - a place for political commentary (a.k.a. deep stuff) and other toss you may or may not care about."/>
</svelte:head>

<TitleDisplay title="human" />

<div class="posts-display">
{#if data.documents && data.documents.length > 0}
  <ul>
    {#each [...data.documents] as post}
      <li
        style="display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; margin-bottom: 64px; gap: 8px; padding: 0px;"
      >
        <Panel
          colour="#fcfcff"
          img_url={post.data.image.url ?? "logo.webp"}
          href={`/human/human-articles/${post.uid}`}
        />
        <a href={`/human/human-articles/${post.uid}`}><i>{post.data.title ?? "no title found!"}</i></a>
        <p>{post.data.date ?? "no article date found!"} by {post.data.author ?? "oops! no author found!"}</p>
      </li>
    {/each}
  </ul>
{:else}
  <p>oop- no posts found here. sorry! :'))</p>
{/if}
</div>

<style>
  li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    margin-left: 20px;
    margin-top: 12px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-style: solid;
    border-color: #e8e8e8;
    border-width: 3px;
    background-color:rgba(255, 255, 255, 0.5);
    padding: 12px 12px 12px 12px !important;
    margin: 12px 16px 12px 16px !important;
    gap: 0px 0px 0px 0px !important;
  }
  .posts-display {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
    justify-self: flex-start;
    width: 100%;
    padding: 0px 0px 0px 0px !important;
    margin: 0px 0px 0px 0px !important;
    gap: 0px 0px 0px 0px !important;
  }
</style>