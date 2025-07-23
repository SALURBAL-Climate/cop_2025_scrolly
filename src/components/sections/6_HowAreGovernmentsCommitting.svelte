<script>
  import { brandColors } from '../../config.js';
  // How Are Governments Committing to Climate and Health Component
  // Shows statistics about NDCs and government commitments
</script>

<section
  class="governments-section"
  style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}"
>
  <div class="governments-content">
    <div class="section-header">
      <h1 class="section-title">
        How are national and local governments committing to climate and health?
      </h1>
    </div>

    <div class="intro-text">
      <p class="intro-paragraph">
        Nationally Determined Contributions (NDCs) are national climate action
        plans that outline each country’s commitments to reducing greenhouse gas
        emissions and adapting to the impacts of climate change. As part of the
        2015 Paris Agreement, countries committed to submitting an updated NDCs every five years
      </p>
    </div>

    <!-- Stats Section -->
    <div class="stats-row">
      <!-- 90% Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_pct.png"
          alt="Statistical visualization showing 90 percent of NDCs include health considerations"
          class="stat-image"
        />
        <p class="stat-label">
          In 2023, almost all NDCs to the Paris Agreement include health
          considerations.
        </p>
      </div>
      <!-- Pie Chart Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_pie.png"
          alt="Pie chart showing about one third of NDCs identify health co-benefits of mitigation"
          class="stat-image"
        />
        <p class="stat-label">
          About a third identify the health co-benefits of mitigation action.
        </p>
      </div>
      <!-- Fraction Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_fraction.png"
          alt="Fraction diagram showing only one in ten NDCs quantify and monitor health benefits"
          class="stat-image"
        />
        <p class="stat-label">
          Only about one in ten quantify and/or monitor these benefits. (<a href="https://www.who.int/publications/i/item/9789240074729" target="_blank" rel="noopener noreferrer" class="text-link">WHO
            2023 Review of Health in NDCs</a>)
        </p>
      </div>
    </div>
    <div class="stats-caption"></div>
    <br />
    <div class="intro-text">
      <p class="intro-paragraph">
        The Global Climate and Health Alliance's <a href="https://climateandhealthalliance.org/resource/healthy-ndcs-3-0-embedding-health-in-national-climate-plans-for-2035/" target="_blank" rel="noopener noreferrer" class="text-link">Healthy NDCs Scorecards</a> ranks countries' Nationally Determined Contributions based on how well they address the health threats of climate change and minimize future harm.
      </p>
    </div>
  </div>
</section>

<style>
  .governments-section {
    width: 100%;
    padding: 4rem 0;
    /* background: #f8fafc; */
    margin: 2rem 0;
  }

  .governments-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--hex-blue);
    margin: 0;
    line-height: 1.2;
    max-width: 900px;
    margin: 0 auto;
  }

  .intro-text {
    max-width: 800px;
    margin: 0 auto 3rem auto;
    text-align: center;
  }

  .intro-paragraph {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--medium-text);
    margin: 0;
  }

  .text-link {
    color: var(--hex-blue);
    text-decoration: underline;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }

  .text-link:hover {
    opacity: 0.8;
  }
  .stats-row {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4rem;
    margin: 3rem 0 1.5rem 0;
    flex-wrap: wrap;
    max-width: 100%;
    overflow: visible; /* Allow content to wrap instead of overflow */
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 0 0 auto;
  }

  .stat-image {
    height: 120px;
    width: auto;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .stat-label {
    font-size: 1rem;
    line-height: 1.4;
    color: var(--dark-text);
    margin: 0;
    max-width: 200px;
    font-weight: 500;
  }
  .stats-caption {
    text-align: center;
    margin-top: 2rem;
  }

  .stats-caption p {
    font-size: 0.95rem;
    color: var(--medium-text);
    font-style: italic;
    margin: 0;
  }

  .stats-credit {
    text-align: right;
    margin-top: 0.5rem;
  }

  .stats-credit p {
    font-size: 0.75rem;
    color: var(--medium-text);
    margin: 0;
    font-weight: 400;
  } /* Responsive design */
  @media (max-width: 768px) {
    .governments-section {
      padding: 3rem 0;
    }

    .governments-content {
      padding: 0 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .intro-paragraph {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .stats-row {
      gap: 2.5rem;
    }

    .stat-image {
      height: 100px;
    }

    .stat-label {
      font-size: 0.95rem;
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .governments-section {
      padding: 2rem 0;
    }

    .governments-content {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .stats-row {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    .stat-image {
      height: 90px;
    }

    .stat-label {
      font-size: 0.9rem;
      max-width: 250px;
    }

    .stats-caption p {
      font-size: 0.85rem;
    }

    .stats-credit p {
      font-size: 0.7rem;
    }
  }
</style>
