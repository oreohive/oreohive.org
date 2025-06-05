<script lang="ts">
import Panel from "$components/Panel.svelte";
export let data;
</script>

<h2>logs</h2>

<svelte:head>
  <title>activity log | oreohive.org</title>
  <meta name="description" content="the oreohive activity log - a powerful place for peculiar pieces."/>
</svelte:head>

{#if data.posts && data.posts.length > 0}
<ul>
  <div class="posts-display">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li>
      <div>
        <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/activity-log/${post.uid}`}/>
      </div>
      <div>
        <a href={`/activity-log/${post.uid}`}><h3>{post.data.title}</h3></a>
      </div>
      <div>
        <p>{post.data.date} by {post.data.author}</p>
      </div>
    </li>
  {/each}
  </div>
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}

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