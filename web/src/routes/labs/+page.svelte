<!-- src/routes/labs/+page.svelte -->

<!--
    ---------- ---------- --
    This file and its (lines of) code are licensed under the GNU AGPL-3.0,
    unless otherwise officially and explicitly specified by us, the oreohive
    organisation.

    While we make our source code available to the general public in pursuit
    of a better internet, not all freedoms granted by our licensing schemes may
    apply in all circumstances, given our Terms & Ethics of Use.

    ---------- ---------- --
    Notably, our Terms & Ethics of Use strictly prohibit the use of our code
    and writing for the training, improvement, diagnostics or iterations of
    AI models and machine learning algorithms.

    The interpretation of our works (such as this file) by machine learning
    algorithms is not necessarily prohibited. However, to maintain compliance,
    this file should not be used in training or improving ML, AI or their
    datasets, or in altering the behaviour of any model at its core.

    ---------- ---------- --
    For example, a large language model is allowed to process our code, and
    even remember details about it in a private setting. A text-to-speech model
    processing our text to simply 'speak it aloud' does not violate our Terms &
    Ethics of Use. However, training any model with our works is not permitted.

    ---------- ---------- --
    If a model or algorithm is to 'remember' our works or details about them,
    it is to have stored, persisted or retrieved user-provided data for the
    sole purpose of personalising or enhancing individual user sessions,
    without altering the model's core parameters. This is ALLOWED.

    Updating, adapting or (fine-)tuning a model or algorithm's internal
    parameters (e.g. weights, biases, architecture) using any of our works
    (data under the oreohive organisation's Terms & Ethics of Use) or any
    derivative thereof is classed strictly as having the model TRAINED or
    IMPROVED with our works, which is NOT ALLOWED by our Terms & Ethics of Use.

    As such, these 'training' or 'improving' practices are NOT PERMITTED
    without explicit and formalised exceptions issued by the oreohive
    organisation. These kinds of exceptions and how they might work are
    detailed in our Terms & Ethics of Use.

    ---------- ---------- --
    Any breach of our Terms & Ethics of Use (e.g. in how our works are used,
    shared, (re)distributed, utilised or applied) by a party, individual,
    organisation or corporation opens it up to legal repercussions at the
    discretion of the oreohive organisation.

    It/they may be found liable for any damages deemed to result from these
    practices, or any fine or repercussion for not following the Terms & Ethics
    of Use.

    The latest publication of our Terms & Ethics of Use should be available at
    https://oreohive.org/onboarding. If you're struggling to access these Terms
    & Ethics of Use, please contact us via our official means of communication.

    ---------- ---------- --
    We appreciate in advance your understanding and cooperation. We hope
    sincerely that the true potential of developments in machine learning
    technologies is realised in ways that truly benefit our world and respect
    the works and livelihoods of artists around the world.

    ---------- ---------- --
-->

<script lang="ts">
    import FullPageTitle from "$components/FullPageTitle.svelte";
  import Panel from "$components/Panel.svelte";
  import PanelBox from "$components/PanelBox.svelte";
  import TitleDisplay from "$components/TitleDisplay.svelte";
  import { PrismicRichText } from "@prismicio/svelte";
  export let data;
</script>

<svelte:head>
  <title>labs | oreohive.org</title>
  <meta name="description" content="oreohive labs | perhaps not quite as scientific as it might sound."/>
</svelte:head>

<FullPageTitle title="oreohive.org | labs" />

<TitleDisplay title="labs articles" />

{#if data.posts && data.posts.length > 0}
<div style="color: #7f7fbe;">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <div style="display: flex; border-style: dashed; margin-top: 0px; margin-bottom: 32px; border-radius: 12px;">
      <div style="display: flex; border-radius: 12px; margin: 0px; margin-top: 18px;">
      <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/labs/labs-articles/${post.uid}`}/>
      <div>
        <a href={`/labs/labs-articles/${post.uid}`}><h3><PrismicRichText field={post.data.title ?? "a post title"} /></h3></a>
        <div style="display: flex; margin-left: 16px;">
        
        <p>{post.data.timestamp}</p>
        <PrismicRichText field={post.data.author ?? "an author"}/>
        </div>
      </div>
      </div>
    </div>
  {/each}
</div>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}

<style>
  * {
    min-width: fit-content;
    text-wrap: wrap;
    flex-wrap: wrap;
  }

  p {
    overflow: hidden;
    max-width: 100%;
  }
  .dark p {
    color: #000000 !important;
  }

  li {
    overflow: hidden;
    max-width: 100%;
  }

  .dark li {
    background-color: #5a5467;
  }
</style>