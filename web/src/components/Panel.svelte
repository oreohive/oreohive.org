<!-- src/components/Panel.svelte-->

<!-- this is our component for our Panels 
Panels are kind of like our own special big fat ui buttons
they can be used for navigation or just to display info
they have colours and have neat animations on hover etc. -->

<script lang="ts">
  // declare props to accept values from the parent component
  export let panel_width: string = "180px"; // a string for panel's height
  export let colour: string = ""; // a string for the background colour
  export let desc: string = ""; // a string for the description text
  export let img_url: string = "/logo.webp"; // a string for the picture url
  export const img_width: string = "42px"; // a string for the picture's width
  export let href: string = ""; // a string for the link the panel is to take one
  console.log("img_url:", img_url);
</script>

<div class="panel-container">
  <!-- clickable me -->
  <a {href} class="panel" style="box-shadow: 0px 0px 12px -2px {colour}; width: {panel_width}; background: {colour}; align-content: center;">
    {#if img_url != ""}
    <img src={img_url} alt={desc} width=auto height=90% />
    {/if}
    <slot />
  </a>
  <p class="panel-desc">{desc}</p>
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
  /* in order: x offset, y offset, blur size, spread size, color */
  /* blur size and spread size are optional (they default to 0) */
  }
  :global(.panel-desc) {
    --panel-height: 120px;
    position: relative;
    border-style: none;
    font-size: 0.75rem;
    font-family: Poppins, sans-serif;
    color: #1f2937;
    text-transform: lowercase;
    text-wrap: wrap;
    overflow: hidden;
    max-width: calc(var(--panel-height) * 1.5);

    margin: 0px;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    gap: 0px;
  }

  p, a {
    border-style: none;
    color: inherit;
  }

  :global(img) {
    max-width: 75%;
    max-height: 90%;
    overflow: hidden !important;
  }
</style>
