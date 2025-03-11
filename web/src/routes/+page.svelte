<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from "../components/Panel.svelte";
  import PanelBox from "../components/PanelBox.svelte";
  import HomeTitle from "../components/HomeTitle.svelte";
  import KofiButton from "$components/KofiButton.svelte";
  import PanelSegment from "$components/PanelSegment.svelte";
</script>

<HomeTitle title="welcome to the good internet."
           desc="welcome to the beehive, which is not only a personal log, but our place where we publish tutorials, guides, and resources, all for free, for you. with no intrusive ads, no mandatory accounts, no mailing lists being pushed and no ai bs, we're ready to put the passionate humans of the internet first and foremost."/>

<div class="container">

    <PanelSegment> <h1>here</h1>
        <Panel panel_width="200px" colour="#ffbcd4" desc="<- onboarding" href="/onboarding" />
        <Panel panel_width="160px" colour="#bcd3ff" desc="about" href="/about" />
        <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
        <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
        <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
        <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
        <Panel panel_width="140px" colour="#fff7ac" desc="activity log" href="/activity-log" />
        <Panel panel_width="220px" colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" />
    </PanelSegment>

    <PanelSegment> <h1>connect</h1>
        <Panel colour="#ffffff" desc="notion revision stuff" href="https://orchid-wolverine-5ca.notion.site/resources-162e15a8c91d8065b158cb539d17cddc"/>
	      <Panel colour="#c7bdff" desc="tumblr" href="https://oreohive.tumblr.com"/>
        <KofiButton />
        <Panel colour="#2b3137" desc="we're open source <3" img_url="/icons/github/github-mark-white.png" href="https://github.com/oreohive/oreohive.org"/>
    </PanelSegment>

</div>