<script lang="ts">
	import { useQuery } from '@sanity/svelte-loader';
	import Card from '../components/Card.svelte';
	import type { PageData } from './$types';

	import Panel from '../components/Panel.svelte';
	import PanelBox from '../components/PanelBox.svelte';

	export let data: PageData;
	const q = useQuery(data);

	$: ({ data: posts } = $q);
</script>

<section>
	{#if posts.length}
		{#each posts as post}
			<Card {post} />
		{/each}
	{:else}
		<h3>oops! looks like the frontend couldn't connect to the sanity instance right now.</h3>
		<p>
			if you're a member of the public just trying to view our website, we're so sorry! someone
			screwed something up, and we're probably working to fix it.
		</p>
		<p>
			<weak
				>if you're a dev or contributor and you're viewing this on your own dev server, you need to
				connect your instance to a sanity database featuring at least one post for this to go away.</weak
			>
		</p>
	{/if}
</section>

<div class="panels">
	<PanelBox>
		<Panel colour="#a4fdff" desc="edu" />
		<Panel colour="#b0ffbe" />
		<Panel colour="#bcd3ff" />
		<Panel colour="#ffbcd4" />
		<Panel colour="#fff7ac" />
	</PanelBox>
</div>
