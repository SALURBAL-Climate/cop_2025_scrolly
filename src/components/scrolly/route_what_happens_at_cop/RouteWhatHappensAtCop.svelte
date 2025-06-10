<script>
  import { onMount } from 'svelte';
  import Scroller from '../../../layout/Scroller.svelte';
  import { copRouteData } from './data.js';
  
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
    
    // Component is visible only when the container is in view
    const isCompletelyAbove = rect.bottom < 0;
    const isCompletelyBelow = rect.top > windowHeight;
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
    
    // Calculate progress 
    let rawProgress = scrollStart / scrollableHeight;
    progress = Math.min(1, Math.max(0, rawProgress));
  }

  $: currentStep = Math.floor(progress * copRouteData.length);
  $: if (typeof window !== 'undefined') updateProgress();

  onMount(() => {
    updateProgress();
  });
</script>

<svelte:window bind:scrollY={y} bind:innerHeight on:scroll={updateProgress} />

<div class="route-wrapper">
  <div class="continuous-route-container" bind:this={containerElement}>
    <Scroller top={0} bottom={1} threshold={0.5}>
      <div slot="background">
        <div class="background-wrapper">
          <div class="route-visualization" class:visible={isInView}>
            <!-- Vertical route line with dots -->
            <div class="route-track">
              <div class="track-background"></div>
              <div 
                class="track-progress" 
                style="height: {Math.min(100, progress * 100)}%"
              ></div>
              
              <!-- COP process steps positioned within the track -->
              <div class="location-dots">
                {#each copRouteData as step, i}
                  <div 
                    class="location-dot {progress >= (i / (copRouteData.length - 1)) ? 'visited' : ''}" 
                    style="top: {(i / (copRouteData.length - 1)) * 85 + 7.5}%"
                  >
                    <div class="dot-circle">
                      <span class="step-number">{i + 1}</span>
                    </div>
                    <div class="location-name">{step.name}</div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div slot="foreground">
        <div class="story-content">
          {#each copRouteData as step, i}
            <section class="story-section">
              <div class="story-text">
                <div class="step-header">
                  <span class="step-badge">Step {i + 1}</span>
                  <h3 class="step-title">{step.name}</h3>
                </div>
                <p class="story-paragraph">{step.description}</p>
              </div>
            </section>
          {/each}
        </div>
      </div>
    </Scroller>
  </div>
</div>

<style>  .route-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 1;
  }  .continuous-route-container {
    position: relative;
    width: 100%;
    height: 300vh; /* Ensure enough scrolling space */
    background: #fff;
    overflow: hidden;
    z-index: 1;
    box-sizing: border-box;
  }

  .background-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }.route-visualization {
    position: sticky;
    left: 0;
    top: 5vh; /* Stick 5vh from the top of viewport */
    height: 90vh; /* Use 90vh for proper sizing */
    width: 50%; /* Take 50% of screen width */
    z-index: 2;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    justify-content: center; /* Horizontally center the route line within the 50% */
    align-items: center; /* Vertically center the content */
    box-sizing: border-box;
  }

  .route-visualization.visible {
    opacity: 1;
  }
  .route-header {
    text-align: center;
    margin-bottom: 2rem; /* Reduced from 3rem */
    max-width: 400px;
  }

  .route-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #2f7ed3;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  .route-subtitle {
    font-size: 1rem;
    color: #64748b;
    margin: 0;
    font-weight: 500;
  }  .route-track {
    position: relative;
    width: 6px;
    height: 70vh; /* Use 70vh for good proportion within 90vh container */
    max-height: none; /* Remove max-height restriction */
  }

  .track-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #cbd5e1;
    border-radius: 3px;
  }

  .track-progress {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(180deg, #2f7ed3 0%, #1e40af 100%);
    border-radius: 3px;
    transition: height 0.2s ease-out;
  }

  .location-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .location-dot {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .dot-circle {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
  }

  .location-dot.visited .dot-circle {
    border-color: #2f7ed3;
    background: #2f7ed3;
    transform: scale(1.1);
  }

  .step-number {
    font-size: 0.75rem;
    font-weight: 700;
    color: #64748b;
  }

  .location-dot.visited .step-number {
    color: #ffffff;
  }

  .location-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #374151;
    white-space: nowrap;
    background: rgba(255, 255, 255, 0.9);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }

  .location-dot.visited .location-name {
    background: rgba(47, 126, 211, 0.1);
    color: #2f7ed3;
    border-color: rgba(47, 126, 211, 0.3);
  }
  .story-content {
    position: relative;
    z-index: 5;
    margin-left: 50%; /* Start after the 50% route area */
    width: 50%; /* Take remaining 50% */
    padding: 0 3rem; /* Add padding for better readability */
    box-sizing: border-box;
  }

  .story-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
  }

  .story-text {
    max-width: 600px;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  .step-header {
    /* margin-bottom: 1.5rem; */
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .step-badge {
    display: inline-block;
    background: #2f7ed3;
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.8rem;
    font-weight: 600;
    margin-bottom: 0; /* Remove bottom margin since they're now horizontal */
    flex-shrink: 0; /* Prevent badge from shrinking */
  }

  .step-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0; /* Remove all margins since they're now horizontal */
    line-height: 1.2;
  }

  .story-paragraph {
    font-size: 1.1rem;
    line-height: 1.2;
    color: #374151;
    margin: 0;
  }

  .conclusion {
    border-top: 2px solid #e2e8f0;
    margin-top: 2rem;
  }

  .conclusion-title {
    font-size: 1.75rem;
    font-weight: 700;
    color: #2f7ed3;
    margin-bottom: 1.5rem;
    line-height: 1.2;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .route-visualization {
      position: relative;
      width: 100%;
      height: auto;
      padding: 1.5rem;
      margin-bottom: 2rem;
    }

    .story-content {
      margin-left: 0;
      width: 100%;
      padding: 1rem;
    }

    .story-section {
      min-height: auto;
      padding: 1rem 0;
    }

    .story-text {
      padding: 1.5rem;
    }

    .route-track {
      height: 40vh;
      max-height: 300px;
    }

    .route-title {
      font-size: 1.5rem;
    }

    .step-title {
      font-size: 1.5rem;
    }

    .location-name {
      font-size: 0.8rem;
      padding: 0.25rem 0.75rem;
    }
  }

  @media (max-width: 480px) {
    .route-header {
      margin-bottom: 2rem;
    }

    .route-title {
      font-size: 1.3rem;
    }

    .step-title {
      font-size: 1.3rem;
    }

    .story-paragraph {
      font-size: 1rem;
    }

    .story-text {
      padding: 1.25rem;
    }
  }
</style>
