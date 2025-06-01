<!-- src/routes/edu/a-level/english-lit/texts/je/activities/quotesquery/+page.svelte -->

<script>
    import { onMount } from 'svelte';
    import { settings } from "$lib/globalState.svelte";

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
        speakerIsCorrect ? playWinSound() : playLossSound();
    };

    const checkToAnswer = () => {
        toSubmitted = true;
        toIsCorrect =
            toAnswer.trim().toLowerCase() ===
            data.quote.to.trim().toLowerCase();
        toIsCorrect ? playWinSound() : playLossSound();
    };

    const resetSpeakerQuiz = () => {
        speakerAnswer = "";
        speakerSubmitted = false;
        speakerIsCorrect = false;
    };

    const resetToQuiz = () => {
        toAnswer = "";
        toSubmitted = false;
        toIsCorrect = false;
    };

    const totalWinSounds = 10;
    const totalLossSounds = 4;
    const playWinSound = () => {
        if (!settings.sfxEnabled) return;
        const randomIndex = Math.floor(Math.random() * totalWinSounds);
        const audio = new Audio(`/sfx/win/win${randomIndex}.mp3`);
        audio.play();
    }
    const playLossSound = () => {
        if (!settings.sfxEnabled) return;
        const randomIndex = Math.floor(Math.random() * totalLossSounds);
        const audio = new Audio(`/sfx/loss/loss${randomIndex}.mp3`);
        audio.play();
    }

    // function to fetch a new quote from the api
    const getNewQuote = async () => {
        const response = await fetch("https://api.oreohive.org/quotes/je");
        if (response.ok) {
            const newData = await response.json();
            data = newData;
            resetSpeakerQuiz();
            resetToQuiz();
        } else {
            console.error("oops! failed to fetch new quote.");
        }
    };

    onMount(() => {
        resetSpeakerQuiz();
        resetToQuiz();
    });
</script>

<div class="centre-container">
    <p><u>Quotes quizzing for <i><b>Journey's End</b></i> by R.C. Sherriff</u></p>
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
                    on:keydown={(e) => e.key === "Enter" && checkSpeakerAnswer()}
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
                    on:keydown={(e) => e.key === "Enter" && checkToAnswer()}
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
    <button on:click={getNewQuote}>New Quote</button>
</div>

<style>
    .quote {
        align-items: center;
        align-content: center;
        align-self: center;
        text-align: center;
        min-height: 256px;
        max-height: 512px;
        background-color: #fff;
        border-radius: 16px;
        border-color: #5a5467;
        border-style: dashed;
        border-width: 2px;
        color: #5a5467 !important;
    }

    p, h1 {
        color: #5a5467 !important;
    }
    .centre-container {
        width: 90vw;
        height: fit-content;
    }
    .quiz {
        margin-left: 2em;
        margin-right: 2em;
        margin-top: 1em;
        margin-bottom: 0em;
        padding: 1.5em;
        background-color: #fff;
        border-radius: 12px;
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
        border-radius: 12px;
        border-style: dashed;
    }
    button {
        margin-top: 0.5em;
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
