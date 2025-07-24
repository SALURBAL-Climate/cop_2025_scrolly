<script>
  // Layout and theming
  import { setContext } from 'svelte';
  import { themes, brandColors } from './config.js';
  import { setColors } from './utils.js';
  import Header from './layout/Header.svelte';
  import Footer from './layout/Footer.svelte'; 
  
  // SEO and language support
  import { currentLanguage } from './stores/language.js';
  import { getMetadata, seoConfig } from './config/seo.js';
  
  // Set up theming
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);
  
  // Dynamic SEO metadata based on current language
  $: metadata = getMetadata($currentLanguage);
  $: pageTitle = metadata.title;
  $: pageDescription = metadata.description;
  $: ogImage = `${seoConfig.baseUrl}${seoConfig.images.hero}`;
  
  // Component imports
  import HeroSection from './components/sections/0_Hero.svelte';
  import Section_1_WhatAreCOPs from './components/sections/1_WhatAreCOPs.svelte';
  import Section_2_WhatHappensAtCOP from './components/sections/2_WhatHappensAtCOP.svelte'; 
  import Section_4_WhereDoesHealthFitIn from './components/sections/4_WhereDoesHealthFitIn.svelte';
  import Section_5_CallToAction from './components/sections/5_CallToAction.svelte';
  import Section_6_HowAreGovernmentsCommitting from './components/sections/6_HowAreGovernmentsCommitting.svelte';
</script>

<!-- Dynamic SEO head tags that update with language changes -->
<svelte:head>
  <title>{pageTitle}</title>
  <meta name="description" content={pageDescription} />
  <meta name="keywords" content={metadata.keywords.join(', ')} />
  <meta property="og:title" content={metadata.ogTitle} />
  <meta property="og:description" content={metadata.ogDescription} />
  <meta property="og:image" content={ogImage} />
  <meta name="twitter:title" content={metadata.twitterTitle} />
  <meta name="twitter:description" content={metadata.twitterDescription} />
  <meta name="twitter:image" content={ogImage} />
  <html lang={$currentLanguage} />
</svelte:head>

<Header filled={true} center={false} />

<!-- Semantic HTML structure for better SEO -->
<main 
  role="main" 
  itemscope 
  itemtype="https://schema.org/Article"
  style="padding-top: 30px; max-width: 100vw; overflow-x: hidden; --salurbal-light-blue: {brandColors.hex_salurbal_light_blue};"
  aria-label="COP30 Health Guide for Public Health Researchers"
>
  
  <!-- Hero Section -->
  <section id="hero" aria-labelledby="hero-title">
    <HeroSection />
  </section>
  
  <!-- What are COPs Section -->
  <section id="what-are-cops" aria-labelledby="cops-title">
    <Section_1_WhatAreCOPs />
  </section>
  
  <!-- What Happens at COP Section -->
  <section id="what-happens-at-cop" aria-labelledby="cop-activities-title">
    <Section_2_WhatHappensAtCOP />
  </section>
  
  <!-- Health and Climate Section -->
  <section id="health-fit" aria-labelledby="health-climate-title">
    <Section_4_WhereDoesHealthFitIn />
  </section>
  
  <!-- Call to Action Section -->
  <section id="call-to-action" aria-labelledby="engagement-title">
    <Section_5_CallToAction />
  </section>
  
  <!-- Government Commitments Section -->
  <section id="government-commitments" aria-labelledby="commitments-title">
    <Section_6_HowAreGovernmentsCommitting />
  </section>
  
  <Footer />
</main>

<style>
  /* Global scrolly styles */
  :global(svelte-scroller-foreground) {
    pointer-events: none !important;
  }
  :global(svelte-scroller-foreground section div) {
    pointer-events: all !important;
  }
</style>
