<script>
  import { copRouteData } from '../scrolly/route_what_happens_at_cop/data.js';

  // COP Zones Explainer Component
  // Shows the Blue Zone and Green Zone differences with satellite imagery
  // Displays activity icons directly on the zones image

  // Filter out Pre-COP activities, only show activities that happen at the COP venue
  $: copActivities = copRouteData.filter((step) => step.location !== 'Pre-COP');
</script>

<div class="zones-explainer">
  <div class="zones-content">
    <!-- Desktop Layout (side by side) -->
    <div class="desktop-layout">
      <!-- Satellite Image with Zone Labels and Activity Icons -->
      <div class="zones-image-container">
        <div class="image-with-icons">
          <img
            src="./img/cop30/cop_zones.png"
            alt="COP zones satellite view showing Blue Zone and Green Zone areas"
            class="zones-image"
          />
          <!-- Activity icons positioned on their respective zones -->
          {#each copActivities as activity, index}
            <div
              class="zone-icon-overlay"
              style="top: {activity.coordinates.top}%; left: {activity
                .coordinates.left}%;"
            >
              <div class="icon-circle">
                <img
                  src={activity.icon}
                  alt={activity.iconAlt || activity.step_name}
                />
              </div>
              <span class="icon-tooltip">{activity.step_title}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Zone Descriptions -->
      <div class="zones-descriptions">
        <div class="zone-card blue-zone">
          <h3 class="zone-title blue-title">"Blue zone" activities:</h3>
          <p class="zone-description">
            Access to the Blue Zone is restricted to accredited delegates only. Formal negotiations, country pavilions, and official side events take place here and are managed by the UNFCCC.
          </p>
        </div>

        <div class="zone-card green-zone">
          <h3 class="zone-title green-title">Green zone" activities:</h3>
          <p class="zone-description">
            Open to the public, managed by the host country, and includes additional events, workshops, and exhibitions hosted by private sector and NGO representatives.
          </p>
        </div>
      </div>
    </div>

    <!-- Mobile Layout (stacked: blue → image → green) -->
    <div class="mobile-layout">
      <!-- Blue Zone first -->
      <div class="zone-card blue-zone">
        <h3 class="zone-title blue-title">"Blue zone activities"</h3>
        <p class="zone-description">
          Access to the Blue Zone is restricted to accredited delegates only.
          Formal negotiations, country pavilions, and official side events take
          place here and are managed by the UNFCCC.
        </p>
      </div>
      <!-- Image in the middle -->
      <div class="zones-image-container">
        <div class="image-with-icons">
          <img
            src="./img/cop30/cop_zones.png"
            alt="COP zones satellite view showing Blue Zone and Green Zone areas"
            class="zones-image"
          />
          <!-- Activity icons positioned on their respective zones -->
          {#each copActivities as activity, index}
            <div
              class="zone-icon-overlay"
              style="top: {activity.coordinates.top}%; left: {activity
                .coordinates.left}%;"
            >
              <div class="icon-circle">
                <img
                  src={activity.icon}
                  alt={activity.iconAlt || activity.step_name}
                />
              </div>
              <span class="icon-tooltip">{activity.step_title}</span>
            </div>
          {/each}
        </div>
      </div>

      <!-- Green Zone last -->
      <div class="zone-card green-zone">
        <h3 class="zone-title green-title">"Green zone activities"</h3>
        <p class="zone-description">
          The Green Zone is open to the public, managed by the host country, and
          includes additional events, workshops, and exhibitions, including
          activities organized by private sector and NGO representatives.
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .zones-explainer {
    width: 100%;
    padding: 2rem 0;
    background: transparent;
    margin: 2rem 0;
    box-sizing: border-box;
  }
  .zones-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
  }

  /* Desktop Layout */
  .desktop-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  /* Mobile Layout */
  .mobile-layout {
    display: none;
    flex-direction: column;
    gap: 2rem;
  }
  .zones-image-container {
    text-align: center;
    position: relative;
  }

  .image-with-icons {
    position: relative;
    display: inline-block;
  }

  .zones-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
    display: block;
  }
  /* Icon overlays positioned on the zones using coordinate data */
  .zone-icon-overlay {
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
  .icon-circle {
    width: 70px;
    height: 70px;
    background: rgba(255, 255, 255, 0.98);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
    /* border: 3px solid #fff; */
    transition: all 0.3s ease;
    animation: pulse 2s ease-in-out infinite;
  }

  .icon-circle:hover {
    transform: scale(1.3);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    /* animation-play-state: paused; */
  }

  .icon-circle img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  .icon-tooltip {
    position: absolute;
    top: 60px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 1rem;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  .zone-icon-overlay:hover .icon-tooltip {
    opacity: 1;
  }

  .zones-descriptions {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    align-items: stretch;
  }
  .zone-card {
    background: transparent;
    padding: 1rem 0;
    border-left: 4px solid;
    padding-left: 1.5rem;
  }

  .blue-zone {
    border-left-color: #2f7ed3;
  }

  .green-zone {
    border-left-color: #10b981;
  }
  .zone-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
    line-height: 1.2;
    margin-top: 0;
  }

  .blue-title {
    color: #2f7ed3;
  }

  .green-title {
    color: #10b981;
  }
  .zone-description {
    font-size: 1rem;
    line-height: 1.5;
    color: #374151;
    margin: 0;
  } /* Responsive design - Mobile and Tablet (consolidated) */
  @media (max-width: 900px) {
    .zones-explainer {
      padding: 2rem 0;
      margin: 1.5rem 0; 
    }
    .zones-content {
      padding: 0;
      box-sizing: border-box;
    }

    /* Hide desktop layout, show mobile layout */
    .desktop-layout {
      display: none;
    }

    .mobile-layout {
      display: flex;
    }

    .zones-descriptions {
      gap: 1.5rem;
    }

    .zone-card {
      padding: 1rem 0;
      padding-left: 1.5rem;
      padding-right: 0.5rem;
      box-sizing: border-box;
    }

    .zone-title {
      font-size: 1.2rem;
    }

    .zone-description {
      font-size: 0.95rem;
    }

    .icon-circle {
      width: 50px;
      height: 50px;
    }

    .icon-circle img {
      width: 35px;
      height: 35px;
    }

    .icon-tooltip {
      font-size: 0.7rem;
      top: 50px;
    }
  } /* Phone-specific adjustments only */
  @media (max-width: 480px) {
    .zones-explainer {
      padding: 1.5rem 0;
    }

    .zones-content {
      padding: 0;
    }

    .zone-card {
      padding-right: 0.75rem;
    }

    .icon-circle {
      width: 45px;
      height: 45px;
    }

    .icon-circle img {
      width: 28px;
      height: 28px;
    }

    .icon-tooltip {
      font-size: 0.65rem;
      top: 45px;
    }
  } /* Very narrow screens (Galaxy S22, etc.) */
  @media (max-width: 380px) {
    .zones-explainer {
      padding: 1rem 0;
    }

    .zones-content {
      padding: 0;
    }

    .mobile-layout {
      gap: 1.5rem;
    }

    .zone-card {
      padding: 0.75rem 0;
      padding-left: 1rem;
      padding-right: 0.5rem;
    }

    .zone-title {
      font-size: 1.1rem;
      word-wrap: break-word;
      hyphens: auto;
    }

    .zone-description {
      font-size: 0.9rem;
      line-height: 1.4;
    }

    .zones-image {
      max-width: 100%;
    }

    .icon-circle {
      width: 40px;
      height: 40px;
    }

    .icon-circle img {
      width: 24px;
      height: 24px;
    }

    .icon-tooltip {
      font-size: 0.6rem;
      top: 40px;
      padding: 0.2rem 0.4rem;
    }
  }
</style>
