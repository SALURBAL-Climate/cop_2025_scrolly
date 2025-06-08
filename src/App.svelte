<script> 
  
  // These come from libs (IN git, custom/modified for your project)
  import { getTopo } from './utils.js';

  // Layout
  import { setContext } from 'svelte';
  import { themes } from './config.js';
  import { setColors } from './utils.js';
  import UHCHeader from './layout/UHCHeader.svelte';
  import UHCFooter from './layout/UHCFooter.svelte';
  import Divider from './layout/Divider.svelte';
  
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);

  // State - only what's needed for coordination between components
  let map_static_1;
  let center = {};
  let hovered;

  // Scroller coordination - shared state between multiple scrolly components
  let id = {}; // Object to hold visible section IDs of Scroller components

  // Component imports
  import HeroSection from './components/sections/HeroSection.svelte';
  import IntroSection from './components/sections/IntroSection.svelte';
  import StepOneSection from './components/sections/StepOneSection.svelte';
  import StepTwoSection from './components/sections/StepTwoSection.svelte';
  import StepThreeSection from './components/sections/StepThreeSection.svelte';
  import StepFourSection from './components/sections/StepFourSection.svelte';
  import ConclusionSection from './components/sections/ConclusionSection.svelte';
  import CityBoundariesScrolly from './components/scrolly/CityBoundariesScrolly.svelte';
  import GeographicHierarchyScrolly from './components/scrolly/GeographicHierarchyScrolly.svelte';
</script>

<UHCHeader filled={true} center={false} />
<HeroSection />
<IntroSection />
<StepOneSection 
  bind:map_static_1
  bind:center
  bind:hovered
/>
<StepTwoSection />
<StepThreeSection />
<CityBoundariesScrolly bind:id />
<StepFourSection />
<GeographicHierarchyScrolly bind:id />
<Divider />
<ConclusionSection />
<UHCFooter />

<style>
  :global(svelte-scroller-foreground) {
    pointer-events: none !important;
  }
  :global(svelte-scroller-foreground section div) {
    pointer-events: all !important;
  }
</style>
