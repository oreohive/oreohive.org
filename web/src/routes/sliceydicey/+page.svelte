<!-- src/routes/sliceydicey/+page.svelte -->

<script lang="ts">
  import Panel from "$components/Panel.svelte";
  import PanelBox from "$components/PanelBox.svelte";
  import TitleDisplay from "$components/TitleDisplay.svelte";
</script>

<TitleDisplay title="oreohive.org/sliceydicey" />

<div class="centre-container">
  <p>
    this is a toolbox of miscallaneous little, well, tools.
    <br /><br />
    i have a separate repo or two for myself where i will practice by writing up
    little tools, algorithms and toys to help me learn more about the ins and outs
    of javascript and typescript.
    <br /><br />
    i would absolutely love some suggestions on what i could put here. any simple
    little tools, scripts or games you wanna see here? please let me know!
  </p>
</div>

<div class="centre-container">
  <div class="panel-box">
    <PanelBox>
      <Panel colour="#ffebbc" desc="back home :)" href="/" />
      <Panel
        colour="#ffbcd4"
        desc="add-things"
        href="/sliceydicey/add-things"
      />
      <Panel colour="#bcd3ff" desc="pitchplay" href="/sliceydicey/pitchplay" />
      <Panel colour="#e8e8e8" desc="qr-gen" href="/sliceydicey/qr-gen" />
    </PanelBox>
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
