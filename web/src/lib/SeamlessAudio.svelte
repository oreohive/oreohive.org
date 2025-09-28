<!-- src/lib/SeamlessAudio.svelte -->

<script>
  import { onMount, onDestroy } from "svelte";

  export let src;
  export let volume = 1.0;
  export let isPlaying = false;

  let audioContext;
  let sourceNode;
  let gainNode;
  let audioBuffer;
  let isLoaded = false;

  async function setupAudio() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();

    try {
      const response = await fetch(src);
      const arrayBuffer = await response.arrayBuffer();

      audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      isLoaded = true;

      gainNode = audioContext.createGain();
      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.connect(audioContext.destination);

      if (isPlaying) {
        startLoop();
      }
    } catch (e) {
      console.error("Error loading or decoding audio:", e);
      isLoaded = false;
      isPlaying = false;
    }
  }

  // function for starting gapless loop
  async function startLoop() {
    if (!audioContext || !audioBuffer || !isLoaded) return;
    stopLoop(); // stop any existing source nodes first

    sourceNode = audioContext.createBufferSource();
    sourceNode.buffer = audioBuffer;

    sourceNode.loop = true;
    sourceNode.connect(gainNode);
    sourceNode.start(0);

    if (audioContext.state === "suspended") {
      try {
        await audioContext.resume();
      } catch (e) {
        console.warn("audioContext.resume() failed:", e);
      }
    }
  }

  // function for stopping the loop
  function stopLoop() {
    if (sourceNode) {
      try {
        sourceNode.stop(0);
      } catch (e) {
        console.log("Tried to stop audio loop, but it didn't work:", e);
      }
      sourceNode.disconnect();
      sourceNode = null;
    }
  }

  // svelte reactivity
  $: if (isLoaded) {
    if (isPlaying) {
      startLoop();
    } else {
      stopLoop();
    }
  }
  $: if (gainNode) {
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
  }

  onMount(() => {
    if (typeof window !== "undefined") {
      setupAudio();
    }
  });
  onDestroy(() => {
    stopLoop();
    if (audioContext) {
      audioContext.close();
    }
  });
</script>

<div hidden aria-live="polite">
  {#if !isLoaded}
    Loading background music...
  {/if}
</div>
