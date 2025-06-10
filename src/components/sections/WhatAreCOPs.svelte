<script>
  // No props needed for this static component
</script>

<section class="what-are-cops-section">
  <div class="container">
    <div class="content-wrapper">
      <div class="text-content">
        <h1 class="main-title">What are COPs?</h1>
        <p class="main-description">
          A "Conference of the Parties" (COP) refers to a meeting ("conference") of 
          the countries, or governments, ("parties") who have signed an 
          international agreement, convention, or treaty. "COPs" take place within 
          the context of agreements surrounding many topics.
        </p>
        
        <div class="unfccc-section">
          <p class="unfccc-text">
            The <span class="highlight-link">United Nations Framework Convention on 
            Climate Change (UNFCCC)</span> holds annual COPs to 
            negotiate global actions to address climate change. 
            The 30th annual Conference of the Parties ("COP30") 
            will take place in November 2025, hosted by Brazil.
          </p>
        </div>
      </div>
        <div class="visual-content">
        <div class="un-logo-container">
          <img src="img/cop30/icon_UN.png" alt="United Nations Logo" class="un-logo" />
        </div>
      </div>
    </div>
  </div>
</section>

<style>  .what-are-cops-section {
    padding: 4rem 0;
    background: transparent;
    margin: 2rem 0;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .content-wrapper {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .text-content {
    padding-right: 2rem;
  }

  .main-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #3B82F6;
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
  .unfccc-section {
    background: transparent;
    padding: 1.5rem 0;
    border-left: none;
    border-radius: 0;
  }

  .unfccc-text {
    font-size: 1.1rem;
    line-height: 1.7;
    color: #1F2937;
    margin: 0;
    text-align: justify;
  }

  .highlight-link {
    color: #3B82F6;
    font-weight: 600;
    text-decoration: underline;
    text-decoration-color: rgba(59, 130, 246, 0.4);
    text-underline-offset: 3px;
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
  }
  .un-logo {
    width: 180px;
    height: 180px;
    object-fit: contain;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .content-wrapper {
      grid-template-columns: 1fr;
      gap: 2rem;
      text-align: center;
    }

    .text-content {
      padding-right: 0;
    }

    .main-title {
      font-size: 2rem;
    }

    .main-description,
    .unfccc-text {
      font-size: 1rem;
      text-align: left;
    }

    .un-logo {
      width: 150px;
      height: 150px;
    }

    .what-are-cops-section {
      padding: 2rem 0;
      margin: 1rem 0;
    }

    .container {
      padding: 0 1rem;
    }
  }

  @media (max-width: 480px) {
    .main-title {
      font-size: 1.75rem;
    }

    .unfccc-section {
      padding: 1rem;
    }

    .un-logo {
      width: 120px;
      height: 120px;
    }
  }
</style>
