<!-- src/components/KofiDonatePrompt.svelte -->

<script lang="ts">
        export let msg: string = "i'm giving all this to you for free, but you can still help me pay for my meds and car insurance if you want.";
</script>

<button on:click={window.open("https://ko-fi.com/oreohive", "_blank") || window.location.replace("https://ko-fi.com/oreohive")} class="card" style="cursor: pointer;">
  <img src="https://storage.ko-fi.com/cdn/cup-border.png" alt="Ko-fi 'coffee' logo - abstract white mug with heart icon inside"/>
  <p>{msg}</p>
</button>

<style>
  p {
    font-size: 0.75em;
    color: #5a5467;
    text-decoration: none;
    text-emphasis: none;
    text-decoration-line: none;
    border-style: none;
    max-width: 29vw;
    min-width: 20vw;
    margin: 0px;
    gap: 0px;
  }
  .card:hover {
    transform: scale(1.1);
    box-shadow: 8px 8px 32px 16px rgba(0, 0, 0, 0.05);
  }

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* rectangle */
    --card-height: 256px;
    height: var(--card-height);
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    padding: 0px;
    gap: 0px;
    border-style: dotted;
    border-radius: calc(var(--card-height) * 0.1);
    box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
    transition:
      transform 0.05s ease,
      box-shadow 0.05s ease;
    border-color: #2b313b;
    border-width: 2px;
    border-radius: 64px;
    
  }
  img {
    width: 26px;
  }
</style>