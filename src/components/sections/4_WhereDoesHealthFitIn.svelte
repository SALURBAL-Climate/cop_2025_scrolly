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
      <div class="intro-content">
        <!-- <div class="icon-container"> -->
          <img src="/img/cop30/icon_microscope.png" alt="Microscope Icon" class="intro-icon" />
        <!-- </div> -->
        <div class="text-content">
          <p class="intro-paragraph">
            Since 2014, the <strong>World Health Organization (WHO)</strong> has hosted regular Global Conferences on Health and Climate Change. Historically, <strong>these events have taken place on the sidelines of the UNFCCC COPs</strong>. In recent years, the connections between climate change and health have received increased attention.
          </p>
        </div>
      </div>
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
    max-width: 900px;
    margin: 0 auto;
  }

  .intro-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;
  }

  .icon-container {
    flex-shrink: 0;
  }

  .intro-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    /* background: var(--hex-blue); */
    /* padding: 20px; */
    object-fit: contain;
  }

  .text-content {
    flex: 1;
  }

  .intro-paragraph {
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--dark-text);
    margin: 0;
    text-align: left;
  }

  .intro-paragraph strong {
    color: var(--hex-blue);
    font-weight: 700;
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

    .intro-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .intro-icon {
      width: 100px;
      height: 100px;
      padding: 15px;
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

    .intro-icon {
      width: 80px;
      height: 80px;
      padding: 12px;
    }

    .intro-paragraph {
      font-size: 1rem;
      line-height: 1.5;
    }
  }
</style>
