<!-- src/components/SEO.svelte -->

<script>
  import { page } from "$app/stores";

  export let title = "oreohive.org";
  export let description = "let's make a better internet, together.";
  export let image = "https://www.oreohive.org/logo.webp";
</script>

<svelte:head>
  <title>oreohive.org | {title}</title>
  <meta name="description" content={description} />
  <meta property="og:site_name" content="oreohive.org" />
  <meta
    property="og:url"
    content="https://www.oreohive.org{$page.url.pathname.toString()}"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />
>
  {@html `
      <script type="application/ld+json">{
        "@context": "https://schema.org",
        "@type": "Website",
        "name": "${title} | oreohive.org",
        "url": "https://www.oreohive.org${$page.url.pathname}",
        "logo": "${image}"
      }</script>
    `}
</svelte:head>
