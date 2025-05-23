<!-- src/routes/activity-log/+layout.svelte -->
<script>
  import TitleDisplay from "$components/TitleDisplay.svelte";
  import KofiDonateMsg from "$components/KofiDonateMsg.svelte";
</script>

<TitleDisplay title="oreohive activity log" />

<slot />

<div class="container">
    <div class="centre-container">
    </div>
    <div>
    <h3>you can also check out:</h3>
    <ul>
        <li><a href="/labs">our more technically nerdy articles on labs</a></li>
        <li><a href="/human">our deeper, perhaps more passionately pastoral articles on human</a></li>
    </ul>
    </div>
    <KofiDonateMsg />
</div>  