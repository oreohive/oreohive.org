<!-- src/routes/edu/+page.svelte -->

<script>
  import PanelBox from "$components/PanelBox.svelte";
  import Panel from "$components/Panel.svelte";
  import { page } from "$app/state";
</script>

<svelte:head>
  <title>edu | oreohive.org</title>
  <meta
    name="description"
    content="oreohive edu - where we keep our free educational things. may contain nuts."
  />
</svelte:head>

<div class="container">
  <!-- necessary for taking 100vw rn? -->
  <h1>edu</h1>
  <h3>welcome to edu</h3>
  <div class="centre-container">
    <p>welcome to oreohive edu!</p>
    <p>
      while this is a <b>huge work in progress</b>, this is where we'll be, for
      now, storing all of our <b>resources</b> and <b>tools</b> relating to
      lessons, classes and subjects in <b>secondary</b> and
      <b>higher education</b>.
    </p>
    <p>
      here, you can expect to find little lessons and docs on various topics
      across numerous different subjects.
    </p>
    <p>
      our collection so far might be really small, but we're closely working on
      growing it, and you can help us out by letting us know what you wanna see!
    </p>
  </div>
  <div class="panel-box" style="margin-bottom: 32px;">
    <PanelBox>
      <Panel href="/edu/a-level" desc="a-level" />
      <Panel href="/edu/gcse" desc="gcse" />
    </PanelBox>
  </div>
</div>
