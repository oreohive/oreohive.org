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

<div style="display: flex; flex-direction: row;">
  <div class="centre-container">
    <h1>stand your ground.</h1>
    <p>
      the corporations who stand behind ai may threaten to take our jobs, but
      <b>they cannot take us</b>.
    </p>
    <p>
      ai has the potential to be a wonderful tool — one for <b>curing cancers</b
      >
      and
      <b>finding patterns in medical data</b> — but it is being misused.
    </p>
    <p>
      it's being misused both by giant megacorps who don't care about you. it's
      being misused by people who think <a
        href="https://www.reddit.com/r/mildlyinfuriating/comments/1k3h3bk"
        target="_blank">crap like this looks good</a
      >
      and, more importantly, think crap like this is
      <b>what we want from our world</b>.
    </p>
    <h3>what can we do?</h3>
    <p>
      we can stand our ground, and remember that
      <b>they cannot emulate the thing most powerful in what we design</b>;
      <b>our souls</b>.
    </p>
    <p>
      creativity is executed with technical skill — technical skill you may
      learn.<br />creativity is <b>determined</b>, it's piercing, it's a fierce,
      unstoppable drive for change. creativity is
      <b>the expression of ideas</b>, ideas that computers
      <b>simply cannot have</b>.
    </p>
    <p>
      we've a <b>vantage point</b> here. do not undervalue how precious human art
      is. do things yourself. take matters into your own hands. don't let ai purge
      you of your skills and individuality, even if you think little of them.
    </p>
    <p>because trust me. <b>they're awesome.</b></p>
    <p>
      in my place of education, our programmers about to take their exams later
      this year are <b>the worst ones we've had in over half a decade</b>. we
      cannot teach people that <b>sacrificing their skills</b> just because 'ai can
      do it' is okay.
    </p>
    <p>
      this is a <b>recipe for disaster</b>; a recipe for a world where
      <b>individuality is ultimately sacrificed</b>, and we are left with
      nothing but cold, sludgy ai 'creations' with
      <b>no personality, no intricacies and no soul</b>.
    </p>
    <h3>we <b>can't</b> let this happen.</h3>
    <p>
      so <b>get out there</b>, and show the world your paintbrush. show the
      world your canvas. show the world your keyboard. show the word your pen
      and paper. show the world whatever it is you create, because real creation
      is precious.
    </p>
    <p>
      the kinds of intricacies, sentiments and messages behind the creative
      pieces and products of humans simply cannot be emulated by an ai. it's
      just not happening.
    </p>
    <h3>
      let's remind the world who we really are, and <b>what art really is</b>.
    </h3>
    <p>
      so <b>let's remind the world</b>. let's remind the world
      <b>what art truly is</b>. art isn't just about an end product.
      <b>creative processes are not a means to an end</b>. they're
      <b
        >journies, transmissions of messages, powerful ones we cannot let slip
        away.
      </b>
    </p>
    <p>
      no matter your political position or opinions, i urge that you <b
        >join us in reminding the world of what makes us human</b
      >. show the world your strength.
    </p>
    <p>
      if i can go from knowing virtually nothing of webdev to making this, you
      can go make that thing. it may take weeks, it may take months, but trust
      me when i say the feelings of reward alone will be worth it.
    </p>
    <p>
      <b>stay true to yourself</b>. don't let some bot pretend it knows what
      you're invisioning and feeling.
    </p>
    <h3>you're <b>too good for gpt</b>.</h3>
    <p><i>- oreo, 2025-04-21</i></p>
  </div>

  <div>
    <div class="centre-container">
      <h1>welcome to oreohive.org/ai!</h1>
      <p>
        this is a hub for factual information about artificial intelligence
        efforts, and our own views on the use of artificial intelligence in our
        modern technological world.
      </p>
      <p>
        while this website is opinionated on this matter in that we believe ai
        should never be used to replace human expression, this area aims to
        provide facts to inform you to make your own choices about how you use
        ai and how you integrate it into your workflows and ways of life.
      </p>
      <p>
        <i>
          while we accept that ai is a useful tool for some, we cannot help but
          condemn some uses of ai that people have found in today's society. ai
          cannot produce art, for it has nothing to express, and expresses
          nothing itself.</i
        >
      </p>
      
    </div>

    <div class="centre-container">
      <h1>what is ai?</h1>
      <p>
        you can start here. :)<br /><br />
        these llm 'chatbots' mimic our ways of speech to present information to us
        in a different way. it felt quite sci-fi at first to some, but let's take
        a very surface-level dip under the hood to look at what's happening.
      </p>
      <a href="ai/what-is-ai">let's go! ->></a>
    </div>

    <div class="centre-container">
      <h1>benefits and drawbacks</h1>
      <p>
        here, we investigate the benefits and drawbacks of public ai
        accessibility in the forms we see today.<br /><br />
        let's explore the pros and cons of ai's integration into society, and some
        of the ways in which it's used today.
      </p>
      <a href="ai/benefits-and-drawbacks">learn ->></a>
    </div>
    <div class="centre-container">
      <p>
        <i
          >any use of any of our content (across our entire website and any of
          our products, services, software or experiences) for any amount or
          nature of ai / ml training, analysis or diagnostics is strictly in
          breach of our Terms & Ethics of Use.<br />as such, doing this is
          grounds for legal action against yourself, your party, your instructor
          and / or your employer.</i
        >
      </p>
    </div>
  </div>
</div>

<style>
  button {
    position: absolute;
    z-index: 1;
    align-self: flex-start;
    justify-self: flex-start;
  }
</style>
