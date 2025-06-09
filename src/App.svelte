<script>
  // Layout and theming
  import { setContext } from 'svelte';
  import { themes } from './config.js';
  import { setColors } from './utils.js';
  import UHCHeader from './layout/UHCHeader.svelte';
  import UHCFooter from './layout/UHCFooter.svelte';
  import Divider from './layout/Divider.svelte';
  
  // Set up theming
  let theme = 'light';
  setContext('theme', theme);
  setColors(themes, theme);

  // Component imports
  import HeroSection from './components/sections/HeroSection.svelte';
  import IntroSection from './components/sections/IntroSection.svelte';
  import StepOneSection from './components/sections/StepOneSection.svelte';
  import StepTwoSection from './components/sections/StepTwoSection.svelte';
  import StepThreeSection from './components/sections/StepThreeSection.svelte';
  import StepFourSection from './components/sections/StepFourSection.svelte';
  import ConclusionSection from './components/sections/ConclusionSection.svelte';
  import Step4Scrolly from './components/scrolly/step4_scrolly/Step4Scrolly.svelte';
  import Step3Scrolly from './components/scrolly/step3_scrolly/Step3Scrolly.svelte';
</script>


 
<UHCHeader filled={true} center={false} />
<HeroSection />
<IntroSection />
<StepOneSection />
<StepTwoSection />
<StepThreeSection />
<Step3Scrolly />
<StepFourSection/>
<Step4Scrolly />
<Divider />
<ConclusionSection />
<UHCFooter />

<style>
  /* Global scrolly styles */
  :global(svelte-scroller-foreground) {
    pointer-events: none !important;
  }
  :global(svelte-scroller-foreground section div) {
    pointer-events: all !important;
  }
</style>
