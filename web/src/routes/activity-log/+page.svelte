<script lang="ts">
import Panel from "$components/Panel.svelte";
import PanelBox from "$components/PanelBox.svelte";
import TitleDisplay from "$components/TitleDisplay.svelte";
export let data;
</script>

<h2>logs</h2>

{#if data.posts && data.posts.length > 0}
<ul>
  <div style="display: flex; flex-wrap: wrap;">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li style="height: 324x; width: 300px; margin: 20px; border-style: dashed; background-color:rgb(245, 239, 241, 0.05);">
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