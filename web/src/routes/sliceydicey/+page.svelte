<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from '$components/Panel.svelte';
  import PanelBox from '$components/PanelBox.svelte';
  import TitleDisplay from '$components/TitleDisplay.svelte';
</script>

<TitleDisplay title="oreohive.org/sliceydicey"/>

<div class="centre-container">
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
  tools, scripts or games you wanna see here?
  please lmk!
</p>
</div>

<div class="centre-container">
  <div class="panel-box">
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
        colour="#e8e8e8"
        desc="qr-gen"
        href="/sliceydicey/qr-gen"
      />
    </PanelBox>
  </div>
</div>
