<script>
    export let data;
</script>

<div class="centre-container">
    {#if data.quotes}
        {console.log(data.quotes)}
        <ul>
            {#each data.quotes as quote}
                <li>{quote.text}</li>
            {/each}
        </ul>
    {:else}
        <p>
            no quotes found! the api is probably napping. maybe report this issue if this keeps
            happening for a few minutes.
        </p>
    {/if}
</div>