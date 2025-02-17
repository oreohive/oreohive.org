<script lang="ts">
	import Panel from "../components/Panel.svelte";
	import PanelBox from "../components/PanelBox.svelte";
	import FullPageTitle from "../components/FullPageTitle.svelte";
</script>

<FullPageTitle title="welcome to oreohive.org" />

<div class="panels">
	<PanelBox>
		<!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
		<!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
		<!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
		<!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
		<Panel colour="#fff7ac" desc="activity log" href="/activity-log"/>
	</PanelBox>
</div>