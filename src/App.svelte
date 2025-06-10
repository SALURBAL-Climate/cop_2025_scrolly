<script>
  // Layout and theming
  import { setContext } from 'svelte';
  import { themes } from './config.js';
  import { setColors } from './utils.js';
  import Header from './layout/Header.svelte';
  import Footer from './layout/Footer.svelte';
  import Divider from './layout/Divider.svelte';
  
  // Set up theming
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);  // Component imports
  import HeroSection from './components/sections/0_Hero.svelte';
  import Section_1_WhatAreCOPs from './components/sections/1_WhatAreCOPs.svelte';
  import Section_2_WhatHappensAtCOP from './components/sections/2_WhatHappensAtCOP.svelte';
  import Section_3_WhereDoesHealthFitIn from './components/sections/3_WhereDoesHealthFitIn.svelte';
  import Section_4_HowAreGovernmentsCommitting from './components/sections/4_HowAreGovernmentsCommitting.svelte';
</script>

<Header filled={true} center={false} />
<main style="padding-top: 30px;"> <!-- Add padding to account for fixed header -->
  <HeroSection />
  <Section_1_WhatAreCOPs />
  <Section_2_WhatHappensAtCOP />
  <Section_3_WhereDoesHealthFitIn />
  <Section_4_HowAreGovernmentsCommitting />
  <Divider />
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
