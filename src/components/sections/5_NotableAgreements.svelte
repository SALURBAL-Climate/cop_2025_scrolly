<script>
  import { brandColors } from '../../config.js';
  // Notable COP Agreements Component
  // Shows key agreements from COPs 3, 11, and 21
</script>

<section class="agreements-section" style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}">
  <div class="agreements-content">
    <div class="section-header">
      <h1 class="section-title">Notable agreements from past COPs</h1>
    </div>
    
    <div class="intro-text">
      <p class="intro-paragraph">
        Throughout the history of COPs, several landmark agreements have shaped global climate action and established frameworks for international cooperation on reducing greenhouse gas emissions.
      </p>
    </div>

    <!-- Agreements Timeline -->
    <div class="agreements-timeline">
      <!-- COP3 & COP11 - Kyoto Protocol -->
      <div class="agreement-item">
        <div class="agreement-years">
          <span class="year-badge cop3">COP3</span>
          <span class="year-badge cop11">COP11</span>
        </div>
        <div class="agreement-content">
          <h3 class="agreement-title">The Kyoto Protocol</h3>
          <p class="agreement-years-detail">(1997, 2005)</p>
          <p class="agreement-description">
            The Kyoto Protocol was negotiated during COP3 and entered into force during COP11 in 2005, setting mitigation targets for reducing greenhouse gas (GHG) emissions and mandating regular progress reviews.
          </p>
        </div>
      </div>

      <!-- COP21 - Paris Agreement -->
      <div class="agreement-item">
        <div class="agreement-years">
          <span class="year-badge cop21">COP21</span>
        </div>
        <div class="agreement-content">
          <h3 class="agreement-title">The Paris Agreement</h3>
          <p class="agreement-years-detail">(2015)</p>
          <p class="agreement-description">
            COP21 resulted in the landmark Paris Agreement (195 parties), which replaced the Kyoto Protocol and seeks to limit global warming to below 2 degrees Celsius.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .agreements-section {
    width: 100%;
    padding: 4rem 0;
    background: #f8fafc;
    margin: 2rem 0;
  }

  .agreements-content {
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

  .agreements-timeline {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: 3rem;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
  }

  .agreement-item {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid #e2e8f0;
  }

  .agreement-item:last-child {
    border-bottom: none;
  }

  .agreement-years {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    flex-shrink: 0;
    align-items: flex-start;
  }

  .year-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: white;
  }

  .year-badge.cop3 {
    background: #059669;
  }

  .year-badge.cop11 {
    background: #0891b2;
  }

  .year-badge.cop21 {
    background: var(--hex-blue);
  }

  .agreement-content {
    flex: 1;
  }

  .agreement-title {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--dark-text);
    margin: 0 0 0.5rem 0;
    line-height: 1.3;
  }

  .agreement-years-detail {
    font-size: 1rem;
    color: var(--medium-text);
    margin: 0 0 1rem 0;
    font-weight: 600;
    font-style: italic;
  }

  .agreement-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--dark-text);
    margin: 0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .agreements-section {
      padding: 3rem 0;
    }

    .agreements-content {
      padding: 0 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .intro-paragraph {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .agreement-item {
      flex-direction: column;
      gap: 1.5rem;
      align-items: flex-start;
    }

    .agreement-years {
      flex-direction: row;
      gap: 1rem;
    }

    .agreement-title {
      font-size: 1.6rem;
    }

    .agreement-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .agreements-section {
      padding: 2rem 0;
    }

    .agreements-content {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .agreements-timeline {
      gap: 2rem;
    }

    .year-badge {
      font-size: 0.8rem;
      padding: 0.4rem 0.8rem;
    }

    .agreement-title {
      font-size: 1.4rem;
    }

    .agreement-years-detail {
      font-size: 0.9rem;
    }

    .agreement-description {
      font-size: 0.95rem;
    }
  }
</style>
