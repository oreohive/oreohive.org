<!-- src/components/KofiButton.svelte -->

<script lang="ts">
  import Panel from "$components/Panel.svelte";
</script>

<div class="panel-container">
  <div class="panel">
    <Panel
      panel_width="190px;"
      colour="#2b313b"
      href="https://ko-fi.com/oreohive"
      img_url="https://storage.ko-fi.com/cdn/cup-border.png"
      img_height="36px;"
    >
      <iframe
        src="/widgets/ko-fi-widget.html"
        width="200"
        height="56"
        style="position: relative; border-style: none; border-radius: 12px; margin: 0px; gap: 0px; padding: 0px;"
        title="ko-fi.com/oreohive"
      >
      </iframe>
    </Panel>
  </div>
  <p class="panel-desc">ko-fi</p>
</div>

<style>
  .panel:hover {
    transform: scale(1.05);
    box-shadow: 8px 8px 32px 16px rgba(0, 0, 0, 0.05);
  }

  .panel-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    padding: 0px;
    margin: 0px;
  }
  .panel {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    /* rectangle */
    --panel-height: 120px;
    width: calc(var(--panel-height) * 1.5);
    height: var(--panel-height);
    border-style: none;
    border-radius: calc(var(--panel-height) * 0.1);
    box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.05s ease,
      box-shadow 0.05s ease;
  }
  :global(.panel-desc) {
    --panel-height: 120px;
    position: relative;
    border-style: none;
    font-size: 0.9rem !important;
    font-family: Poppins, sans-serif;
    color: #1f2937;
    text-transform: lowercase;
  }

  p {
    border-style: none;
  }
</style>
