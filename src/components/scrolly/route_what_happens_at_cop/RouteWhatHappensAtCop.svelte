<script>
  import { onMount } from 'svelte';
  import Scroller from '../../../layout/Scroller.svelte';
  import { copRouteData } from './data.js';
  let y = 0;
  let innerHeight = 0;
  let containerElement;
  let progress = 0;
  let isInView = false;
  let currentStep = 0; // Calculate container height based on screen size
  // Desktop: Fixed height for scrolly experience
  // Mobile/Tablet: Auto height to fit content
  let windowWidth = 0;

  $: isMobile = windowWidth <= 900;
  $: containerHeight = isMobile
    ? 'auto' // Mobile: Let content determine height
    : copRouteData.length * 100 + 50; // Desktop: Fixed scrolly height
  function updateProgress() {
    if (!containerElement) return;

    const rect = containerElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Component is visible only when the container is in view
    const isCompletelyAbove = rect.bottom < 0;
    const isCompletelyBelow = rect.top > windowHeight;
    isInView = !isCompletelyAbove && !isCompletelyBelow;

    // Handle progress and currentStep calculation
    if (isCompletelyAbove) {
      // When scrolled completely past, keep the last step as current
      progress = 1;
      currentStep = copRouteData.length - 1;
      return;
    }

    if (isCompletelyBelow) {
      // Not started yet
      progress = 0;
      currentStep = 0;
      return;
    }

    // Calculate how much of the component has been scrolled through
    const scrollStart = Math.max(0, -rect.top);
    const scrollableHeight = Math.max(1, rect.height - windowHeight);

    // Calculate progress
    let rawProgress = scrollStart / scrollableHeight;
    progress = Math.min(1, Math.max(0, rawProgress));

    // Calculate current step based on progress
    currentStep = Math.min(
      copRouteData.length - 1,
      Math.floor(progress * copRouteData.length),
    );
  }
  $: if (typeof window !== 'undefined') updateProgress();
  onMount(() => {
    updateProgress();
    console.log(
      `Container height: ${containerHeight}${typeof containerHeight === 'string' ? '' : 'vh'} for ${copRouteData.length} steps`,
      `Device: ${windowWidth}px wide`,
      `Type: ${isMobile ? 'Mobile/Tablet' : 'Desktop'}`,
    );
  });
</script>

<svelte:window
  bind:scrollY={y}
  bind:innerHeight
  bind:innerWidth={windowWidth}
  on:scroll={updateProgress}
/>

<div class="route-wrapper">
  <div
    class="continuous-route-container"
    bind:this={containerElement}
    style="--container-height: {typeof containerHeight === 'string'
      ? containerHeight
      : containerHeight + 'vh'}; "
  >
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
                    class="location-dot {progress >=
                    i / (copRouteData.length - 1)
                      ? 'visited'
                      : ''} {currentStep === i ? 'current' : ''}"
                    style="top: calc({8 +
                      (i / (copRouteData.length - 1)) * 84}% - 37.5px)"
                  >
                    <div class="dot-icon">
                      <img
                        src={step.icon}
                        alt={step.step_name}
                        class="step-icon"
                      />
                    </div>
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
                  <div class="step-text-content" >
                    <span class="step-badge">Step {i + 1}</span>
                    <h3 class="step-title">{step.step_title}</h3>
                  </div>
                  <div class="step-icon-mobile" >
                    <img
                      src={step.icon}
                      alt={step.step_name}
                      class="mobile-step-icon"
                    />
                  </div>
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

<style>
  .route-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 1;
    /* border: 1px solid green; */
  }
  .continuous-route-container {
    position: relative;
    width: 100%;
    height: var(--container-height); /* Dynamically calculated based on steps */
    background: #d8e6ed;
    overflow: hidden;
    z-index: 1;
    box-sizing: border-box;
  }

  .background-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .route-visualization {
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

  .route-track {
    position: relative;
    margin-top: 10vh;
    width: 6px;
    height: 80vh; /* Consistent proportion of the 90vh visualization container */
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
    justify-content: center;
  }
  .dot-icon {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #cbd5e1;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .location-dot.visited .dot-icon {
    border-color: #2f7ed3;
    background: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(47, 126, 211, 0.3);
  }

  /* Current step effect - make it bigger and more prominent */
  .location-dot.current .dot-icon {
    width: 90px;
    height: 90px;
    transform: scale(1.1);
    border-color: #2f7ed3;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(47, 126, 211, 0.4);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%,
    100% {
      box-shadow: 0 6px 20px rgba(47, 126, 211, 0.4);
    }
    50% {
      box-shadow: 0 8px 25px rgba(47, 126, 211, 0.6);
    }
  }
  .step-icon {
    width: 75px;
    height: 75px;
    object-fit: contain;
    opacity: 0.7;
    transition: all 0.3s ease;
    filter: grayscale(100%) brightness(0.6); /* Grey filter for non-active steps */
  }

  .location-dot.visited .step-icon {
    opacity: 0.8;
    filter: grayscale(100%) brightness(0.7); /* Keep grey filter for visited steps, slightly brighter */
  }

  .location-dot.current .step-icon {
    width: 90px;
    height: 90px;
    opacity: 1;
    filter: grayscale(0%) brightness(1.2) contrast(1.1); /* Only current step gets full color */
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
    margin-bottom: 1.5rem; /* Add spacing between header and paragraph */
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .step-text-content {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex: 1;
  }

  .step-icon-mobile {
    display: none; /* Hidden on desktop */
  }

  .mobile-step-icon {
    width: 75px;
    height: 75px;
    object-fit: contain;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #2f7ed3;
    /* padding: 8px; */
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
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
    line-height: 1.7; /* Improved readability */
    color: #374151;
    margin: 0;
  } /* Responsive design - Mobile and Tablet (consolidated) */
  @media (max-width: 900px) {
    .continuous-route-container {
      /* border: 5px solid green; */
    }

    /* Hide route visualization for mobile/tablet */
    .route-visualization {
      display: none;
    }

    .story-content {
      margin-left: 0;
      width: 100%;
      padding: 1rem;
    }

    .story-section {
      min-height: auto;
      padding: 1rem 0;
      /* Center the cards horizontally */
      display: flex;
      justify-content: center;
    }

    .story-text {
      padding: 1.5rem;
      /* Ensure cards don't get too wide on tablets */
      max-width: 600px;
      width: 100%;
    } /* Change step header layout for mobile */
    .step-header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 1rem;
    }

    .step-text-content {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
      flex: 1;
    }

    .step-icon-mobile {
      display: flex; /* Show icon on mobile */
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .step-badge {
      margin-bottom: 0.5rem;
    }

    .step-title {
      font-size: 1.5rem;
    }

    .story-paragraph {
      font-size: 1rem;
    }
  }

  /* Phone-specific adjustments only */
  @media (max-width: 480px) {
    .step-title {
      font-size: 1.3rem;
    }

    .story-text {
      padding: 1.25rem;
    }
  }
</style>
