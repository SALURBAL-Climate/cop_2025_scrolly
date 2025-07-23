<script>
  import { RouteWhatHappensAtCop } from '../scrolly/route_what_happens_at_cop/index.js';
  import COPZonesExplainer from './2.1_COPZonesExplainer.svelte';
  import { currentLanguage } from '../../stores/language.js';

  // Content for each language
  const content = {
    en: {
      whatHappensTitle: "What Happens at UNFCCC COPs?",
      zonesTitle: "COP Zones Explained"
    },
    es: {
      whatHappensTitle: " ¿Qué ocurre antes y durante una COP sobre el cambio climático?",
      zonesTitle: "Explicación de las Zonas de la COP"
    },
    pt: {
      whatHappensTitle: "O que acontece antes e durante uma COP do Clima?",
      zonesTitle: "Zonas da COP Explicadas"
    }
  };

  $: currentContent = content[$currentLanguage] || content.en;
</script>

<section class="what-happens-section">
  <!-- Title Row -->
  <div class="title-row">
    <div class="section-header">
      <h1 class="section-title">{currentContent.whatHappensTitle}</h1>
    </div>
  </div>
  <!-- Scrolly Row -->
  <div class="scrolly-row">
    <RouteWhatHappensAtCop />
  </div>
  <div class="title-row" >
    <div class="section-header">
      <h1 class="section-title" >{currentContent.zonesTitle}</h1>
    </div>
  </div>
  <!-- Zones Explainer Row -->
  <div class="zones-row"  >
    <COPZonesExplainer />
  </div>
</section>

<style>
  .what-happens-section {
    width: 100%;
    background: transparent;
    display: flex;
    flex-direction: column;
    position: relative;
    /* border: 3px solid blue; */
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
  .zones-row {
    width: 100%;
    padding: 0 2rem;
    padding-bottom: 0;
    padding-top: 0;
    background: transparent;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
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
  }  /* Responsive design */
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

    .zones-row {
      padding: 0 1.5rem;
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

    .zones-row {
      padding: 0 1.25rem;
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

    .zones-row {
      padding: 0 1rem;
    }
  }
</style>
