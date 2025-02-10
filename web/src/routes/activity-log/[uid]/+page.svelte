<!-- src/routes/activity-log/[uid]/+page.svelte -->

<script>
        import { SliceZone } from '@prismicio/svelte';

        import { components } from '$lib/slices';
        import { page } from '$app/state';

        export let data;
</script>

<SliceZone slices={data.page.data.slices} {components} />
