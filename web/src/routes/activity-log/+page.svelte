<script lang="ts">
import Panel from "$components/Panel.svelte";
import PanelBox from "$components/PanelBox.svelte";
import TitleDisplay from "$components/TitleDisplay.svelte";
export let data;
</script>

<TitleDisplay title="oreohive activity log" />

{#if data.posts && data.posts.length > 0}
<ul>
{#each [...data.posts].reverse() as post}
<div>
	<li style="display: flex; flex-direction: row; align-items: center; margin-bottom: 16px; gap: 32px;">
        <a href={`/activity-log/${post.uid}`}>
            <Panel colour="#fcfcff" img_url={post.data.image.url} href={`/activity-log/${post.uid}`}/>
        </a>
        <h3>desc={post.data.title}</h3>
	<p>{post.data.date}</p>
	<p>{post.data.author}</p>
	</li>
</div>
{/each}
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}

<style>
        .panel {
                /* rectangle */
                width: 50vw !important;
                height: 256px !important;
                background: #fcfcff !important;
    }
</style>
