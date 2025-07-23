<script>
  import { brandColors } from '../../config.js';
  // No other props needed for this static component
</script>

<section
  class="component_container"
  style="--hex-blue: {brandColors.hex_blue}; --green-zone: {brandColors.green_zone}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}"
>  <div class="title-section">
    <h1 class="main-title">What is a United Nations Climate COP?</h1>
    <p class="main-description">
      A <a
        href="https://unfccc.int/process/bodies/supreme-bodies/conference-of-the-parties-cop"
        target="_blank"
        class="highlight-link">Conference of the Parties (COP)</a
      > refers to a meeting (conference) of the
      countries, or governments, (parties) who have signed an international
      agreement, convention, or treaty. COPs take place within the context of
      agreements surrounding many topics.      
    </p>
  </div>

  <!-- Desktop layout -->
  <div class="unfccc-row desktop-layout">
    <div class="unfccc-text-content">
      <p class="unfccc-text">
        The <a href="https://unfccc.int/" target="_blank" class="highlight-link"
          > United Nations Framework Convention on Climate Change (UNFCCC)</a
        > holds annual COPs to negotiate global actions to address climate change. The 30th annual Conference of the Parties (“COP30”) will take place in November 2025, hosted by Brazil.
      </p>
    </div>
    <div class="visual-content">
      <div class="un-logo-container">
        <img
          src="img/cop30/icon_UN.png"
          alt="United Nations Logo"
          class="un-logo"
        />
      </div>
    </div>
  </div>

  <!-- Mobile layout -->
  <div class="mobile-layout">
    <div class="visual-content">
      <div class="un-logo-container">
        <img
          src="img/cop30/icon_UN.png"
          alt="United Nations Logo"
          class="un-logo"
        />
      </div>
    </div>
    <div class="unfccc-text-content">
      <p class="unfccc-text">
        The <a href="https://unfccc.int/" target="_blank" class="highlight-link"
          >United Nations Framework Convention on Climate Change (UNFCCC)</a
        > holds annual COPs to negotiate global actions to address climate change.
        The 30th annual Conference of the Parties ("COP30") will take place in November
        2025, hosted by Brazil.
      </p>
    </div>
  </div>
</section>

<style>
  .component_container {
    padding: 4rem 10rem;
    background: transparent;
    /* margin: 1rem auto; */
    box-shadow: none;
    border-radius: 0;
    max-width: 900px;
    display: flex;
    flex-direction: column;
  }

  .title-section {
    text-align: left;
  }

  .unfccc-row {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .unfccc-text-content {
    padding-right: 2rem;
  }

  .text-content {
    padding-right: 2rem;
  }
  .main-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--hex-blue);
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  .main-description {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #374151;
    margin-bottom: 2rem;
    text-align: justify;
  }
  .unfccc-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #1f2937;
    margin: 0;
    text-align: justify;
  }
  .highlight-link {
    color: var(--hex-blue);
    font-weight: 600;
    text-decoration: none;
  }

  .highlight-link:hover {
    text-decoration: underline;
  }

  .visual-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .un-logo-container {
    background: transparent;
    border-radius: 0;
    padding: 0;
    box-shadow: none;
    border: none;
  }  .un-logo {
    width: 180px;
    height: 180px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }
  /* Layout visibility controls */
  .desktop-layout {
    display: grid;
  }

  .mobile-layout {
    display: none;
    flex-direction: column;
    gap: 1.5rem;
    align-items: center;
  }

  /* Mobile responsive design */
  @media (max-width: 800px) {
    .component_container {
      padding: 1.5rem 1rem;
      margin: 0.5rem;
    }

    /* Hide desktop layout, show mobile layout */
    .desktop-layout {
      display: none;
    }

    .mobile-layout {
      display: flex;
    }

    .unfccc-text-content {
      padding-right: 0;
    }

    .main-title {
      font-size: 1.75rem;
    }

    .main-description,
    .unfccc-text {
      font-size: 1rem;
      text-align: left;
    }

    .un-logo {
      width: 120px;
      height: 120px;
    }
  }
</style>
