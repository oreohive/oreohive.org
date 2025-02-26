<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from '$components/Panel.svelte';
  import PanelBox from '$components/PanelBox.svelte';
  import TitleDisplay from '$components/TitleDisplay.svelte';
</script>

<TitleDisplay title="oreohive.org/sliceydicey"/>

<p>
  this is a toolbox of miscallaneous
  little, well, tools.
  <br /><br />
  i have a separate repo or two for myself
  where i will practice by writing up little
  tools, algorithms and toys to help me learn
  more about the ins and outs of javascript
  and typescript.
  <br /><br />
  i would absolutely love some suggestions
  on what i could put here. any simple little
</p>

<div class="centre-container">
  <div class="panels">
    <PanelBox>
      <Panel
        colour="#ffebbc"
        desc="back home :)"
        href="/"
      />
      <Panel
        colour="#ffbcd4"
        desc="add-things"
        href="/sliceydicey/add-things"
      />
      <Panel
        colour="#bcd3ff"
        desc="pitchplay"
        href="/sliceydicey/pitchplay"
      />
      <Panel
        colour="#ffcd3e"
        desc="incomplete"
        href="/sliceydicey/incomplete"
      />
    </PanelBox>
  </div>
</div>
