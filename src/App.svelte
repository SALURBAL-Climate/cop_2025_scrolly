<script>
  // Layout and theming
  import { setContext } from 'svelte';
  import { themes, brandColors } from './config.js';
  import { setColors } from './utils.js';
  import Header from './layout/Header.svelte';
  import Footer from './layout/Footer.svelte'; 
  
  // Set up theming
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);  // Component imports
  import HeroSection from './components/sections/0_Hero.svelte';
  import Section_1_WhatAreCOPs from './components/sections/1_WhatAreCOPs.svelte';
  import Section_2_WhatHappensAtCOP from './components/sections/2_WhatHappensAtCOP.svelte';
  import Section_3_WhereDoesHealthFitIn from './components/sections/3_WhereDoesHealthFitIn.svelte';
  import Section_4_HowAreGovernmentsCommitting from './components/sections/4_HowAreGovernmentsCommitting.svelte';
  import Section_5_NotableAgreements from './components/sections/5_NotableAgreements.svelte';
</script>

<Header filled={true} center={false} />
<main style="padding-top: 30px; max-width: 100vw; overflow-x: hidden; --salurbal-light-blue: {brandColors.hex_salurbal_light_blue};"> <!-- Add brand colors as CSS custom properties -->
  <HeroSection />
  <Section_1_WhatAreCOPs />
  <Section_2_WhatHappensAtCOP />
  <Section_5_NotableAgreements />
  <Section_3_WhereDoesHealthFitIn />
  <Section_4_HowAreGovernmentsCommitting />
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
