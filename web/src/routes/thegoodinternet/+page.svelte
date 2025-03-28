<script>
    import PanelBox from "$components/PanelBox.svelte";
    import Panel from "$components/Panel.svelte";
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
        <p>
            <b>welcome to oreohive.org/thegoodinternet</b>!
        </p>
        <p>
            this is a place where we honour our <b>favourite places of the web</b>.
        </p>
        <p>
            be they small, independently-run projects, indie websites where artists share the work
            they pour their love and hearts into, or things in-between, we love sharing them here!
        </p>
        <p>
            the sites here should have minimal / no ads, a streamlined user experience free of bloat
            or intrusive nonsense, and clean, less commercialised vibes.
        </p>
        <p>
            while i hope you enjoy this little section here, we hope to drive traffic and support to
            these websites, because we think what they're doing is really cool!!! &lt;3
        </p>
    </div>

    <div class="centre-container" style="align-items: center; flex-direction: row; gap: 12px; margin-bottom: 32px;">
        <Panel href="https://luvstarkei.com" desc="luvstarkei.com" colour="#ffbcd4" />
        <div>
        <h1>LuvstarKei's website</h1>
        <p>Here, they showcase their art and share blog posts!<br>They seem to have made this in direct response to the turn of social media, and we appreciate that they've embarked on a journey not too dissimilar from our own!</p>
        </div>
    </div>

    <div class="centre-container" style="flex-direction: row; gap: 12px; margin-bottom: 32px;">
        <Panel href="https://cobalt.tools" desc="cobalt.tools" colour="#000" />
        <div>
        <h1>cobalt - the ad-free youtube downloader that's super lean</h1>
        <p>cobalt is an in-browser youtube downloader that's super easy to use and won't annoy you.</p>
        </div>
    </div>

    <div class="centre-container">
        <h3><i>if your site is here, feel free to reach out to us about it!</i></h3>
        <p style="font-size: 0.6em;">
            <i>
                by the way, we will usually comply with requests for websites to be removed from
                this area, even if we're not obligated to do so.
            </i>
        </p>
    </div>

    <p><i>
        i am not affiliated with any of these websites in any way, shape or form, unless i otherwise explicitly and officially note.
    </i></p>

</div>
