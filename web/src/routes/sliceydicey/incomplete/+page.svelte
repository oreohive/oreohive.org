<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from '$components/Panel.svelte';
  import PanelBox from '$components/PanelBox.svelte';
  import TitleDisplay from '$components/TitleDisplay.svelte';
</script>

<TitleDisplay
  title="incomplete"
/>

<p>
  this is a part of sliceydicey reserved for incomplete, in development or experimental tools.
  <br /><br />
  most likely, the tools and toys you find here will probably be incomplete; don't expect them to work at all or be feature-complete!
  <br /><br />
  things we're just testing and trying out should appear here.
</p>

<div class="centre-container">
  <div class="panels">
    <PanelBox>
      <Panel
        colour="#ffebbc"
        desc="<- sliceydicey"
        href="/sliceydicey"
      />
      <Panel
        colour="#ff7d95"
        desc="wordywords"
        href="/sliceydicey/wordywords"
      />
    </PanelBox>
  </div>
</div>
