<!-- src/routes/universe/stories/lease-of-life/+page.svelte -->

<script lang="ts">
    import Panel from "$components/Panel.svelte";
    import PanelBox from "$components/PanelBox.svelte";
    import TitleDisplay from "$components/TitleDisplay.svelte";
    export let data;
</script>

<TitleDisplay title="human" />

{#if data.chapters && data.chapters.length > 0}
    <ul>
        {#each [...data.chapters] as chapter}
            <li
                style="display: flex; flex-direction: row; align-items: center; margin-bottom: 16px; gap: 32px;"
            >
                <div>
                    <h1>Chapter {chapter.data.chapter_number}</h1>
                    <h3>'{chapter.data.chapter_name}'</h3>
                </div>
                <Panel
                    colour="#fcfcff"
                    href={`/universe/stories/lease-of-life/${chapter.uid}`}
                />
            </li>
        {/each}
    </ul>
{:else}
    <p>oop- no chapters found here. sorry about that! :'))</p>
{/if}
