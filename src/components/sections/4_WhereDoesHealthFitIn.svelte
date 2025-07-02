<script>
  import { brandColors } from '../../config.js';
  import { TimelineCopAndHealth } from '../scrolly/timeline_cop_and_health/index.js';
</script>

<section class="what-happens-section">
  <!-- Title Row -->
  <div class="title-row">
    <div class="section-header">
      <h1 class="section-title">Where does health fit in?</h1>
    </div>
  </div>
  
  <!-- Intro paragraph section -->
  <div class="intro-text">
    <div class="intro-content">
      <img
        src="./img/cop30/icon_microscope.png"
        alt="Microscope Icon"
        class="intro-icon"
      />
      <div class="text-content">
        <p class="intro-paragraph">
          Since 2014, the <strong>World Health Organization (WHO)</strong> has
          hosted regular Global Conferences on Health and Climate Change.
          Historically,
          <strong
            >these events have taken place on the sidelines of the UNFCCC COPs</strong
          >. In recent years, the connections between climate change and
          health have received increased attention.
        </p>
      </div>
    </div>
  </div>
   
  <!-- Timeline Component -->
  <div class="scrolly-row">
    <TimelineCopAndHealth />
  </div>
</section>

<style>
  .what-happens-section {
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .title-row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 10vh; /* Fixed height for title section */
    position: relative;
    z-index: 2; /* Ensure title stays above scrolly */ 
  }

  .scrolly-row {
    width: 100%;
    flex: 1;
    position: relative;
  }

  .section-header {
    text-align: center;
    padding: 2rem 2rem 1rem 2rem; /* Reduced top/bottom padding */
    max-width: 800px;
    margin: 0 auto;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2f7ed3;
    margin-bottom: 1rem;
    line-height: 1.2;
  }

  .section-subtitle {
    font-size: 1.2rem;
    color: #64748b;
    margin: 0;
    font-weight: 500;
    line-height: 1.4;
  }

  .intro-text {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 2rem;
    padding-bottom: 3rem;
  }

  .intro-content {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-align: left;
  }

  .intro-icon {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: contain;
    flex-shrink: 0;
  }

  .text-content {
    flex: 1;
  }

  .intro-paragraph {
    font-size: 1.2rem;
    line-height: 1.6;
    color: #374151;
    margin: 0;
    text-align: left;
  }

  .intro-paragraph strong {
    color: #2f7ed3;
    font-weight: 700;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .section-header {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .section-subtitle {
      font-size: 1.1rem;
    }

    .intro-text {
      padding: 0 1.5rem;
    }

    .intro-content {
      flex-direction: column;
      text-align: center;
      gap: 1.5rem;
    }

    .intro-icon {
      width: 100px;
      height: 100px;
    }

    .intro-paragraph {
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  
  @media (max-width: 480px) {
    .section-header {
      padding: 1rem 1rem 0.5rem 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .section-subtitle {
      font-size: 1rem;
    }

    .intro-text {
      padding: 0 1rem;
    }

    .intro-icon {
      width: 80px;
      height: 80px;
    }

    .intro-paragraph {
      font-size: 1rem;
      line-height: 1.5;
    }
  }

  /* Very narrow screens (Galaxy S22, etc.) */
  @media (max-width: 380px) {
    .section-header {
      padding: 0.75rem 1rem 0.5rem 1rem;
    }

    .section-title {
      font-size: 1.6rem;
      word-wrap: break-word;
      hyphens: auto;
    }
  }
</style>
