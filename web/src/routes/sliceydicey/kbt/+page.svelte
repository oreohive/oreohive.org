<!-- src/routes/sliceydicey/kbt/+page.svelte -->

<!-- uses svelte-keydown ('npm i -D svelte-keydown')-->

<script>
  import { page } from "$app/state";
  import Keydown from "svelte-keydown";
  /** @type {any[]} **/
  let evt = [];
  let showModal = true;
</script>

<Keydown
  pauseOnInput
  on:key={(e) => {
    evt = [...evt, e.detail];
  }}
/>

<div class="centre-container" style="text-wrap: wrap; flex-wrap: wrap; overflow-y: hidden; overflow-x: hidden;">
    <div style="display: flex; text-wrap: break; flex-wrap: wrap; flex-direction: column; overflow: hidden;">{evt.join("")}</div>
</div>