<!-- src/routes/edu/a-level/english-lit/texts/je/activities/quotesquery/+page.svelte -->

<script>
    import { onMount } from 'svelte';

    export let data;
    let speakerAnswer = "";
    let toAnswer = "";
    let speakerSubmitted = false;
    let toSubmitted = false;
    let speakerIsCorrect = false;
    let toIsCorrect = false;

    const checkSpeakerAnswer = () => {
        speakerSubmitted = true;
        speakerIsCorrect =
            speakerAnswer.trim().toLowerCase() ===
            data.quote.speaker.trim().toLowerCase();
    };

    const resetSpeakerQuiz = () => {
        speakerAnswer = "";
        speakerSubmitted = false;
        speakerIsCorrect = false;
    };

    const checkToAnswer = () => {
        toSubmitted = true;
        toIsCorrect =
            toAnswer.trim().toLowerCase() ===
            data.quote.to.trim().toLowerCase();
    };

    const resetToQuiz = () => {
        toAnswer = "";
        toSubmitted = false;
        toIsCorrect = false;
    };

    onMount(() => {
        resetSpeakerQuiz();
        resetToQuiz();
    });
    
</script>

<div class="centre-container">
    {#if data.quote}
        {console.log(data.quote)}
        <div class="quote">
            <p style="font-size: 1.5em;"><i>"{data.quote.text}"</i></p>
        </div>

        {#if data.quote.speaker}
            <div class="quiz">
                <h1><light>Who said it?</light></h1>
                <input
                    type="text"
                    bind:value={speakerAnswer}
                    placeholder="e.g. 'Osborne'..."
                    disabled={speakerSubmitted}
                />
                <p style="font-size: 0.75em;">
                    <i
                        >Please input just their name as it's referred to in the
                        script, not their full title.</i
                    >
                </p>
                <button
                    on:click={checkSpeakerAnswer}
                    disabled={speakerSubmitted || speakerAnswer.trim() === ""}
                >
                    Submit!
                </button>

                {#if speakerSubmitted}
                    {#if speakerIsCorrect}
                        <p class="correct">
                            Correct! 'Twas indeed {data.quote.speaker}.
                            Congrats! :D
                        </p>
                    {:else}
                        <p class="incorrect">
                            Oops, that's not it. You can try again! :')
                        </p>
                        <button on:click={resetSpeakerQuiz}
                            >Reset and try this one again</button
                        >
                    {/if}
                {/if}
            </div>
        {/if}

        {#if data.quote.to}
            <div class="quiz">
                <h1><light>Who was it said to?</light></h1>
                <input
                    type="text"
                    bind:value={toAnswer}
                    placeholder="e.g. 'Raleigh'..."
                    disabled={toSubmitted}
                />
                <p style="font-size: 0.75em;">
                    <i
                        >Please input just their name as it's referred to in the
                        script, not their full title.</i
                    >
                </p>
                <button
                    on:click={checkToAnswer}
                    disabled={toSubmitted || toAnswer.trim() === ""}
                >
                    Submit!
                </button>

                {#if toSubmitted}
                    {#if toIsCorrect}
                        <p class="correct">
                            Yep!! It was said to {data.quote.to}. Well done!!
                            :))
                        </p>
                    {:else}
                        <p class="incorrect">
                            Oops, almost! We can try again? :')
                        </p>
                        <button on:click={resetToQuiz}
                            >Reset and try this one again</button
                        >
                    {/if}
                {/if}
            </div>
        {/if}

        {#if data.quote.act}
            <p><strong>Act:</strong> {data.quote.act}</p>
        {/if}
        {#if data.quote.scene}
            <p><strong>Scene:</strong> {data.quote.scene}</p>
        {/if}
    {:else}
        <p>
            no quotes found! the api is probably napping. maybe report this
            issue if this keeps happening for a few minutes.
        </p>
    {/if}
</div>

<style>
    .quote {
        align-items: center;
        align-content: center;
        align-self: center;
        text-align: center;
        width: 40em;
        min-height: 256px;
        max-height: 512px;
        background-color: #fff;
        border-radius: 16px;
        border-color: #5a5467;
        border-style: dashed;
        border-width: 2px;
        color: #5a5467 !important;
    }
    .centre-container {
        width: 50em;
        height: fit-content;
    }
    .quiz {
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 1em;
        margin-bottom: 0em;
        padding: 1.5em;
        background-color: #fff;
        border-radius: 24px;
        border-color: #e8e8e8;
        border-width: 3px;
        border-style: solid;
    }
    input {
        width: fit-content;
        margin-top: 1em;
        margin-bottom: 1em;
        margin-left: 0.5em;
        margin-right: 0.5em;
        padding: 0.5em;
        font-size: 1em;
        font-family: "Courier New", Courier, monospace;
        border-radius: 6px;
        border-style: dashed;
    }
    button {
        margin-left: 0.5em;
        padding: 0.5em 1em;
    }
    .correct {
        color: #5ee076;
        margin-top: 1em;
    }
    .incorrect {
        color: #ff6b9e;
        margin-top: 1em;
    }
</style>
