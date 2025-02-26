<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from "../components/Panel.svelte";
  import PanelBox from "../components/PanelBox.svelte";
  import FullPageTitle from "../components/FullPageTitle.svelte";
  import KofiButton from "$components/KofiButton.svelte";
</script>

<div style="color: #000000 !important;"> <!-- todo: fix this crap lmao -->
<FullPageTitle title="welcome to oreohive.org" />
</div>

<div class="container">

  <div class="centre-container">
    <p>here</p>
    <div class="panel-box">
      <PanelBox>
        <Panel panel_width="200px" colour="#ffbcd4" desc="<- onboarding" href="/onboarding" />
        <Panel panel_width="160px" colour="#bcd3ff" desc="about" href="/about" />
        <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
        <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
        <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
        <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
        <Panel panel_width="140px" colour="#fff7ac" desc="activity log" href="/activity-log" />
        <Panel panel_width="220px" colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" />
      </PanelBox>
    </div>
  </div>

  <div class="centre-container">
    <p>connect</p>
    <div class="panel-box">
      <PanelBox>
        <Panel colour="#ffffff" desc="edu notion"
	      href="https://orchid-wolverine-5ca.notion.site/resources-162e15a8c91d8065b158cb539d17cddc"/>
	      <Panel colour="#c7bdff" desc="tumblr"
	      href="https://oreohive.tumblr.com"/>
        <KofiButton />
      </PanelBox>
    </div>
  </div>

</div>