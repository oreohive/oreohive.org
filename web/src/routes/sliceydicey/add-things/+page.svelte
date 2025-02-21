<!-- src/routes/sliceydicey/add-things/+page.svelte -->

<!-- so desparately wanna provide attributions here but the tutorial
     i found this code snippet on seems to have disappeared from my history...? -->
<!-- will attribute properly once found, sorry about that! -->

<!-- (note: no text next to or near the snippet, from what i recall,
 	  mandated attribution(s) or an attributional statement like the
	  one i intend to provide / implement ) -->

<script>
	let valueInput = $state(0);
	let allEntries = $state([]);
</script>

<input bind:value="{valueInput}" type="number" />

<button
	onclick={() => {
		allEntries.push(valueInput);
	}}
>
	Add entry</button
>

<button
	onclick={() => {
		allEntries.pop();
	}}
>
	Remove last entry</button
>

<p>Total:<br>{allEntries.join(' + ') || 0} = {allEntries.reduce((a, b) => a + b, 0)}</p>