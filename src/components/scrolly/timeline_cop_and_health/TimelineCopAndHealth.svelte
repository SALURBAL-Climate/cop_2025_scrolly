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

  // Calculate container height based on number of steps
  // Each step gets a full viewport height for comfortable scrolling
  // Plus additional space for smooth transitions and conclusion
  // Formula: (number_of_steps × 100vh) + buffer
  // This ensures each step has enough scroll space to be fully appreciated
  $: containerHeight = timelineData.length * 100 + 60; // Base: 100vh per step + 60vh buffer

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
    currentStep = Math.min(timelineData.length - 1, Math.floor(progress * timelineData.length));
  }

  $: if (typeof window !== 'undefined') updateProgress();

  onMount(() => {
    updateProgress();
    console.log(
      `Timeline container height auto-calculated: ${containerHeight}vh for ${timelineData.length} steps`,
    );
  });
</script>

<svelte:window bind:scrollY={y} bind:innerHeight on:scroll={updateProgress} />

<div class="timeline-wrapper">
  <div
    class="continuous-timeline-container"
    bind:this={containerElement}
    style="--container-height: {containerHeight}vh;"
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
                    style="top: calc({8 + (i / (timelineData.length - 1)) * 84}% - 37.5px)"
                  >
                    <div class="dot-flag">
                      <img src={step.flag_image} alt={step.step_name} class="flag-icon" />
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>      <div slot="foreground">
        <div class="story-content">
          {#each timelineData as step, i}
            <section class="story-section">
              <div class="content-layout">
                <!-- Content area -->
                <div class="content-area">
                  <div class="title-row">
                    <h3 class="step-title">{step.step_title}</h3>
                    <div class="location-tag">{step.location}</div>
                  </div>
                  <p class="story-paragraph">{step.description}</p>
                </div>
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
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .dot-flag {
    width: 50px;
    height: 50px;
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
  }

  .timeline-dot.visited .dot-flag {
    border-color: #2f7ed3;
    background: #ffffff;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(47, 126, 211, 0.3);
  }

  /* Current step effect - make it bigger and more prominent */
  .timeline-dot.current .dot-flag {
    transform: scale(1.3);
    border-color: #2f7ed3;
    background: #ffffff;
    box-shadow: 0 6px 20px rgba(47, 126, 211, 0.4);
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% {
      box-shadow: 0 6px 20px rgba(47, 126, 211, 0.4);
    }
    50% {
      box-shadow: 0 8px 25px rgba(47, 126, 211, 0.6);
    }
  }

  .flag-icon {
    width: 60px;
    height: 60px;
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
    width: 65px;
    height: 65px;
    opacity: 1;
    filter: grayscale(0%) brightness(1.2) contrast(1.1); /* Only current step gets full color */
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

  .content-layout {
    width: 100%;
    max-width: none; /* Remove max-width constraint */
  }

  .content-area {
    width: 100%;
  }

  .title-row {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
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
    background: #10b981;
    color: white;
    padding: 0.4rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .story-paragraph {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #374151;
    margin: 0;
    width: 100%; /* Full width text */
  }  /* Responsive design */
  @media (max-width: 768px) {
    .timeline-visualization {
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
      padding: 2rem 0;
    }

    .content-layout {
      text-align: center;
    }

    .timeline-track {
      height: 40vh;
      max-height: 300px;
    }

    .step-title {
      font-size: 1.6rem;
    }

    .title-row {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }

    .dot-flag {
      width: 70px;
      height: 70px;
    }

    .flag-icon {
      width: 55px;
      height: 55px;
    }
  }

  @media (max-width: 480px) {
    .step-title {
      font-size: 1.4rem;
    }

    .story-paragraph {
      font-size: 1rem;
      text-align: left;
    }

    .location-tag {
      font-size: 0.8rem;
      padding: 0.3rem 0.8rem;
    }

    .content-layout {
      text-align: left;
    }

    .story-section {
      padding: 1.5rem 0;
    }

    .title-row {
      align-items: flex-start;
    }
  }
</style>
