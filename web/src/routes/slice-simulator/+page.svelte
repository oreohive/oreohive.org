<script>
  import { SliceSimulator } from "@slicemachine/adapter-sveltekit/simulator";
  import { SliceZone } from "@prismicio/svelte";
  import { components } from "$lib/slices";

  export const prerender = false;
</script>

<SliceSimulator let:slices>
  <SliceZone {slices} {components} />
</SliceSimulator>
