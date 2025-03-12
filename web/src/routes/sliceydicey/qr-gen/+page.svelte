<!-- src/routes/sliceydicey/qr-gen/+page.svelte -->

<script lang="ts">
    import QRCode from "qrcode";
    import KofiDonateMsg from "$components/KofiDonateMsg.svelte";

    let url: string = "oreohive.org";

    async function generateQrCode(url: string): Promise<void> {
        try {
            const canvas = document.getElementById("qrcode",) as HTMLCanvasElement;
            await QRCode.toCanvas(canvas, url, {width: 192,color: {dark: "#5a5467",light: "#ffffff",},});
        }
        catch (error) {console.error("error generating qr code!", error);}
    }

    function handleGenerate() {
        generateQrCode(url);
    }
</script>

<h2>oreohive.org/sliceydicey/qr-gen</h2>
<div class="centre-container" style="display: inline-block; width: 256px; height: 256px;">
<div style="display: flex; align-items: center; flex-direction: column; gap: 4px;">
    <div style="height: 196px; width: 196px;"><canvas id="qrcode"></canvas></div>
    <input type="text" bind:value={url} placeholder="enter url..." />
    <button on:click={handleGenerate}>generate code!</button>
    
</div>
</div>

<KofiDonateMsg />

<style>
    #qrcode {
        margin: 6px;
    }
</style>
