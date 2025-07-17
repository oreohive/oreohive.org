<!-- src/routes/contribute/+page.svelte -->

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

<script>
    import FullPageTitle from "$components/FullPageTitle2.svelte";
</script>

<FullPageTitle title="contribute!" />

<div class="container">
    <div class="centre-container">
        <h1>contributing to the oreohive</h1>
        <p>wanna help us grow?</p>
    </div>
    <div
        style="display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; gap: 16px; overflow-y: hidden;"
    >
        <div class="left-section">
            <div
                class="centre-container"
                style="max-width: 540px; height: 96%;"
            >
                <h1>personally</h1>
                <h3>spread the word</h3>
                <p>
                    share <a
                        href="http://localhost:5173/activity-log/why-28-02-2025"
                        >our mission</a
                    >
                    with the world. tell your friends! (but please don't be annoying
                    about it)
                    <br /><br /><i
                        >'hey, saw this really cool weird website today. they
                        can add what you want if you ask nicely!'</i
                    >
                </p>
                <h3>contribute to our open-source project</h3>
                <p>
                    our website is open-source! we suck at coding, so feel free
                    to go to <a href="https://github.com/oreohive/oreohive.org"
                        >our oreohive.org github repo</a
                    > to contribute.
                </p>
                <h3>say hi to us on bluesky</h3>
                <p>
                    we love interacting with the wider community on bluesky!
                    <a href="https://bsky.app/profile/oreohive.org"
                        >feel free to @ us and say hi</a
                    >.
                </p>
                <h3>sponsor our growth</h3>
                <p>
                    you can donate your funds to us on <a
                        href="https://ko-fi.com/oreohive"><b>ko-fi</b></a
                    >
                    or
                    <a href="https://liberapay.com/oreohive"><b>liberapay</b></a
                    >
                    if you prefer.
                    <br /><br />as you can see, we've been sure to give you
                    <b>multiple opportunities</b> to give us your money.
                    <br /><br />this lets us spend less time doing boring things
                    (booo!) and <b>more time working on oreohive.org</b>
                    (yay!!!).
                    <br /><br />also, if you've requested for a feature, we're
                    <b>much more likely to do it</b> if you donate a little. as
                    <b>tom nook</b> says, 'you want it, you fund it!'
                </p>
            </div>
        </div>
        <div class="right-section">
            <div
                class="centre-container"
                style="max-width: 540px; height: 95.5%;"
            >
                <h1>your organisation</h1>
                <h3>sponsor oreohive.org</h3>
                <p>
                    while we'd be more than happy for your org to donate to us
                    in the same ways, feel free to reach out to us via our
                    official social platforms to arrange some sort of more
                    official sponsorship or affiliation!
                    <br /><br />
                    we'd love if you promoted or spread the word about oreohive.org
                    on your own platform!
                </p>
                <h3>raise awareness</h3>
                <p>
                    tell the world about oreohive.org.
                    <br /><br />we're planning on bringing tutorials about
                    technology to the wider world in an accessible flavour; this
                    is hard for us to perfect, so things can take a while, but
                    we get                     <br><br>there, and by the end, it tends to be pretty cool!

                    we're working on some pretty fun content for our <a href="https://www.youtube.com/@oreohive">youtube</a>.
                </p>
                <h3>buy our merch</h3>
                <p>just kidding. would be really cool, though. <a href="https://bsky.app/profile/oreohive.org">who up?</a></p>
            </div>
        </div>
    </div>
</div>

<style>
    .left-section {
        margin: 8px;
    }
    .right-section {
        margin: 8px;
    }
</style>