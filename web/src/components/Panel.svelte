<!-- src/components/Panel.svelte-->

<!-- this is our component for our Panels 
Panels are kind of like our own special big fat ui buttons
they can be used for navigation or just to display info
they have colours and have neat animations on hover etc. -->

<script lang="ts">
        // declare props to accept values from the parent component
        export let colour: string = ''; // a string for the background colour
        export let desc: string = ''; // a string for the description text
        export let img_url: string = '/logo.webp'; // a string for the picture url
        export let href: string = ''; // a string for the link the panel is to take one
        console.log('img_url:', img_url);
</script>

<div class="panel-container"> 
        <!-- clickable me -->
        <a href={href} class="panel" style="background: {colour}; align-content: center;">
                <div style="position: relative; align-items: center; align-self: center; justify-content: center; justify-self: center;">
                <img src={img_url} alt={desc} width=50px height=50px/>
                </div>
                <slot />
        </a>
        
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
                flex-wrap: wrap;
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
                border-style: none;
                border-radius: calc(var(--panel-height) * 0.1);
                box-shadow: 8px 8px 24px 12px rgba(0, 0, 0, 0.05);
                z-index: 1;
		transition: transform 0.05s ease, box-shadow 0.05s ease;
        }
        .panel-desc {
                --panel-height: 120px;
                position: absolute;
                border-style: none;
                font-size: 1rem;
                font-family: Poppins, sans-serif;
                color: #1f2937;
                top: calc(var(--panel-height) + 6px);
                z-index: 1 !important;
                text-transform: lowercase;
        }

        p {
                border-style: none;
        }
</style>
