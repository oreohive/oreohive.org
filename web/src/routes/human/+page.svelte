<script lang="ts">
  import Panel from "$components/Panel.svelte";
  import PanelBox from "$components/PanelBox.svelte";
  import TitleDisplay from "$components/TitleDisplay.svelte";
  export let data;
</script>

<TitleDisplay title="human" />

{#if data.documents && data.documents.length > 0}
  <ul>
    {#each [...data.documents] as post}
      <li
        style="display: flex; flex-direction: row; align-items: center; margin-bottom: 16px; gap: 32px;"
      >
        <Panel
          colour="#fcfcff"
          img_url={post.data.image.url ?? "No image  URL found"}
          href={`/human/human-articles/${post.uid}`}
        />
        <div>
          <h3>{post.data.title ?? "No article title found"}</h3>
          <p>{post.data.date ?? "No article date found"}</p>
          <p>{post.data.author ?? "No article author found"}</p>
        </div>
      </li>
    {/each}
  </ul>
{:else}
  <p>oop- no posts found here. sorry! :'))</p>
{/if}