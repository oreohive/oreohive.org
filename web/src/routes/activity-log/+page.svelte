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
  <div style="display: flex; flex-wrap: wrap;">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li>
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/activity-log/${post.uid}`}/>
      <div>
        <a href={`/activity-log/${post.uid}`}><h3>{post.data.title}</h3></a>
        <div>
        <p>{post.data.date} by {post.data.author}</p>
        
      </div>
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
    height: 300px;
    width: 275px;
    margin-left: 20px;
    margin-top: 12px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-style: dashed;
    background-color:rgb(245, 239, 241, 0.05);
  }
</style>