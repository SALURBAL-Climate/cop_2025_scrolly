<script>
  import { brandColors } from '../../config.js';
  import { TimelineClimateCOP } from '../scrolly/timeline_climate_cop/index.js';
</script>

<section class="health-fit-section" style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}">
  <div class="health-content">
    <div class="section-header">
      <h1 class="section-title">A brief history of Climate COPs</h1>
    </div>
      <div class="intro-text">
      <p class="intro-paragraph">
        Throughout the history of COPs, several landmark agreements have shaped global climate action and established frameworks for international cooperation on reducing greenhouse gas emissions.
      </p>
    </div>
    
    <!-- Timeline Component -->
    <div class="timeline-container">
      <TimelineClimateCOP />
    </div>
  </div>
</section>

<style>
  .health-fit-section {
    width: 100%;
    padding: 4rem 0;
    background: transparent;
    margin: 2rem 0;
  }

  .health-content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 2rem;
    text-align: center;
  }

  .section-header {
    margin-bottom: 2rem;
  }
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--hex-blue);
    margin: 0;
    line-height: 1.2;
  }

  .intro-text {
    max-width: 800px;
    margin: 0 auto;
  }  .intro-paragraph {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--medium-text);
    margin: 0;
    text-align: left;
  }

  .timeline-container {
    margin-top: 3rem;
    width: 100%;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .health-fit-section {
      padding: 3rem 0;
    }

    .health-content {
      padding: 0 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .intro-paragraph {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }

  @media (max-width: 480px) {
    .health-fit-section {
      padding: 2rem 0;
    }

    .health-content {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .intro-paragraph {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>
