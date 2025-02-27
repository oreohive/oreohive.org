<script lang="ts">
import Panel from "$components/Panel.svelte";
import PanelBox from "$components/PanelBox.svelte";
import TitleDisplay from "$components/TitleDisplay.svelte";
export let data;
</script>

<TitleDisplay title="oreohive activity log" />

{#if data.posts && data.posts.length > 0}
<ul>
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li style="display: flex; border-style: dashed; background-color:hsl(340, 22%, 95%);">
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/activity-log/${post.uid}`}/>
      <div>
        <a href={`/activity-log/${post.uid}`}><h3>{post.data.title}</h3></a>
        <div style="display: flex; margin-left: 32px;">
        <p>{post.data.date}</p><p>by {post.data.author}</p>
        
      </div>
      </div>
    </li>
  {/each}
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}