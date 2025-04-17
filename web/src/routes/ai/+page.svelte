<!-- src/routes/ai/+page.svelte -->

<script>
  import { page } from "$app/state";
  import FullPageTitle from "$components/FullPageTitle.svelte";
  import HPoint from "$components/HPoint.svelte";
  import HTitle from "$components/HTitle.svelte";

  function showNotice() {
    var x = document.getElementById("notice");
    if (x.className == "show") {
      return;
    } /* cancel if already active */
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }
</script>

<div id="notice">
  while we wish to stick to facts and real info, oreohive.org/ai aims to provide
  factual information in defence of artists.
</div>

<FullPageTitle title="ai">
  <button on:click={showNotice}>?</button>
</FullPageTitle>

<div class="centre-container">
  <h1>welcome to oreohive.org/ai!</h1>
  <p>
    this is a hub for factual information about artificial intelligence efforts,
    and our own views on the use of artificial intelligence in our modern
    technological world.
  </p>
  <p>
    while this website is opinionated on this matter in that we believe ai
    should never be used to replace human expression, this area aims to provide
    facts to inform you to make your own choices about how you use ai and how
    you integrate it into your workflows and ways of life.
  </p>
  <p>
    <i>
      while we accept that ai is a useful tool for some, we cannot help but
      condemn some uses of ai that people have found in today's society. ai
      cannot produce art, for it has nothing to express, and expresses nothing
      itself.</i
    >
  </p>
</div>

<div class="centre-container">
  <h1>what is ai?</h1>
  <p>
    you can start here. :)<br /><br />
    these llm 'chatbots' mimic our ways of speech to present information to us in
    a different way. it felt quite sci-fi at first to some, but let's take a very
    surface-level dip under the hood to look at what's happening.
  </p>
  <a href="ai/what-is-ai">let's go! ->></a>
</div>

<div class="centre-container">
  <h1>benefits and drawbacks</h1>
  <p>
    here, we investigate the benefits and drawbacks of public ai accessibility
    in the forms we see today.<br /><br />
    let's explore the pros and cons of ai's integration into society, and some of
    the ways in which it's used today.
  </p>
  <a href="ai/benefits-and-drawbacks">learn ->></a>
</div>

<style>
  button {
    position: absolute;
    z-index: 1;
    align-self: flex-start;
    justify-self: flex-start;
  }
</style>
