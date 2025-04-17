<!-- src/routes/ai/what-is-ai/+page.svelte -->

<script>
  import { page } from "$app/state";
  import HPoint from "$components/HPoint.svelte";
</script>

<div class="centre-container">
  <h1>oreohive.org/ai/what-is-ai</h1>
  <p>
    So, <b>what actually <i>is</i> 'ai'</b>?
  </p>
  <p>
    This page takes a very surface-level dive into what AI is, what 'machine
    learning' is as a study <i>within</i> AI, and what lets LLMs work.
  </p>
  <p>
    Let's <b>take a peek under</b> together! :)
  </p>
</div>

<HPoint direction="left" title="what is ai?">
  <p>
    AI ('artificial intelligence') is a term we use to describe <b
      >computer systems that can perform tasks</b
    >
    that would typically be associated with a human intelligence.<br /><br />
  </p>
  <p>
    <b>AI isn't <i>actually</i> intelligent</b>, hence the name. However, some
    complex mathematical algorithms are used to mimic what some amount of human
    intelligence could look like.
  </p>
  <p>
    When you interact with an AI, <b>it's not conscious</b>. It's not thinking,
    and you're interacting with a computer in the same way that you're used to.
  </p>
  <p>
    Artificial intelligence models are <b>no more conscious</b> than an
    operating system like Windows, or a game like Asetto Corsa. They're
    <b>not conscious at all</b>, but give the <b><i>illusion</i></b> that they are
    with lots of maths.
  </p>
</HPoint>

<HPoint direction="right" title="what is 'machine learning'?">
  <p>A large language model is a type of machine learning model.</p>
  <p>
    Machine learning is a field of study <i>within</i> AI that focuses on
    <b>systems that can study (process) existing data</b> and apply strategies 'learned'
    to new, unseen pieces of data.
  </p>
  <p>
    Think about <b>'unseen poetry'</b> questions in an English Literature
    course.<br />
    This is where we need to apply the tactics we've learned to texts we've never
    really studied before.<br /><br />
  </p>
  <p>
    ML is basically just the study of how we can make computers mimic these
    processes.<br />
    This ability to adapt on the fly to <b>new, unforeseen circumstances</b> is what
    can give us a convincing feeling of 'consciousness' in LLM 'chatbots' like Gemini
    (and yes, ChatGPT).
  </p>
  <p>
    <i>
      Of course, <b>a machine can't 'learn'</b>; machine learning is just about
      how we can have computers mimic the process by retaining information
      gathered from <b>previously seen data</b>.<br />This is so these computers
      can use what they've 'learned' (what data they've collected) in
      <b>engaging with future data</b> that hasn't been seen or decided yet.
    </i>
  </p>
</HPoint>

<HPoint direction="left" title="how do llms respond?">
  <p>
    This leaves a <b>fairly obvious question</b> about these 'chatbots', then; how
    exactly do these LLMs 'find' it within themselves to respond?
  </p>
  <p>
    Well, in essence, it's arguably quite clever. They are able to take a
    'prompt' (usually text) from a user.
  </p>
  <p>
    Then, they '<b>tokenise</b>' this prompt;
    <b>each word becomes a 'token'</b>. These 'tokens' are assessed with what
    kinds of <b>words</b> and <b>topics</b> they are most commonly used with.<br
    /><br />
  </p>
  <p>
    It 'knows' what kinds of things are associated because it has been
    'trained'.<br /><br />
    Good training data for these models shows them
    <b>what kinds of subjects, topics, objects and words</b>
    (tokens) appear closest to each other, which words appear most frequently together,
    and which words are of closest relations.<br /><br />
  </p>
  <p>
    For example, let's say an LLM's response starts with 'If the'. <b
      >This seems coherent to us</b
    >.<br /><br />The LLM has seen the word 'the' after 'If' so many times in
    relation to questions like a prompt it's been given.<br />
    So, it's noticed that pattern, and is now using this knowledge in the construction
    of its answer.
    <br /><br />
  </p>
  <p>
    So, in effect, the LLM is just <b
      >taking information from its training dataset</b
    >
    and <b>animating</b> it in front of you.<br /><br />Things from posts on
    Reddit, StackOverflow and many other platforms have all been sucked into
    this LLM's pot of training data, and it has 'learned' of the contextual
    links between all of these words, so it can
    <b>construct answers that appear unique</b> when they're actually rearrangements
    of what has already been said (likely many times).
  </p>
</HPoint>

<HPoint direction="right" title="llms are similar to predictive text">
  <p>
    Given this, then, these LLM 'chatbots' are actually <b
      >architecturally very similar to the 'predictive text' means of artificial
      intelligence</b
    > we've had on our phones for ages now.
  </p>
  <p>
    There's a common sentiment that these AI chatbots like ChatGPT are
    <b>effectively 'just autocomplete'</b>, and that is, for all intents and
    purposes,
    <b>effectively true</b>.
  </p>
  <p>
    LLMs work by '<b>predicting</b>' the <b>next word</b> to come after one it
    has already placed.
    <i
      >In very simple terms, it does this based on the links between the
      existing tokens (words) in a given conversation.</i
    ><br /><br />
  </p>
  <p>
    These chatbots (the likes of ChatGPT) 'know' no more than the likes of
    Google Search ever did. However, they can <b>feel 'smarter'</b> because
    <b>their outputs mimic our speech</b>, because this is the training data
    it's been given. Write-ups like these.
  </p>
  <p>
    So, when you talk to an LLM, you're effectively <b
      >interacting with a computer that is animating for you mixes of sentences</b
    >
    that have <b>already been said</b>.<br /><br />
    If you choose to think about it in a certain way, it's kind of like conversing
    with a human corpse on strings, its limbs being controlled algorithmically by
    robotic arms. Creepy? Perhaps, but that's arguably almost what may as well be
    happening.
  </p>
</HPoint>

<div class="centre-container">
  <h1>benefits and drawbacks</h1>
  <p>
    Next, you can learn about the potential benefits and drawbacks of AI as it's
    currently being used in our society and our world, and discover just a
    sliver of my own personal views and anecdotes.
  </p>
  <a href="benefits-and-drawbacks">learn ->></a>
</div>
