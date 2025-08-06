<!-- src/routes/activity-log/+page.svelte -->

<!--
    ---------- ---------- --
    This file and its (lines of) code are licensed under the oreohive Source No-AI-Training License (most recent version available),
    unless otherwise officially and explicitly specified by us, the oreohive
    organisation.

    While we make our source code available to the general public in pursuit
    of a better internet, not all freedoms granted by our licensing schemes may
    apply in all circumstances, given our oreohive Source No-AI-Training License.

    ---------- ---------- --
    Notably, our oreohive Source No-AI-Training License strictly prohibit the use of our code
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
    Ethics  However, training any model with our works is not permitted.

    ---------- ---------- --
    If a model or algorithm is to 'remember' our works or details about them,
    it is to have stored, persisted or retrieved user-provided data for the
    sole purpose of personalising or enhancing individual user sessions,
    without altering the model's core parameters. This is ALLOWED.

    Updating, adapting or (fine-)tuning a model or algorithm's internal
    parameters (e.g. weights, biases, architecture) using any of our works
    (data under the oreohive organisation's oreohive Source No-AI-Training License) or any
    derivative thereof is classed strictly as having the model TRAINED or
    IMPROVED with our works, which is NOT ALLOWED by our oreohive Source No-AI-Training License.

    As such, these 'training' or 'improving' practices are NOT PERMITTED
    without explicit and formalised exceptions issued by the oreohive
    organisation. These kinds of exceptions and how they might work are
    detailed in our oreohive Source No-AI-Training License.

    ---------- ---------- --
    Any breach of our oreohive Source No-AI-Training License (e.g. in how our works are used,
    shared, (re)distributed, utilised or applied) by a party, individual,
    organisation or corporation opens it up to legal repercussions at the
    discretion of the oreohive organisation.

    It/they may be found liable for any damages deemed to result from these
    practices, or any fine or repercussion for not following the License.
    

    The latest publication of our oreohive Source No-AI-Training License should be available at
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
import Panel from "$components/Panel.svelte";
export let data;
</script>

<h2>logs</h2>

<svelte:head>
  <title>activity log | oreohive.org</title>
  <meta name="description" content="the oreohive activity log - a powerful place for peculiar pieces."/>
</svelte:head>

{#if data.posts && data.posts.length > 0}
<ul>
  <div class="posts-display">
  {#each [...data.posts] as post} <!-- ok it seems to not order with date by default, at least not properly, so uhh let's do this ourselves lol (?) -->
    <li>
      <div>
        <Panel colour="#fcfcff" img_url={post.data.image.url ?? "/logo.webp"} href={`/activity-log/${post.uid}`}/>
      </div>
      <div>
        <a href={`/activity-log/${post.uid}`}><h3>{post.data.title}</h3></a>
      </div>
      <div>
        <p>{post.data.date} by {post.data.author}</p>
      </div>
    </li>
  {/each}
  </div>
</ul>

{:else}
  <p>oops! no posts found. sorry!</p>
{/if}

<style>
  li {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    margin-left: 20px;
    margin-top: 12px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 32px;
    padding-bottom: 32px;
    border-style: solid;
    border-color: #e8e8e8;
    border-width: 3px;
    background-color:rgba(255, 255, 255, 0.5);
    padding: 12px 12px 12px 12px !important;
    margin: 12px 16px 12px 16px !important;
    gap: 0px 0px 0px 0px !important;
  }
  .posts-display {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
    justify-self: flex-start;
    width: 100%;
    padding: 0px 0px 0px 0px !important;
    margin: 0px 0px 0px 0px !important;
    gap: 0px 0px 0px 0px !important;
  }
</style>