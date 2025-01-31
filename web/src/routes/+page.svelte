<script lang="ts">
        import Panel from "../components/Panel.svelte";
        import PanelBox from "../components/PanelBox.svelte";
	import TitleBox from "../components/TitleDisplay.svelte";
</script>

<TitleBox title="welcome to oreohive.org" />

<div class="panels">
	<PanelBox>
		<Panel colour="#a4fdff" desc="edu" />
		<Panel colour="#b0ffbe" desc="labs"/>
		<Panel colour="#bcd3ff" desc="universe"/>
		<Panel colour="#ffbcd4" desc="human"/>
		<Panel colour="#fff7ac" desc="activity log"/>
	</PanelBox>
</div>