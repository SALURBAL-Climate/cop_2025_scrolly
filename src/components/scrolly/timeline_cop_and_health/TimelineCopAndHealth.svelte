<script>
  import { onMount } from 'svelte';
  import Scroller from '../../../layout/Scroller.svelte';
  import { timelineData } from './data.js';
  let y = 0;
  let innerHeight = 0;
  let containerElement;
  let progress = 0;
  let isInView = false;
  let currentStep = 0;

  // Calculate container height based on screen size
  // Desktop: Fixed height for scrolly experience
  // Mobile/Tablet: Auto height to fit content
  let windowWidth = 0;

  $: isMobile = windowWidth <= 900;
  $: containerHeight = isMobile
    ? 'auto' // Mobile: Let content determine height
    : timelineData.length * 100 + 120; // Desktop: Fixed scrolly height

  // Track scroll within the component bounds
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
      currentStep = timelineData.length - 1;
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
      timelineData.length - 1,
      Math.floor(progress * timelineData.length),
    );
  }

  $: if (typeof window !== 'undefined') updateProgress();
  onMount(() => {
    updateProgress();
    console.log(
      `Timeline container height: ${containerHeight}${typeof containerHeight === 'string' ? '' : 'vh'} for ${timelineData.length} steps`,
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

<div class="timeline-wrapper">
  <div
    class="continuous-timeline-container"
    bind:this={containerElement}
    style="--container-height: {typeof containerHeight === 'string'
      ? containerHeight
      : containerHeight + 'vh'};"
  >
    <Scroller top={0} bottom={1} threshold={0.5}>
      <div slot="background">
        <div class="background-wrapper">
          <div class="timeline-visualization" class:visible={isInView}>
            <!-- Vertical timeline line with flags -->
            <div class="timeline-track">
              <div class="track-background"></div>
              <div
                class="track-progress"
                style="height: {Math.min(100, progress * 100)}%"
              ></div>
              <!-- COP timeline steps positioned within the track -->
              <div class="timeline-dots">
                {#each timelineData as step, i}
                  <div
                    class="timeline-dot {progress >=
                    i / (timelineData.length - 1)
                      ? 'visited'
                      : ''} {currentStep === i ? 'current' : ''}"
                    style="top: calc({5 +
                      (i / (timelineData.length - 1)) * 84}% )"
                  >
                    <div class="dot-flag">
                      <img
                        src={step.flag_image}
                        alt={step.flagAlt || step.step_name}
                        class="flag-icon"
                      />
                    </div>
                    <div class="dot-text">{step.year} {step.location}</div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div slot="foreground">
        <div class="story-content">
          {#each timelineData as step, i}
            <section class="story-section">
              <!-- Content area -->
              <div class="content-area {currentStep === i ? 'current' : ''}">
                <div class="step-header">
                  <div class="title-location-group">
                    {#if step.location}
                      <div class="location-tag">
                        {step.year}
                        {step.location}
                      </div>
                    {/if}
                    <h3 class="step-title">
                      {#if isMobile}
                        {step.step_title_mobile}
                      {:else}
                        {step.step_title}
                      {/if}
                    </h3>
                  </div>
                  <div class="step-icon-mobile">
                    <img
                      src={step.flag_image}
                      alt={step.flagAlt || step.step_name}
                      class="mobile-flag-icon"
                    />
                  </div>
                </div>
                <p class="story-paragraph">{@html step.description}</p>
              </div>
            </section>
          {/each}
        </div>
      </div>
    </Scroller>
  </div>
</div>

<style>
  .timeline-wrapper {
    position: relative;
    width: 100%;
    overflow: hidden;
    z-index: 1;
    /* border: 3px solid red; */
  }

  .continuous-timeline-container {
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

  .timeline-visualization {
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
    justify-content: center; /* Horizontally center the timeline line within the 50% */
    align-items: center; /* Vertically center the content */
    box-sizing: border-box;
  }

  .timeline-visualization.visible {
    opacity: 1;
  }

  .timeline-track {
    position: relative;
    margin-top: 14vh;
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

  .timeline-dots {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .timeline-dot {
    position: absolute;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .dot-flag {
    width: 25px;
    height: 25px;
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
    overflow: hidden;
    transform: translateX(-50%);
  }
  .timeline-dot.visited .dot-flag {
    border-color: #2f7ed3;
    border-width: 1px;
    background: #ffffff;
    transform: translateX(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(47, 126, 211, 0.3);
  }

  /* Current step effect - make it bigger and more prominent */
  .timeline-dot.current .dot-flag {
    transform: translateX(-50%) scale(2);
    border-color: #2f7ed3;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(47, 126, 211, 0.4);
    animation: pulse 2s infinite;
    z-index: 44;
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

  .flag-icon {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    opacity: 0.7;
    transition: all 0.3s ease;
    filter: grayscale(100%) brightness(0.6); /* Grey filter for non-active steps */
  }

  .timeline-dot.visited .flag-icon {
    opacity: 0.8;
    filter: grayscale(100%) brightness(0.7); /* Keep grey filter for visited steps, slightly brighter */
  }
  .timeline-dot.current .flag-icon {
    width: 40px;
    height: 40px;
    opacity: 1;
    filter: grayscale(0%) brightness(1.2) contrast(1.1); /* Only current step gets full color */
  }
  .dot-text {
    margin-left: 2rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #9ca3af;
    white-space: nowrap;
    opacity: 0.8;
    transition: all 0.3s ease;
  }

  .timeline-dot.visited .dot-text {
    color: #6b7280;
    opacity: 0.8;
    font-weight: 600;
  }

  .timeline-dot.current .dot-text {
    font-size: 1.1rem;
    font-weight: 700;
    color: #2f7ed3;
    opacity: 1;
    transform: scale(1.1);
  }
  .story-content {
    position: relative;
    z-index: 5;
    margin-left: 50%; /* Start after the 50% timeline area */
    width: 50%; /* Take remaining 50% */
    padding: 0 2rem; /* Reduced padding for wider content */
    box-sizing: border-box;
  }

  .story-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 2rem 0;
  }

  .content-area {
    width: 100%;
    max-width: none; /* Remove max-width constraint */
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 2.5rem;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .content-area.current {
    border: 5px solid #2f7ed3;
    box-shadow: 0 12px 30px rgba(145, 147, 150, 0.15);
  }

  .step-header {
    /* margin-bottom: 0.25rem; */
    /* display: flex;
    align-items: center;
    justify-content: space-between; */
    /* gap: 1.5rem; */
    margin: 0;
    padding: 0 0;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
    /* border: 1px solid blue; */
  }

  .title-location-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    /* border: 1px solid red; */
    /* gap: 0.5rem; */
    margin: 0;
    padding: 0;
    flex: 1;
  }

  .step-icon-mobile {
    display: none; /* Hidden on desktop */
  }

  .mobile-flag-icon {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
    background: #ffffff;
    border: 2px solid #2f7ed3;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  .step-title {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    margin: 0;
    line-height: 1.2;
  }

  .location-tag {
    display: inline-block;
    /* background: #; */
    color: #2f7ed3;
    /* padding: 0.4rem 1rem; */
    margin: 0;
    padding: 0 0;
    /* border: 1px solid red; */
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;
  }
  .story-paragraph {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #374151;
    margin: 0;
    width: 100%; /* Full width text */
    text-align: left; /* Justify text for better alignment */
  }

  .story-paragraph a {
    color: #2f7ed3;
    font-weight: 600;
    text-decoration: none;
  }

  .story-paragraph a:hover {
    text-decoration: underline;
  } /* Responsive design - Mobile and Tablet (consolidated) */
  @media (max-width: 900px) {
    /* Hide timeline visualization for mobile/tablet */
    .timeline-visualization {
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
    .content-area {
      width: 100%;
      max-width: 600px;
      padding: 1.5rem;
    } 
    
    .content-area.current {
      border: 0px solid #2f7ed3;
      box-shadow: 0 0px 0px rgba(145, 147, 150, 0.15);
    }
    /* Step header maintains horizontal layout on mobile */
    .step-header {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0;
      margin: 0;
      padding: 0 0;
    }

    .title-location-group {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem; /* Keep title and badge close together */
      flex: 1;
    }

    .step-icon-mobile {
      display: flex; /* Show icon on mobile */
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .step-title {
      font-size: 1.6rem;
    }

    .story-paragraph {
      font-size: 1rem;
    }

    .location-tag {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
      display: none;
    }
  }

  /* Phone-specific adjustments only */
  @media (max-width: 480px) {
    .step-title {
      font-size: 1.4rem;
    }

    .content-area {
      padding: 1.25rem;
    }
  }
</style>
