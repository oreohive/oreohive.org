<!-- src/routes/universe/stories/lease-of-life/+page.svelte -->

<script lang="ts">
    import Panel from "$components/Panel.svelte";
    import PanelBox from "$components/PanelBox.svelte";
    import TitleDisplay from "$components/TitleDisplay.svelte";
    export let data;

    let chapters = data.documents;
</script>

<TitleDisplay title="universe stories - lease of life" />

{#if chapters && chapters.length > 0}
    <ul>
        {#each [...chapters] as chapter}
            <li style="display: flex; flex-direction: row; align-items: center; margin-bottom: 16px; margin-top: 0px; margin-left: 0px; margin-right: 0px; gap: 32px;">
            <div style="display: flex; flex-direction: column;">
                <div>
                    <h3>Chapter {chapter.data.chapter_number}</h3>
                    <h3>'{chapter.data.chapter_name}'</h3>
                </div>
                <Panel
                    colour={chapter.data.chapter_colour}
                    href={`/universe/stories/lease-of-life/${chapter.uid}`}
                />
            </div>
            </li>
        {/each}
    </ul>
{:else}
    <p>oop- no chapters found here. sorry about that! :'))</p>
{/if}
