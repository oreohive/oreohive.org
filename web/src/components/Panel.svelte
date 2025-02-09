<!-- web/sveltekit-app/src/components/Panel.svelte-->

<script lang="ts">
        // declare props to accept values from the parent component
        export let colour: string = ''; // a string for the background colour
        export let desc: string = ''; // a string for the description text
        export let img_url: string = ''; // a string for the picture url
</script>

<div class="panel-container">
        <div class="panel" style="background: {colour}">
                <img src={img_url} alt={desc} />
        </div>
        <div class="panel-desc">
                <p>{desc}</p>
        </div>
</div>

<style>
	.panel:hover {
                transform: scale(1.1);
                box-shadow: 8px 8px 32px 16px rgba(0, 0, 0, 0.05);
        }

        * {
                box-sizing: border-box;
        }
        .panel-container {
                position: relative;
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 0px;
                padding: 0px;
                margin: 0px;
                z-index: 1;
        }
        .panel {
                /* rectangle */
                --panel-height: 120px;
                width: calc(var(--panel-height) * 1.5);
                height: var(--panel-height);
                background: #ffbcd4;
                border-radius: calc(var(--panel-height) * 0.1);
                box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
                z-index: 1;
		transition: transform 0.05s ease, box-shadow 0.05s ease;
        }
        .panel-desc {
                --panel-height: 120px;
                position: absolute;
                font-size: 1rem;
                font-family: Poppins, sans-serif;
                color: #1f2937;
                top: calc(var(--panel-height) + 6px);
                z-index: 1;
                text-transform: lowercase;
        }
</style>
