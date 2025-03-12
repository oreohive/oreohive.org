<!-- src/routes/activity-log/+layout.svelte -->
<script>
  import TitleDisplay from "$components/TitleDisplay.svelte";
  import KofiDonateMsg from "$components/KofiDonateMsg.svelte";
</script>

<TitleDisplay title="oreohive activity log" />

<div class="container">
    <div class="centre-container">
      <slot />
    </div>
    <KofiDonateMsg />
</div>  

