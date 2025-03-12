<!-- src/routes/+page.svelte -->

<script lang="ts">
  import Panel from "../components/Panel.svelte";
  import PanelBox from "../components/PanelBox.svelte";
  import HTitle from "../components/HTitle.svelte";
  import HPoint from "../components/HPoint.svelte";
  import KofiButton from "$components/KofiButton.svelte";
  import PanelSegment from "$components/PanelSegment.svelte";
</script>

<HTitle direction="left" title="welcome to the good internet."
            desc="welcome to the beehive, which is not only a personal log, but our place where we publish tutorials, guides, and resources, all for free, for you. with no intrusive ads, no mandatory accounts, no mailing lists being pushed and no ai bs, we're ready to put the passionate humans of the internet first and foremost."/>

<div class="container">
    <PanelSegment> <h1>here</h1>
        <Panel panel_width="200px" colour="#ffbcd4" desc="<- onboarding" href="/onboarding" />
        <Panel panel_width="160px" colour="#bcd3ff" desc="about" href="/about" />
        <!-- <Panel colour="#a4fdff" desc="edu" href="/placeholder"/> -->
        <!-- <Panel colour="#b0ffbe" desc="labs" href="/placeholder"/> -->
        <!-- <Panel colour="#bcd3ff" desc="universe" href="/placeholder"/> -->
        <!-- <Panel colour="#ffbcd4" desc="human" href="/placeholder"/> -->
        <Panel panel_width="140px" colour="#fff7ac" desc="activity log" href="/activity-log" />
        <Panel panel_width="220px" colour="#b0ffbe" desc="sliceydicey" href="/sliceydicey" />
    </PanelSegment>
</div>

<HPoint direction="left" title="designed for you" img_url="backgrounds/homelab.png">
            <p>we design the beehive in dedication to its primary purpose; to provide information and encourage learning.</p>
            <p>with no tracking of your personal info, no intrusive ads, and, most importantly to us, no paywalls, the beehive is designed to be a place of information and documentation truly accessible to all*.</p>
            <p>in our design, we prioritise cleanliness, transparency, and clarity. we weave our core values into everything we design, build and write, from our explanations and breakdowns to entire articles on niche topics.</p>
</HPoint>

<HPoint direction="right" title="designed for speed" img_url="pictures/speed.png">
            <p>we build the beehive to be fast, efficient, and open to running on a variety of different hardware and platforms.
            us queen bees are incredibly new to full-stack development, and web development in general, but we still wanted to create this as a website to promote inclusivity and ease of access.</p>

            <p>no apps to install, no mandated
            accounts to create, no intrusive
            telemetry or ai training to opt out of.</p>

            <p>just a clean website designed to run fast and be nimble, on
            everything from your grandma’s chromebook to the potent
            battleship gaming pc in your bedroom.</p>

            <p>every aspect of the beehive is designed with efficiency, speed,
            and cleanliness in mind.</p>

            <p>we want the beehive experience to be clean, minimal,
            streamlined and responsive.</p>
</HPoint>

<HPoint direction="left" title="designed for expression" img_url="pictures/expression.png">
            <p>we have a general love for human expression, and means
            through which we can healthily express ourselves.</p>

            <p>we don’t believe that a computational means of generation
            could ever replace this quality of fan work and human art.</p>

            <p>as such, we don’t deem the means of computational, ai image
            generation ‘ai art’.</p>

            <p>ai models aren’t capable of this, and this won’t change, no
            matter how developed their mimicry becomes.</p>

            <p>we believe the term ‘art’ should be reserved for means of
            organic expression.</p>

            <p>as such, we love and cherish means of fan art, stories, and other
            means of fan-driven or passion-driven creation and
            storytelling.</p>

            <p>tell us your story!</p>
</HPoint>

<HPoint direction="right" title="designed for growth" img_url="pictures/growth.png">
            <p>we build the beehive to promote and encourage your growth and
            development.</p>

            <p>we don’t build the beehive as a crutch. instead, we build our resources
            from the ground up to encourage you to truly absorb the content and
            contribute to your own independent toolkit.</p>

            <p>when we say that the beehive is a place to learn, we mean it.</p>

            <p>the beehive is designed to be an evergreen, rolling place for resources,
            tips, and documentation surrounding a variety of topics within technology,
            development, homelab and surrounding sciences.</p>

            <p>we work to design experiences that stick.</p>

            <p>but important to our hearts are helping you grow and develop your
            skillset, so we do what we can to keep content digestible, easy to
            understand, and easy to remember.</p>
</HPoint>

<HPoint direction="left" title="designed for all" img_url="pictures/all.png">
            <p>we design the beehive in dedication to its
            accessibility.</p>

            <p>to be accessible and available to all means to provide accommodations for everyone, wherever reasonable or feasible.</p>

            <p>we are incredibly new to full-stack
            development, but we’re always up to a
            new challenge if that means we can invite
            more people to our platform.</p>

            <p>in addition, our nature as an open-source project means that
            we’re open to community contributions.</p>

            <p>ideas for new features or functionality to make the beehive
            even more accessible are ideas we welcome! just open a pull
            request or an issue on our github.</p>
</HPoint>

<HPoint direction="right" title="designed for humans" img_url="pictures/humans.png">
            <p>every element of the beehive is passionately designed to be intuitive to
            human minds; that’s not just one standard of human mind, either.</p>

            <p>humanity is diverse.</p>

            <p>this is something we feel we should celebrate, but we feel that
            accommodating these differences we all share is really important in
            building something that feels truly welcoming for all.</p>

            <p>the explanations and breakdowns you’ll find at oreohive.org are designed
            to be digestible and easy to understand for all minds, no matter your
            brain chemistry, your background, or your fluency in english if it’s not your
            only language.</p>

            <p>this philosophy extends to our ui and ux design, too; every button, menu,
            and toggle is designed to be intuitive in its positioning, behaviour and
            description, with visuals that truly convey purpose and meaning, and
            labels that get straight to the point.</p>
</HPoint>

<HPoint direction="left" title="designed for community" img_url="backgrounds/design.png">
            <p>we believe in the power of a passionate
            community of contributors; it’s baked right
            into our name and identity.</p>

            <p>all appropriate code is publicly accessible
            and open to contributions on github, as
            per our dedication to transparency with
            our community and users.</p>

            <p>we don’t believe in one central corporation, organisation or entity serving
            as or serving to control the activities of a community or ‘fandom’.</p>

            <p>instead, we exist of an organic community, centred around
            passion, participation and people, not profits.</p>

            <p>we love to see a drive for innovation and the betterment of our
            systems, strategies and resources, not necessarily a virtually
            meaningless line on a graph going up, or a margin being
            reached.</p>
</HPoint>

<div class="container">
    <PanelSegment> <h1>connect</h1>
        <Panel colour="#ffffff" desc="notion revision stuff" href="https://orchid-wolverine-5ca.notion.site/resources-162e15a8c91d8065b158cb539d17cddc"/>
	      <Panel colour="#c7bdff" desc="tumblr" href="https://oreohive.tumblr.com"/>
        <KofiButton />
        <Panel colour="#2b3137" desc="we're open source <3" img_url="/icons/github/github-mark-white.png" href="https://github.com/oreohive/oreohive.org"/>
    </PanelSegment>
</div>