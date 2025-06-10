<script>
  // COP Zones Explainer Component
  // Shows the Blue Zone and Green Zone differences with satellite imagery
</script>

<div class="zones-explainer">
  <div class="zones-content">
    <!-- Satellite Image with Zone Labels -->
    <div class="zones-image-container">
      <img
        src="./img/cop30/cop_zones.png"
        alt="COP zones satellite view showing Blue Zone and Green Zone areas"
        class="zones-image"
      />
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
  }
  .zones-image {
    width: 100%;
    max-width: 500px;
    height: auto;
    border-radius: 8px;
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
    }

    .zones-descriptions {
      gap: 1.5rem;
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
  }
</style>
