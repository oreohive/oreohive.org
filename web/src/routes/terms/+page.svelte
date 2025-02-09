<script>
	export let data;
</script>

<section>
	<h1>terms & ethics of use</h1>
	<p>these are the terms & ethics of use of the oreohive organisation.</p>
	<p>by using this website, connecting to its servers, or using anything by or of the oreohive organisation, you agree to them, and agree to follow them.</p>
	<p><weak>if you do not agree to them, you must now leave this website and not use any of its services.</p>
	<p><weak>failure to comply with or understand these terms & ethics of use may put you at risk of legal repercussions, penalties or disqualifications from using our services.</p>
</section>

<main>
	<h3>terms index</h3>

	{#each [...data.terms].reverse() as term} <!-- copies array ([...]) then reverses array, to make most recent appear first -->
		<section>
		<h3>{term.folder}</h3>
		{#if term.files.length > 0}
			<ul>
			{#each term.files as file}
					<li><a href="{file}" target="_blank">{file}</a></li>
			{/each}
			</ul>
		{:else}
			<p>no .md files found in this directory. *crickets*</p>
		{/if}
		</section>
	{/each}
</main>