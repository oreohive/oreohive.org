<!-- src/routes/onboarding/+layout.svelte -->

<script>
  let { children } = $props();
</script>

<div class="container">
  <div style="max-width: 100vw; margin: 0 auto;">
    {@render children()}
  </div>
</div>
