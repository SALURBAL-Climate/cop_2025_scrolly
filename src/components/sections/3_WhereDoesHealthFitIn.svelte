<script>
  import { brandColors } from '../../config.js';
  import { TimelineCopAndHealth } from '../scrolly/timeline_cop_and_health/index.js';
</script>

<section class="health-fit-section" style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}">
  <div class="health-content">
    <div class="section-header">
      <h1 class="section-title">Where does health fit in?</h1>
    </div>
      <div class="intro-text">
      <p class="intro-paragraph">
        Since 2014, the World Health Organization (WHO) has hosted regular Global Conferences on Health and Climate Change. Historically, these events have taken place on the sidelines of the UNFCCC COPs. In recent years, the connections between climate change and health have received increased attention within the context of international negotiations during annual COPs.
      </p>
    </div>
    
    <!-- Timeline Component -->
    <div class="timeline-container">
      <TimelineCopAndHealth />
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
