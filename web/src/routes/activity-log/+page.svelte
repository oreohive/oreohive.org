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
    <li style="display: flex; flex-direction: row; align-items: center; margin-bottom: 16px; gap: 32px;">
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "No post image URL found"} href={`/activity-log/${post.uid}`}/>
      <div>
        <h3>{post.data.title}</h3>
        <p>{post.data.date}</p>
        <p>{post.data.author}</p>
      </div>
    </li>
  {/each}
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}