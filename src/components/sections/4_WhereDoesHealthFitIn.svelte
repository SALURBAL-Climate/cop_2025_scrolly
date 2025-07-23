<script>
  import { TimelineCopAndHealth } from '../scrolly/timeline_cop_and_health/index.js';
</script>

<section class="what-happens-section">
  <!-- Title Row -->
  <div class="title-row">
    <div class="section-header">
      <h1 class="section-title">A brief history of Climate COPs</h1>
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
