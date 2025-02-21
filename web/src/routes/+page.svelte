<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from "../components/Panel.svelte";
  import PanelBox from "../components/PanelBox.svelte";
  import FullPageTitle from "../components/FullPageTitle.svelte";
</script>

<div style="color: #000000 !important;"> <!-- todo: fix this crap lmao -->
<FullPageTitle title="welcome to oreohive.org" />
</div>

<div class="container">
  <div class="centre-container">
    <div class="panels">
      <PanelBox>
        <Panel colour="#ffbcd4" desc="back to onboarding" href="/onboarding" />
        <Panel colour="#bcd3ff" desc="about" href="/about" />
        <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
        <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
        <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
        <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
        <Panel colour="#fff7ac" desc="activity log" href="/activity-log" />
        <Panel colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" />
      </PanelBox>
    </div>
  </div>
</div>