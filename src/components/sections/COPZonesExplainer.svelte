<script>
  import { copRouteData } from '../scrolly/route_what_happens_at_cop/data.js';
  
  // COP Zones Explainer Component
  // Shows the Blue Zone and Green Zone differences with satellite imagery
  // Displays activity icons directly on the zones image
  
  // Filter out Pre-COP activities, only show activities that happen at the COP venue
  $: copActivities = copRouteData.filter(step => step.location !== 'Pre-COP');
</script>

<div class="zones-explainer">
  <div class="zones-content">    <!-- Satellite Image with Zone Labels and Activity Icons -->
    <div class="zones-image-container">
      <div class="image-with-icons">
        <img
          src="/img/cop30/cop_zones.png"
          alt="COP zones satellite view showing Blue Zone and Green Zone areas"
          class="zones-image"
        />        <!-- Activity icons positioned on their respective zones -->
        {#each copActivities as activity, index}
          <div class="zone-icon-overlay" 
               style="top: {activity.coordinates.top}%; left: {activity.coordinates.left}%;">
            <div class="icon-circle">
              <img src={activity.icon} alt={activity.step_name} />
            </div>
            <span class="icon-tooltip">{activity.step_title}</span>
          </div>
        {/each}
      </div>
    </div>

    <!-- Zone Descriptions -->
    <div class="zones-descriptions">
      <div class="zone-card blue-zone">
        <h3 class="zone-title blue-title">"Blue zone activities"</h3>
        <p class="zone-description">
          Access restricted to accredited delegates only. Formal negotiations,
          country pavilions, and official side events take place and are managed
          by the UNFCCC.
        </p>
      </div>

      <div class="zone-card green-zone">
        <h3 class="zone-title green-title">"Green zone activities"</h3>
        <p class="zone-description">
          Open to the public, managed by the host country, includes additional
          events, workshops, and exhibitions by private sector and NGO
          representatives.
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
  }
  .zones-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
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
    width: 60px;
    height: 60px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    /* border: 1px solid #fff; */
    transition: all 0.3s ease;
  }

  .icon-circle:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  }

  .icon-circle img {
    width: 60px;
    height: 60px;
    object-fit: contain;
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
    font-size: 0.75rem;
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
  }
  /* Responsive design */
  @media (max-width: 768px) {
    .zones-explainer {
      padding: 2rem 0;
      margin: 1.5rem 0;
    }

    .zones-content {
      padding: 0 1rem;
      grid-template-columns: 1fr;
      gap: 2rem;
    }    .zones-descriptions {
      gap: 1.5rem;
    }

    .icon-circle {
      width: 40px;
      height: 40px;
    }

    .icon-circle img {
      width: 26px;
      height: 26px;
    }

    .icon-tooltip {
      font-size: 0.7rem;
      top: 50px;
    }
    .zone-card {
      padding: 1rem 0;
      padding-left: 1.5rem;
    }

    .zone-title {
      font-size: 1.2rem;
    }

    .zone-description {
      font-size: 0.95rem;
    }
  }
  @media (max-width: 480px) {
    .zones-explainer {
      padding: 1.5rem 0;
    }
    .zone-card {
      padding: 1rem 0;
      padding-left: 1.5rem;
    }

    .zone-title {
      font-size: 1.2rem;
    }

    .icon-circle {
      width: 35px;
      height: 35px;
    }

    .icon-circle img {
      width: 22px;
      height: 22px;
    }

    .icon-tooltip {
      font-size: 0.65rem;
      top: 45px;
    }
  }
</style>
