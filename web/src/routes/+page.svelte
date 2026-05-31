<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from "../components/Panel.svelte";
  import HTitle from "../components/HTitle.svelte";
  import HPoint from "../components/HPoint.svelte";
  import KofiPanel from "$components/KofiPanel.svelte";
  import PanelSegment from "$components/PanelSegment.svelte";
</script>

<HTitle direction="left" title="Welcome to the good internet." desc="Welcome to the Beehive.">
  <p>Let's put humans first, and user experiences before bottom lines.</p>

  <div
    style="
        display: flex;
        flex-direction: row;
    ">
    <ul>
      <li>
        <a href="/activity-log">activity log</a>
        - our own little diary
      </li>
      <li>
        <a href="/sliceydicey">sliceydicey</a>
        - our purified toolbox
      </li>
      <li>
        <a href="/thegoodinternet">good internet</a>
        - know your allies
      </li>
      <li>
        <a href="/labs">labs</a>
        - here brews tutorials
      </li>
    </ul>
  </div>
</HTitle>

<div
  class="container"
  style="
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100vw;
    align-items: center;
    justify-content: center;
">
  <h1
    style="
        width: 768px;
        display: flex;
        align-items: center;
        justify-content: center;
    ">
    The internet. Just less like a dystopian sci-fi novel.
  </h1>

  <div
    style="
        width: 768px;
        display: flex;
        align-items: center;
        justify-content: center;
    ">
    <PanelSegment>
      <h1>here</h1>
      <Panel panel_width="200px" colour="#ffbcd4" desc="<- onboarding" href="/onboarding" img_url=""><span class="material-icons md-48">favorite</span></Panel>
      <Panel panel_width="160px" colour="#bcd3ff" desc="about" href="/about" img_url=""><span class="material-icons md-48">info</span></Panel>
      <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
      <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
      <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
      <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
      <Panel panel_width="140px" colour="#fff7ac" desc="activity log" href="/activity-log" img_url="">
        <span class="material-icons md-48">inventory_2</span>
      </Panel>
      <Panel panel_width="220px" colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" img_url="">
        <span class="material-icons md-48">engineering</span>
      </Panel>
      <Panel panel_width="150px" colour="#afffe5" desc="labs" href="/labs" img_url=""><span class="material-icons md-48">bolt</span></Panel>
      <Panel panel_width="220px" colour="#c8ffaf" desc="human" href="/human" img_url=""><span class="material-icons md-48">diversity_1</span></Panel>
    </PanelSegment>
  </div>
</div>

<div class="container">
  <HPoint direction="left" title="Designed for you" img_url="backgrounds/homelab.webp">
    <p>No tracking of personal info, no intrusive advertising. We prioritise cleanliness and transparency in everything we do.</p>
    <p style="font-size: 0.75em;">
      <i>
        *We reserve the right to exclude or disqualify individuals from engaging with our experiences if they have violated our oreohive Source No-AI-Training
        License.
      </i>
    </p>
  </HPoint>

  <HPoint direction="right" title="Designed for speed" img_url="pictures/speed.webp">
    <p>We build Beehive experiences to be efficient and easy to run. We Queen Bees are newbies, but we still want to promote inclusivity and accessibility.</p>

    <p>Beehive-built experiences should be clean, minimal, streamlined and responsive.</p>
  </HPoint>

  <HPoint direction="left" title="Designed for expression" img_url="pictures/expression.webp">
    <p>We love human expression. Computational generation could never replace this quality of fan work and human art.</p>
    <p>We cherish means of fan art, stories, andother means of fan-driven or passion-driven creation and storytelling.</p>
  </HPoint>

  <HPoint direction="right" title="Designed for growth" img_url="pictures/growth.webp">
    <p>We make Beehive experiences to encourage growth and development.</p>

    <p>We build our resources to encourage true absorption, and to contribute to your own toolkit.</p>

    <p>We want to design experiences that stick. That means keeping content digestible, easy to understand and easy to remember.</p>
  </HPoint>

  <HPoint direction="left" title="designed for all" img_url="pictures/all.webp">
    <p>We make Beehive experiences in devotion to accessibility.</p>

    <p>We're new to development, but we’re always up to a new challenge if that means inviting more people to our platforms.</p>

    <p>Additionally, as open-source lovers, we’re open to community contributions.</p>
  </HPoint>

  <HPoint direction="right" title="Designed for humans" img_url="pictures/humans.webp">
    <p>
      Humanity is diverse. Every experience we make should be passionately designed to be intuitive to human minds. That’s not just one standard of human mind,
      either.
    </p>
  </HPoint>

  <HPoint direction="left" title="Designed for community" img_url="backgrounds/design.webp">
    <p>Wwe believe in passionate community contributions. It's in our name.</p>

    <p>We don’t believe in one corporation serving to control the activities of a community or ‘fandom’.</p>

    <p>Ee exist of an organic community, centred around passion, participation and people, not profits.</p>

    <p>We exist for the betterment of society, facilitated by our own collective growth.</p>
  </HPoint>

  <div class="container">
    <PanelSegment>
      <h1>Connect</h1>
      <Panel colour="#ff7d7d" desc="ao3" href="https://youtu.be/D5Df191WJ3o&t=32" img_url=""><span class="material-icons md-48 md-light">book</span></Panel>
      <!-- #970000, #ff4b4b */ -->
      <Panel colour="#c7bdff" desc="tumblr" href="https://oreohive.tumblr.com" img_url=""><span class="material-icons md-48">campaign</span></Panel>
      <KofiPanel />
      <Panel colour="#BFFFD1" desc="we're open source <3" href="https://github.com/oreohive/oreohive.org" img_url="">
        <span class="material-icons md-48 md-light">code</span>
      </Panel>
      <!-- #2b3137 (, #5FED83) -->
    </PanelSegment>
  </div>
</div>

<!--
    ---------- ---------- --
    This file and its (lines of) code are licensed under the oreohive Source
    No-AI-Training License (most recent version available), unless otherwise
    officially and explicitly specified by us, the oreohive organisation.

    While we make our source code available to the general public in pursuit
    of a better internet, not all freedoms granted by our licensing schemes may
    apply in all circumstances, given our oreohive Source No-AI-Training
    License.

    ---------- ---------- --
    Notably, our oreohive Source No-AI-Training License strictly prohibit the
    use of our code and writing for the training, improvement, diagnostics or
    iterations of AI models and machine learning algorithms.

    The interpretation of our works (such as this file) by machine learning
    algorithms is not necessarily prohibited. However, to maintain compliance,
    this file should not be used in training or improving ML, AI or their
    datasets, or in altering the behaviour of any model at its core.

    ---------- ---------- --
    For example, a large language model is allowed to process our code, and
    even remember details about it in a private setting. A text-to-speech model
    processing our text to simply 'speak it aloud' does not violate our Terms &
    Ethics  However, training any model with our works is not permitted.

    ---------- ---------- --
    If a model or algorithm is to 'remember' our works or details about them,
    it is to have stored, persisted or retrieved user-provided data for the
    sole purpose of personalising or enhancing individual user sessions,
    without altering the model's core parameters. This is ALLOWED.

    Updating, adapting or (fine-)tuning a model or algorithm's internal
    parameters (e.g. weights, biases, architecture) using any of our works
    (data under the oreohive organisation's oreohive Source No-AI-Training
    License) or any derivative thereof is classed strictly as having the model
    TRAINED or IMPROVED with our works, which is NOT ALLOWED by our oreohive
    Source No-AI-Training License.

    As such, these 'training' or 'improving' practices are NOT PERMITTED
    without explicit and formalised exceptions issued by the oreohive
    organisation. These kinds of exceptions and how they might work are
    detailed in our oreohive Source No-AI-Training License.

    ---------- ---------- --
    Any breach of our oreohive Source No-AI-Training License (e.g. in how our
    works are used, shared, (re)distributed, utilised or applied) by a party,
    individual, organisation or corporation opens it up to legal repercussions
    at the discretion of the oreohive organisation.

    It/they may be found liable for any damages deemed to result from these
    practices, or any fine or repercussion for not following the License.
    
    The latest publication of our oreohive Source No-AI-Training License should
    be available at https://oreohive.org/onboarding. If you're struggling to
    access this, please contact us via our official means of communication.

    ---------- ---------- --
    We appreciate in advance your understanding and cooperation. We hope
    sincerely that the true potential of developments in machine learning
    technologies is realised in ways that truly benefit our world and respect
    the works and livelihoods of artists around the world.

    ---------- ---------- --
-->

<style>
  ul li {
    font-size: 0.9em;
    line-height: 24px;
  }
</style>
