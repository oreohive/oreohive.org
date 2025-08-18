<!-- src/components/HTitle.svelte-->

<script>
  export let title;
  export let desc = "HPoint";
  export let direction = "left";
  export let img_url = "/logo.webp";
</script>

<div class="homepoint-display">
  {#if direction == "left"}
    <div style="display: flex; flex-direction: row;">
      <div class="pane">
        <div class="pane-text">
          <h1>{title}</h1>
          <slot />
        </div>
      </div>

      <div class="background-image">
        <div class="hpoint-blur">
          <img class="point-picture" src={img_url} />
        </div>
      </div>
    </div>
  {:else}
    <div style="display: flex; flex-direction: row-reverse;">
      <div class="pane">
        <div class="pane-text">
          <h1>{title}</h1>
          <slot />
        </div>
      </div>
      <div class="background-image">
        <div class="hpoint-blur">
          <img class="point-picture" src={img_url} />
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  /* background blur using backdrop-filter */
  /* https://blog.prototypr.io/how-to-make-a-background-blur-in-css-with-one-line-of-code-e446c7236e60 <3 */
  .hpoint-blur {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(
      255,
      255,
      255,
      0.9
    ) !important; /* make sure this colour has an opacity of less than 1! */
    backdrop-filter: blur(8px); /* this be the blur! */
    min-height: 100%;
    width: 100%;
    max-width: 100vw;
    overflow: hidden;
  }
  .homepoint-display {
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    min-height: 60vh;
    max-height: 180vh;
    margin: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! */
    overflow: hidden;
  }
  .pane {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    min-height: fit-content;
    max-height: 180vh;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #fcfcff;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px !important; /* THESE ARE STRICTLY DISALLOWED FROM HAVING MARGINS!!! MESSES WITH PAGE LAYOUT!!! x2 */
    margin-right: 0px !important;
    padding: 0px !important;
    overflow-y: hidden;
    overflow-x: hidden;
  }
  .pane-text {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    min-height: 60vh;
    max-height: 180vh;
    max-width: 512px;
    padding: 8px;
    justify-content: center;
    background-color: #ffffff;
    border-radius: 0px;
    overflow: hidden;
    z-index: 2;
    min-height: 100%; /* stop them from being cut short when image beside is particularly tall */
  }
  .background-image {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 50vw;
    margin: 0px;

    background-image: url("/backgrounds/codioful.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 0px;
    overflow: hidden !important;
  }

  :global(.dark .hpoint-blur) {
    background: rgba(
      0,
      0,
      0,
      0.9
    ) !important; /* make sure this colour has an opacity of less than 1! */
  }
  :global(.dark .pane) {
    background-color: inherit;
    border-color: #fff;
  }
  :global(.dark .pane-text) {
    background-color: rgb(120, 112, 137);
  }
</style>
