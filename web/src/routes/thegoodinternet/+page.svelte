<!-- src/routes/thegoodinternet/+page.svelte -->

<!-- NOTE FOR CONTRIBUTORS:
This is NOT a place for you to add your website without our approval.
Please ask us first. Thank you. -->

<script>
    import PanelBox from "$components/PanelBox.svelte";
    import Panel from "$components/Panel.svelte";
    import { page } from "$app/state";
</script>

<svelte:head>
    <title>the good internet | oreohive.org</title>
    <meta
        name="description"
        content="oreohive edu - where we keep our free educational things. may contain nuts."
    />
</svelte:head>

<div class="container">
    <p>oreohive.org/thegoodinternet</p>
    <h2>welcome to the good internet</h2>

    <div class="centre-container">
        <div>
            <p>
                <b>welcome to oreohive.org/thegoodinternet</b>
                !
            </p>
            <p>
                this is a place where we honour our <b>favourite places of the web</b>
                .
            </p>
            <p>
                be they small, independently-run projects, indie websites where artists share the
                work they pour their love and hearts into, or things in-between, we love sharing
                them here!
            </p>
            <p>
                the sites here should have minimal / no ads, a streamlined user experience free of
                bloat or intrusive nonsense, and clean, less commercialised vibes.
            </p>
            <p>
                while i hope you enjoy this little section here, we hope to drive traffic and
                support to these websites, because we think what they're doing is really cool!!!
                &lt;3
            </p>
        </div>
    </div>
    <div class="entry-container">
        <div class="entry">
            <div class="details">
                <h1>cobalt.tools</h1>
                <p><i>cobalt - the ad-free youtube downloader that's super lean<i></i></p>
                <p>
                    cobalt is an in-browser youtube downloader that's super easy to use and won't
                    annoy you.
                </p>
            </div>
            <Panel href="https://cobalt.tools" desc="cobalt.tools" colour="#000" />
        </div>

        <div class="entry">
            <div class="details">
                <h1>LuvstarKei's website</h1>
                <p>
                    Here, they showcase their art and share blog posts!
                    <br />
                    They seem to have made this in direct response to the turn of social media, and we
                    appreciate that they've embarked on a journey not too dissimilar from our own!
                </p>
            </div>
            <Panel href="https://luvstarkei.com" desc="luvstarkei.com" colour="#ffbcd4" />
        </div>

        <div class="entry">
            <div class="details">
                <h1>Insert Controller</h1>
                <p>
                    My friend and a few bros set sail in the wonderful world of games back in 2011.
                    Join Insert Controller in its reimagination.
                </p>
            </div>
            <Panel
                href="https://insertcontroller.com"
                desc="insertcontroller.com"
                colour="#ff508d"
            />
        </div>

        <div class="entry">
            <div class="details">
                <h1>Coulr (Flatpak on Flathub)</h1>
                <p>Enjoy colours and feel happy.</p>
                <p>Coulr is a simple colour picker to help developers and designers.</p>
            </div>
            <Panel
                href="https://flathub.org/apps/com.github.huluti.Coulr"
                desc="Coulr on Flathub"
                colour="#44f27c"
                img_url="icons/coulr/com.github.huluti.Coulr.svg"
            />
        </div>
    </div>

    <div class="entry">
        <div class="details">
            <h1>Your site</h1>
            <p>
                Want your site to be here?
                <br />
                Hit me up on my socials; if it fits, I'd be more than happy to add it here!
            </p>
        </div>
        <Panel href="/" desc="back home" colour="#fff7ac" />
    </div>

    <div class="entry">
        <h3>
            <i>if your site is here, feel free to reach out to me about it!</i>
        </h3>
        <p style="font-size: 0.6em;">
            <i>
                by the way, we will usually comply with requests for websites to be removed from
                this area, even if we're not obligated to do so.
            </i>
        </p>
    </div>

    <p>
        <i>
            i am not affiliated with any of these websites, applications or projects in any way,
            shape or form, unless i otherwise explicitly and officially note.
        </i>
    </p>
</div>

<style>
    .centre-container {
        flex-direction: column;
        gap: 12px;
        margin-bottom: 32px;
        min-width: 75vw;
    }
    .entry {
        align-items: flex-end;
        justify-content: center;
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        text-wrap: wrap;
        min-width: 256px;
        max-width: 320px;
        border-style: dotted;
        border-radius: 12px;
        margin-top: 8px;
        margin-bottom: 8px;
        margin-left: 0px;
        margin-right: 0px;
    }
    .details {
        max-width: 256px;
    }
    .entry-container {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100vw;
        margin: 0px;
        padding: 0px;
        gap: 16px;
    }
</style>
