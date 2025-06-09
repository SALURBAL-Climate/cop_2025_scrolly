<script>
  import { onMount } from 'svelte';
  import Scroller from '../../../layout/Scroller.svelte';
  import { routeData } from './data.js';
  let y = 0;
  let innerHeight = 0;
  let containerElement;
  let progress = 0;
  let isInView = false;
  // Track scroll within the component bounds
  function updateProgress() {
    if (!containerElement) return;
    
    const rect = containerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Check if component is in view with more precise bounds
    const isCompletelyAbove = rect.bottom < windowHeight * 0.2; // Hide when mostly scrolled past
    const isCompletelyBelow = rect.top > windowHeight * 0.8; // Show when mostly in view
    isInView = !isCompletelyAbove && !isCompletelyBelow;
    
    // Only calculate progress when the component is in view
    if (isCompletelyAbove || isCompletelyBelow) {
      if (isCompletelyAbove) progress = 1; // Completed
      if (isCompletelyBelow) progress = 0; // Not started
      return;
    }
    
    // Calculate how much of the component has been scrolled through
    const scrollStart = Math.max(0, -rect.top);
    const scrollableHeight = Math.max(1, rect.height - windowHeight);
    
    // Add some easing at the end to prevent abrupt cutoff
    let rawProgress = scrollStart / scrollableHeight;
    progress = Math.min(1, Math.max(0, rawProgress));
    
    // Fade out when approaching the end
    if (rawProgress > 0.85) {
      const fadeProgress = (rawProgress - 0.85) / 0.15;
      isInView = isInView && fadeProgress < 0.8;
    }
  }

  $: currentStep = Math.floor(progress * routeData.length);
  $: if (typeof window !== 'undefined') updateProgress();

  onMount(() => {
    updateProgress();
  });
</script>

<svelte:window bind:scrollY={y} bind:innerHeight on:scroll={updateProgress} />

<div class="route-wrapper ">
  <div class="continuous-route-container" bind:this={containerElement}>
    <Scroller top={0} bottom={1} threshold={0.5}>      <div slot="background">
        <div class="route-visualization" class:visible={isInView}>
          <!-- Vertical route line with dots inside -->
          <div class="route-track">
            <div class="track-background"></div>
            <div 
              class="track-progress" 
              style="height: {Math.min(100, progress * 100)}%"
            ></div>
              <!-- Location dots positioned within the track -->
            <div class="location-dots">
              {#each routeData as city, i}
                <div 
                  class="location-dot {progress >= (i / (routeData.length - 1)) ? 'visited' : ''}" 
                  style="top: {(i / (routeData.length - 1)) * 90 + 5}%"
                >
                  <div class="dot-circle"></div>
                  <div class="location-name">{city.name}</div>
                </div>
              {/each}
            </div>
          </div>
        </div>
      </div>

      <div slot="foreground">
        <div class="story-content">
          {#each routeData as city, i}
            <section class="story-section">
              <div class="story-text">
                <h2>{city.name}</h2>
                <p class="story-paragraph">{city.description}</p>
        
              </div>
            </section>
          {/each}
            <!-- Closing section -->
          <section class="story-section conclusion">
            <div class="story-text">
              <h2>Conclusion E.5</h2>
              <p class="story-paragraph">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
            </div>
          </section>
        </div>
      </div>
    </Scroller>
  </div>
</div>

<style>
  .route-wrapper {
    /* border: 1px solid black; */
    position: relative;
    overflow: hidden;
    z-index: 1;
  } 
   .continuous-route-container {
    position: relative;
    height: 350vh; /* Reduced from 400vh */
    width: 100vw; /* Ensure full viewport width */
    background: #fff;
    overflow: hidden;
    z-index: 1;
    box-sizing: border-box;
  }  .route-visualization {
    position: fixed;
    left: 0;
    top: 5vh; /* Add 5% padding at top */
    height: 90vh; /* Reduce height to 90% for top/bottom padding */
    width: 30%; /* Take 30% of screen width */
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center; /* Horizontally center the route line within the 30% */
    align-items: flex-start;
    box-sizing: border-box;
  }

  .route-visualization.visible {
    opacity: 1;
  }  .route-track {
    position: relative;
    width: 2px;
    height: 100%;
    border: 1px solid green; /* Debug border around the track */
    background-color: rgba(0, 255, 0, 0.1); /* Light green background */
  }

  .track-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    background-color: #ddd;
  }

  .track-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    background-color: #f4a261;
    transition: height 0.1s ease-out;
  }  .location-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 100%;
    pointer-events: none; /* Ensure dots don't interfere */
  }

  .location-dot {
    position: absolute;
    left: 1px; /* Center on the 2px track (1px from left edge) */
    transform: translateX(-50%) translateY(-50%); /* Center both horizontally and vertically */
    width: 0;
    height: 0;
  }

  .dot-circle {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #ddd;
    border: 2px solid #fff;
    transition: all 0.3s ease;
  }

  .location-dot.visited .dot-circle {
    background-color: #f4a261;
    transform: scale(1.3);
  }

  .location-name {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    font-family: 'nyt-franklin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 13px;
    font-weight: 500;
    color: #333;
    white-space: nowrap;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }

  .location-dot.visited .location-name {
    opacity: 1;
    font-weight: 600;
  }

  .story-content {
    position: relative;
    z-index: 5;
    margin-left: 30%; /* Start after the 30% route area */
    width: 70%; /* Take remaining 70% */
    padding: 0 3rem; /* Add padding for better readability */
    box-sizing: border-box;
  }

  .story-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 2rem 0;
  }
  .story-text {
    max-width: 100%; /* Use full available width */
    font-family: 'nyt-imperial', 'nyt-franklin', Georgia, serif;
    line-height: 1.6;
  }

  .story-text h2 {
    font-family: 'nyt-franklin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 28px;
    font-weight: 700;
    color: #121212;
    margin: 0 0 20px 0;
    line-height: 1.2;
  }

  .story-paragraph {
    font-size: 18px;
    line-height: 1.7;
    color: #333;
    margin: 0 0 24px 0;
    font-weight: 400;
  }

  .city-facts {
    margin-top: 24px;
    padding: 16px;
    background-color: #f8f8f8;
    border-left: 3px solid #f4a261;
  }

  .fact-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-size: 14px;
  }

  .fact-label {
    font-weight: 600;
    color: #666;
    font-family: 'nyt-franklin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .fact-value {
    color: #333;
    font-family: 'nyt-franklin', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .conclusion {
    background: linear-gradient(180deg, rgba(244, 162, 97, 0.05) 0%, rgba(244, 162, 97, 0.15) 100%);
    border-radius: 8px;
    margin: 2rem 0;
  }

  .conclusion .story-text {
    padding: 2rem;
  }
  /* Responsive design */
  @media (max-width: 768px) {
    .route-visualization {
      width: 25%; /* Slightly smaller on tablets */
    }

    .story-content {
      margin-left: 25%;
      width: 75%;
      padding: 0 2rem;
    }

    .story-text h2 {
      font-size: 24px;
    }

    .story-paragraph {
      font-size: 16px;
    }

    .location-name {
      left: 15px;
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .route-visualization {
      width: 20%; /* Even smaller on mobile */
    }

    .story-content {
      margin-left: 20%;
      width: 80%;
      padding: 0 1rem;
    }

    .story-text {
      max-width: none;
    }

    .story-text h2 {
      font-size: 20px;
    }

    .story-paragraph {
      font-size: 15px;
    }

    .location-name {
      display: none; /* Hide location names on very small screens */
    }

    .city-facts {
      padding: 12px;
    }

    .fact-item {
      flex-direction: column;
      margin-bottom: 12px;
    }
  }
</style>
