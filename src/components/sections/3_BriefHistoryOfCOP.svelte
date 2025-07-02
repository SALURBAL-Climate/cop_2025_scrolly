<script>
  import { brandColors } from '../../config.js';
  // Brief History of Climate COPs Component
  // Shows timeline with flags and key events
</script>

<section class="history-section" style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}">
  <div class="history-content">
    <div class="section-header">
      <h1 class="section-title">A brief history of Climate COPs</h1>
    </div>

    <!-- Timeline Container -->
    <div class="timeline-container">
      <!-- Timeline Row 1 -->
      <div class="timeline-row">
        <div class="column-flag">
          <div class="flag-container">
            <img src="./img/cop30/japan_flag.png" alt="Japan Flag" class="flag-icon" />
          </div>
        </div>
        <div class="column-details">
          <div class="year-location">
            <div class="timeline-year">1997 COP3</div>
          </div>
          <div class="timeline-location">KYOTO</div>
        </div>
        <div class="column-description">
          <h3>Setting the stage for global climate action:</h3>
          <p>The <strong><a href="https://unfccc.int/kyoto_protocol" target="_blank" class="protocol-link">Kyoto Protocol</a></strong> was negotiated during COP3 and entered into force during COP11 in 2005, setting mitigation targets for reducing greenhouse gas (GHG) emissions and mandating regular progress reviews.</p>
        </div>
      </div>

      <!-- Timeline Row 2 -->
      <div class="timeline-row">
        <div class="column-flag">
          <div class="flag-container">
            <img src="./img/cop30/france_flag.png" alt="France Flag" class="flag-icon" />
          </div>
        </div>
        <div class="column-details">
          <div class="year-location">
            <div class="timeline-year">2015 COP21</div>
          </div>
          <div class="timeline-location">PARIS</div>
        </div>
        <div class="column-description">
          <h3>Expanding global climate commitments:</h3>
          <p>COP21 resulted in the landmark <strong><a href="https://unfccc.int/process-and-meetings/the-paris-agreement" target="_blank" class="protocol-link">Paris Agreement</a></strong> (195 parties), which replaced the Kyoto Protocol and seeks to limit global warming to below 2 degrees Celsius.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .history-section {
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 2rem 0;
  }

  .history-content {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 4rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
    padding: 2rem 2rem 1rem 2rem;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
  }

  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--hex-blue);
    margin: 0;
    line-height: 1.2;
  }

  .timeline-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 120px 140px 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2rem;
    background: transparent;
  }

  .column-flag {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  .flag-container {
    width: 80px;
    height: 80px;
    background: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flag-icon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    object-fit: cover;
  }

  .column-details {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }

  .year-location {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    background: #e5e7eb;
    border: 3px solid #6b7280;
    border-radius: 12px;
    padding: 0.2rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    width: 100%;
    text-align: center;
  }

  .timeline-year {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--dark-text);
    margin: 0;
  }

  .timeline-location {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--medium-text);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0;
    text-align: center;
  }

  .column-description {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .column-description h3 {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--hex-blue);
    margin: 0;
    line-height: 1.3;
  }

  .column-description p {
    font-size: 1rem;
    line-height: 1.6;
    color: var(--dark-text);
    margin: 0;
  }

  .column-description strong {
    color: var(--hex-blue);
    font-weight: 700;
  }

  .protocol-link {
    color: var(--hex-blue);
    text-decoration: none;
  }

  .protocol-link:hover {
    text-decoration: underline;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .history-content {
      padding: 0 2rem;
    }

    .section-header {
      padding: 1.5rem 1.5rem 1rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .timeline-row {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: center;
      padding: 1.5rem;
      background: transparent;
    }

    .column-flag {
      justify-content: center;
    }

    .flag-container {
      width: 70px;
      height: 70px;
    }

    .flag-icon {
      width: 70px;
      height: 70px;
    }

    .column-details {
      align-items: center;
    }

    .column-description h3 {
      font-size: 1.2rem;
    }

    .column-description p {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .history-content {
      padding: 0 1rem;
    }

    .section-header {
      padding: 1rem 1rem 0.5rem 1rem;
    }

    .section-title {
      font-size: 1.75rem;
    }

    .timeline-row {
      padding: 1rem;
      gap: 1rem;
    }

    .flag-container {
      width: 60px;
      height: 60px;
    }

    .flag-icon {
      width: 60px;
      height: 60px;
    }

    .timeline-year {
      font-size: 1.1rem;
    }

    .timeline-location {
      font-size: 1rem;
    }

    .column-description h3 {
      font-size: 1.1rem;
    }

    .column-description p {
      font-size: 0.9rem;
    }
  }

  /* Very narrow screens (Galaxy S22, etc.) */
  @media (max-width: 380px) {
    .history-content {
      padding: 0 0.5rem;
    }

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
