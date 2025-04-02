<script>
    import PanelBox from "../components/PanelBox.svelte";
</script>

<div class="centre-container">
    <div class="panel-box">
        <PanelBox>
        <slot />
        </PanelBox>
    </div>
</div>

<style>
    .centre-container {
        min-width: 256px;
    }
</style>