<!-- src/components/SEO.svelte -->

<script>
  import { page } from "$app/stores";

  export let title = "Home | Example.com";
  export let description = "Description of your website.";
  export let image = "https://example.com/your-logo.png";
</script>

<svelte:head>
  <title>{title} | Example.com</title>
  <meta name="description" content={description} />
  <meta property="og:site_name" content="Example.com" />
  <meta
    property="og:url"
    content="https://www.example.com{$page.url.pathname.toString()}"
  />
  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={image} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta property="twitter:domain" content="example.com" />
  <meta
    property="twitter:url"
    content="https://www.example.com{$page.url.pathname.toString()}"
  />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={image} />
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
