<!-- src/routes/+page.svelte -->

<script lang="ts">
    import Panel from "../components/Panel.svelte";
    import HTitle from "../components/HTitle.svelte";
    import HPoint from "../components/HPoint.svelte";
    import KofiButton from "$components/KofiButton.svelte";
    import PanelSegment from "$components/PanelSegment.svelte";
</script>

<HTitle direction="left" title="welcome to the good internet." desc="welcome to the beehive. HAPPY PRIDE MONTH!!!">
    <p>
        this is more than just our personal blog.
        <br />
        this is a place to share with the world what's possible
        when we put humans first, and user experiences before bottom lines.
    </p>

    <div style="display: flex; flex-direction: row;">
    <ul>
        <li>
            <a href="/activity-log">activity log</a>
             - our own little diary
        </li>
        <li>
            <a href="/sliceydicey">sliceydicey</a>
             - our purified toolbox
        </li>
        <li>
            <a href="/thegoodinternet">good internet</a>
             - know your allies
        </li>
        <li>
            <a href="/labs">labs</a>
             - here brews tutorials
        </li>
    </ul>
    </div>
</HTitle>

<div class="container" style="display: flex; flex-direction: row; flex-wrap: wrap; width: 100vw; align-items: center; justify-content: center;">
    <div style="width: 768px; display: flex; align-items: center; justify-content: center;">
        <h1>let's make the internet less like a dystopian sci-fi novel.</h1>
    </div>
    <div style="width: 768px; display: flex; align-items: center; justify-content: center;">
        <PanelSegment>
        <h1>here</h1>
        <Panel panel_width="200px" colour="#ffbcd4" desc="<- onboarding" href="/onboarding" img_url=""><span class="material-icons md-48">favorite</span></Panel>
        <Panel panel_width="160px" colour="#bcd3ff" desc="about" href="/about" img_url=""><span class="material-icons md-48">info</span></Panel>
        <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
        <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
        <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
        <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
        <Panel panel_width="140px" colour="#fff7ac" desc="activity log" href="/activity-log" img_url=""><span class="material-icons md-48">inventory_2</span></Panel>
        <Panel panel_width="220px" colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" img_url=""><span class="material-icons md-48">engineering</span></Panel>
        <Panel panel_width="150px" colour="#afffe5" desc="labs" href="/labs" img_url=""><span class="material-icons md-48">bolt</span></Panel>
        <Panel panel_width="220px" colour="#c8ffaf" desc="human" href="/human" img_url=""><span class="material-icons md-48">diversity_1</span></Panel>
        </PanelSegment>
    </div>
</div>

<div class="container">

<HPoint direction="left" title="designed for you" img_url="backgrounds/homelab.webp">
    <p>
        we design the beehive in dedication to its primary purpose; to provide information and
        encourage learning.
    </p>
    <p>
        with no tracking of your personal info, no intrusive ads, and, most importantly to us, no
        paywalls, the beehive is designed to be a place of information and documentation truly
        accessible to all*.
    </p>
    <p>
        in our design, we prioritise cleanliness, transparency, and clarity. we weave our core
        values into everything we design, build and write, from our explanations and breakdowns to
        entire articles on niche topics.
    </p>
    <p style="font-size: 0.75em;">*<i>we reserve the right to exclude or disqualify certain individuals from using or engaging with our products, services and experiences on the grounds that they have violated our Terms & Ethics of Use, but we won't do so on the grounds of race, ethnicity, age, religion or disability.</i></p>
</HPoint>

<HPoint direction="right" title="designed for speed" img_url="pictures/speed.webp">
    <p>
        we build the beehive to be fast, efficient, and open to running on a variety of different
        hardware and platforms. us queen bees are incredibly new to full-stack development, and web
        development in general, but we still wanted to create this as a website to promote
        inclusivity and ease of access.
    </p>

    <p>
        no apps to install, no mandated accounts to create, no intrusive telemetry or ai training to
        opt out of.
    </p>

    <p>
        just a clean website designed to run fast and be nimble, on everything from your grandma’s
        chromebook to the potent battleship gaming pc in your bedroom.
    </p>

    <p>every aspect of the beehive is designed with efficiency, speed, and cleanliness in mind.</p>

    <p>we want the beehive experience to be clean, minimal, streamlined and responsive.</p>
</HPoint>

<HPoint direction="left" title="designed for expression" img_url="pictures/expression.webp">
    <p>
        we have a general love for human expression, and means through which we can healthily
        express ourselves.
    </p>

    <p>
        we don’t believe that a computational means of generation could ever replace this quality of
        fan work and human art.
    </p>

    <p>as such, we don’t deem the means of computational, ai image generation ‘ai art’.</p>

    <p>
        ai models aren’t capable of this, and this won’t change, no matter how developed their
        mimicry becomes.
    </p>

    <p>we believe the term ‘art’ should be reserved for means of organic expression.</p>

    <p>
        as such, we love and cherish means of fan art, stories, and other means of fan-driven or
        passion-driven creation and storytelling.
    </p>

    <p>tell us your story!</p>
</HPoint>

<HPoint direction="right" title="designed for growth" img_url="pictures/growth.webp">
    <p>we build the beehive to promote and encourage your growth and development.</p>

    <p>
        we don’t build the beehive as a crutch. instead, we build our resources from the ground up
        to encourage you to truly absorb the content and contribute to your own independent toolkit.
    </p>

    <p>when we say that the beehive is a place to learn, we mean it.</p>

    <p>
        the beehive is designed to be an evergreen, rolling place for resources, tips, and
        documentation surrounding a variety of topics within technology, development, homelab and
        surrounding sciences.
    </p>

    <p>we work to design experiences that stick.</p>

    <p>
        but important to our hearts are helping you grow and develop your skillset, so we do what we
        can to keep content digestible, easy to understand, and easy to remember.
    </p>
</HPoint>

<HPoint direction="left" title="designed for all" img_url="pictures/all.webp">
    <p>we design the beehive in dedication to its accessibility.</p>

    <p>
        to be accessible and available to all means to provide accommodations for everyone, wherever
        reasonable or feasible.
    </p>

    <p>
        we are incredibly new to full-stack development, but we’re always up to a new challenge if
        that means we can invite more people to our platform.
    </p>

    <p>
        in addition, our nature as an open-source project means that we’re open to community
        contributions.
    </p>

    <p>
        ideas for new features or functionality to make the beehive even more accessible are ideas
        we welcome! just open a pull request or an issue on our github.
    </p>
</HPoint>

<HPoint direction="right" title="designed for humans" img_url="pictures/humans.webp">
    <p>
        every element of the beehive is passionately designed to be intuitive to human minds; that’s
        not just one standard of human mind, either.
    </p>

    <p>humanity is diverse.</p>

    <p>
        this is something we feel we should celebrate, but we feel that accommodating these
        differences we all share is really important in building something that feels truly
        welcoming for all.
    </p>

    <p>
        the explanations and breakdowns you’ll find at oreohive.org are designed to be digestible
        and easy to understand for all minds, no matter your brain chemistry, your background, or
        your fluency in english if it’s not your only language.
    </p>

    <p>
        this philosophy extends to our ui and ux design, too; every button, menu, and toggle is
        designed to be intuitive in its positioning, behaviour and description, with visuals that
        truly convey purpose and meaning, and labels that get straight to the point.
    </p>
</HPoint>

<HPoint direction="left" title="designed for community" img_url="backgrounds/design.webp">
    <p>
        we believe in the power of a passionate community of contributors; it’s baked right into our
        name and identity.
    </p>

    <p>
        all appropriate code is publicly accessible and open to contributions on github, as per our
        dedication to transparency with our community and users.
    </p>

    <p>
        we don’t believe in one central corporation, organisation or entity serving as or serving to
        control the activities of a community or ‘fandom’.
    </p>

    <p>
        instead, we exist of an organic community, centred around passion, participation and people,
        not profits.
    </p>

    <p>
        we love to see a drive for innovation and the betterment of our systems, strategies and
        resources, not necessarily a virtually meaningless line on a graph going up, or a margin
        being reached.
    </p>
</HPoint>

<div class="container">
    <PanelSegment>
        <h1>connect</h1>
        <Panel colour="#ff7d7d" desc="ao3" href="https://youtu.be/D5Df191WJ3o&t=32" img_url=""><span class="material-icons md-48 md-light">book</span></Panel> <!-- #970000, #ff4b4b */ -->
        <Panel colour="#c7bdff" desc="tumblr" href="https://oreohive.tumblr.com" img_url=""><span class="material-icons md-48">campaign</span></Panel>
        <KofiButton />
        <Panel colour="#BFFFD1" desc="we're open source <3" href="https://github.com/oreohive/oreohive.org" img_url=""><span class="material-icons md-48 md-light">code</span></Panel> <!-- #2b3137 (, #5FED83) -->
</PanelSegment>
</div>

</div>

<style>
    ul li {
        font-size: 0.9em;
        line-height: 24px;
    }
</style>