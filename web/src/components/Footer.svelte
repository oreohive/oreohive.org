<!-- src/components/Footer.svelte -->

<!-- this component might be pretty self-explanatory, but i'll write a comment here just to give you a helping hand :))
this Footer.svelte component is the footer that appears at the bottom of each and every one of our pages.
this is quite important because it contains some licensing / restrictions stuff

it's referenced in the global +layout.svelte that appears at root (src/) so it appears on every page (in src) -->

<!-- the footer is made up of three main sections:
1. the footer-logo
- the footer-logo contains the logo of the oreohive organisation, which atm is a clickable link to our ko-fi page

2. the footer-message
- the footer-message contains a bunch of text that explains some licensing and restrictions stuff

3. the made-message
- the made-message contains a message that says who made the website etc., links to my github (might change this if community contributions catch on?)

:'))
-->

<script lang="ts">
        export let img_url: string = "/logo.webp"; // string for image / corner icon / logo url
</script>

<div class="footer">
        <div class="footer-logo">
                <a href="https://ko-fi.com/oreohive">
                        <div class="logo-background">
                                <img
                                        src={img_url}
                                        alt="logo"
                                        style="border-radius: 0%;"
                                />
                        </div>
                </a>
        </div>
        <div class="footer-message">
                <p style="font-size: 0.75em; color: #ffebbc;">
                        copyleft 2025 <a
                                href="https://github.com/oreohive"
                                target="”_blank”">the oreohive organisation</a
                        > @ oreohive.org | attributions are required!
                </p>
                <p>
                        All of this website's content, unless otherwise stated,
                        is distributed under the <a
                                href="/onboarding"
                                target="”_blank”"
                                >oreohive Source No-AI-Training License</a
                        >
                        of most recent publication, which can be found at
                        <a href="https://oreohive.org/onboarding"
                                >oreohive.org/onboarding</a
                        >.
                </p>
                <p>
                        This strictly prohibits any use of any of our software,
                        services, products, platforms, experiences, assets or
                        resources (including modified, derivative works, or
                        works deriving from / utilising resources from us or our
                        works) for training or improving machine learning
                        algorithms, including but not limited to artificial
                        intelligence, natural language processing, or data
                        mining. This applies to any and all derivatives,
                        modifications, or updates based on our code, works,
                        assets or resources. Any use of this software or any of
                        our assets, code, resources or works in any AI-training
                        dataset is a breach of the oreohive Source
                        No-AI-Training License. Any person, organisation, entity
                        or party found to be in violation WILL be subject to
                        legal action, and may be held liable for any damages (we
                        may perceive) resulting from such use.
                </p>

                <p>
                        Please refer to the oreohive Source No-AI-Training
                        License for more information. We appreciate your
                        cooperation and understanding.
                </p>

                <p>
                        We are (the oreohive organisation and oreohive.org are)
                        in NO WAY affiliated with, endorsed by or in any
                        official agreement with <a href="https://www.oreo.com"
                                >OREO</a
                        >,
                        <a href="https://en.wikipedia.org/wiki/Oreo"
                                >the brand of sandwich cookie</a
                        >, or its parent company, Mondelēz International group.
                        <br />OREO is a registered trademark of
                        <a
                                href="https://www.mondelezinternationalfoodservice.com/web-trademark-guidelines"
                                >Mondelēz International group.</a
                        >
                        We use the name 'oreohive' as a play on the alias of the
                        creator of this website. We did not conceive of this name
                        in relation to, regard for or in light of Mondelēz International
                        group or any of its products, services or brand identities.
                </p>
        </div>
        <div class="made-message">
                <p
                        style="width: 235.5px !important; min-width: 235.5px !important; border-style: dashed;"
                >
                        made with &lt;3 by <a
                                href="https://github.com/dopreo"
                                target="”_blank”">a kid in the UK</a
                        >
                </p>
        </div>
        <slot />
</div>

<style>
        .footer {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                align-self: center;
                align-items: center;
                justify-content: space-between;
                z-index: -1;
                padding: 24px;
                margin-bottom: -8px;
                gap: 16px;

                background-color: #5a5a5a;
                background-image: linear-gradient(
                        315deg,
                        #5a5a5a 0%,
                        #5a5467 100%
                );
                color: #ece4ff;
                border-radius: 6px 6px 0px 0px;
        }

        .footer-message p {
                max-width: 50vw !important;
                min-width: 20vw;
                border-style: none;
                margin: 0px;
                gap: 0px;
                padding: 4px;
                font-size: 0.5em;
        }

        .logo-background {
                display: flex;
                justify-content: center;
                align-items: center;
                background-color: #ffebbc;
                padding: 6px;
                margin: 16px;
                border-radius: 48%;
                z-index: -1;
                max-width: 96px;
                max-height: 96px;
                min-width: 12px;
                min-height: 12px;
        }

        img {
                z-index: 1;
                max-width: 96px;
                max-height: 96px;
                min-width: 12px;
                min-height: 12px;
        }

        a {
                color: #ffbcd4;
                text-decoration: underline dashed #ffffff;
        }

        .made-message p {
                padding: 10px;
                font-size: 0.95em;
        }
</style>
