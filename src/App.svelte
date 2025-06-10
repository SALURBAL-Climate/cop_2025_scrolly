<script>
  // Layout and theming
  import { setContext } from 'svelte';
  import { themes } from './config.js';
  import { setColors } from './utils.js';
  import Header from './layout/Header.svelte';
  import UHCFooter from './layout/UHCFooter.svelte';
  import Divider from './layout/Divider.svelte';
  
  // Set up theming
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);
  // Component imports
  import HeroSection from './components/sections/0_Hero.svelte';
  import IntroSection from './components/sections/1_Intro.svelte';  import SectionOneText from './components/sections/1_SectionText.svelte';
  import GenericSection from './components/sections/GenericSection.svelte';
  import SectionTwoScrolly from './components/scrolly/step_map/StepMapScrolly.svelte';  import StepCardScrolly from './components/scrolly/step_card/StepCardScrolly.svelte';
  import ContinuousRouteScrolly from './components/scrolly/continuous_route/ContinuousRouteScrolly.svelte';
  import ConclusionSection from './components/sections/99_ConclusionText.svelte';
  import WhatAreCOPs from './components/sections/WhatAreCOPs.svelte';
</script>

<Header filled={true} center={false} />
<main style="padding-top: 30px;"> <!-- Add padding to account for fixed header -->
  <HeroSection />
  <WhatAreCOPs />
  <UHCFooter />
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
