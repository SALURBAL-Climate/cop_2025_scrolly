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
  import RouteWhatHappensAtCop from './components/scrolly/route_what_happens_at_cop/RouteWhatHappensAtCop.svelte';
</script>

<Header filled={true} center={false} />
<main style="padding-top: 30px;"> <!-- Add padding to account for fixed header -->
  <HeroSection />
  <Section_1_WhatAreCOPs />
  <Section_2_WhatHappensAtCOP />
  <RouteWhatHappensAtCop/>
  <Divider />
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
 <div style="border: 12px solid red; margin: 2rem auto; padding: 2rem; max-width: 900px;">
  <h1>THE NEXT SECTION</h1>
  <p> epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?epsom Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eaque quia ipsa in, doloremque maxime fugit quibusdam debitis tempore quaerat odio consectetur quos nesciunt repellat, dolor odit ducimus sit ratione?</p>
 </div>
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
