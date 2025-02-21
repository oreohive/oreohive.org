<!-- src/routes/sliceydicey/pitchplay/+page.svelte -->

<script lang="ts">
  let startingNoteInput = $state('C');
  let desiredNoteInput = $state('G');
  let semitoneDiff = $state(0);

  const noteValues: Record<
    string,
    number
  > = {
    'C': 0,
    'C#': 1,
    'DB': 1,
    'D': 2,
    'D#': 3,
    'EB': 3,
    'E': 4,
    'F': 5,
    'F#': 6,
    'GB': 6,
    'G': 7,
    'G#': 8,
    'AB': 8,
    'A': 9,
    'A#': 10,
    'BB': 10,
    'B': 11,
  };

  function getNoteValue(note: string) {
    const cleanNote = note
      .trim()
      .toUpperCase();
    if (
      noteValues.hasOwnProperty(
        cleanNote
      )
    ) {
      return noteValues[cleanNote];
    } else {
      return null; // invalid note input
    }
  }

  function calculateSemitoneDiff(
    startingNote: string,
    desiredNote: string
  ) {
    const value1 = getNoteValue(
      startingNote
    );
    const value2 = getNoteValue(
      desiredNote
    );

    if (
      value1 === null ||
      value2 === null
    ) {
      return 0; // error: at least one of these notes invalid
    }

    let diff = value2 - value1;

    if (diff > 6) {
      diff -= 12;
    } else if (diff < -6) {
      diff += 12;
    }
    return diff;
  }

  function calculateMultiplier(
    semitoneDiff: number | null
  ) {
    if (semitoneDiff != null) {
      return 2 ** (semitoneDiff / 12);
    } else {
      return 0;
    }
  }

  let pitchMultiplier = $state(0);
</script>

<p>https://www.oreohive.org/sliceydicey/pitchplay</p>

<div style="display: flex; flex-wrap: wrap; gap: 32px;">
	<div>
  <p style="background-color: #ffbcd4; color: black !important;">
    starting note
  </p>
  <input
    bind:value={startingNoteInput}
    type="text"
  />
  </div>
  <div>
  <p style="background-color: #bcd3ff; color: black !important;">
    desired note
  </p>
  <input
    bind:value={desiredNoteInput}
    type="text"
  />
  </div>
</div>

<button
  onclick={() => {
    semitoneDiff =
      calculateSemitoneDiff(
        startingNoteInput,
        desiredNoteInput
      );
    pitchMultiplier =
      calculateMultiplier(semitoneDiff);
  }}
>
  go!!</button
>

<p style="background-color: #b0ffbe; color: black !important;">
  pitch multiplier: <b>{pitchMultiplier}</b>
</p>

<style>
  p {
    padding: 16px;
    margin: 16px;
	  color: black;
  }

  .dark p {
    color: white;
  }

  input {
	border-radius: 12px;
    border-width: 1px;
    border-style: dashed;
	font-size: 2em;
    font-family: Poppins, sans-serif;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 6px;
    margin-right: 6px;
    padding: 10px;
    border-radius: 24px;
    border-style: dashed;
    border-width: 3px;
    border-color: #5a5467;
    height: 48px;
	max-width: 192px;
  }

  button:hover {
    background-color: #ff7eb9;
    color: #ffe2ec;
    transform: scale(1.1);
    box-shadow: 8px 8px 32px 16px
      rgba(0, 0, 0, 0.05);
  }
  button {
    color: #5a5467;
    background-color: #ffe2ec;
    border-radius: 12px;
    border-style: none;
    margin-top: 48px;
    margin-bottom: 32px;
    padding: 12px;
    font-size: 1.25em;
    font-weight: 1000;
    transition:
      transform 0.05s ease,
      box-shadow 0.05s ease;
  }
</style>
