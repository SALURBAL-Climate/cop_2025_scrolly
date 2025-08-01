<script>
  import { brandColors } from '../../config.js';
  import { currentLanguage } from '../../stores/language.js';

  // Content for each language
  const content = {
    en: {
      title: "How are national and local governments committing to climate and health?",
      introText: "Nationally Determined Contributions (NDCs) are national climate action plans that outline each country's commitments to reducing greenhouse gas emissions and adapting to the impacts of climate change. As part of the 2015 Paris Agreement, countries committed to submitting an updated NDCs every five years",
      closingText: `The Global Climate and Health Alliance's <a href="https://climateandhealthalliance.org/resource/healthy-ndcs-3-0-embedding-health-in-national-climate-plans-for-2035/" target="_blank" rel="noopener noreferrer" class="text-link">Healthy NDCs Scorecards</a> ranks countries' Nationally Determined Contributions based on how well they address the health threats of climate change and minimize future harm.`,
      statLabels: {
        stat1: "In 2023, almost all NDCs to the Paris Agreement include health considerations.",
        stat2: "About a third identify the health co-benefits of mitigation action.",
        stat3: `Only about one in ten quantify and/or monitor these benefits. (<a href="https://www.who.int/publications/i/item/9789240074729" target="_blank" rel="noopener noreferrer" class="text-link">WHO 2023 Review of Health in NDCs</a>)`
      }
    },
    es: {
      title: "¿Cómo se comprometen los gobiernos nacionales y locales con el clima y la salud?",
      introText: "Las Contribuciones Determinadas a Nivel Nacional (NDC por sus siglas en Inglés) son planes nacionales de acción por el clima que describen los compromisos de cada país para reducir las emisiones de gases de efecto invernadero y adaptarse a los efectos del cambio climático. Como parte del Acuerdo de París de 2015, los países se comprometieron a presentar sus NDCs actualizados cada cinco años.",
      closingText: `Las tarjetas de puntuación de las Contribuciones Nacionales a la Salud (NDCs) de la <a href="https://climateandhealthalliance.org/resource/healthy-ndcs-3-0-embedding-health-in-national-climate-plans-for-2035/" target="_blank" rel="noopener noreferrer" class="text-link">Alianza Global para el Clima y la Salud</a> clasifican las NDCs en el sector salud, en función de la capacidad de los países para hacer frente a las amenazas sanitarias del cambio climático y minimizar los daños en el futuros.`,
      statLabels: {
        stat1: "En 2023, casi todas (90%) las NDCs del Acuerdo de París incluyen consideraciones de salud.",
        stat2: "Aproximadamente un tercio identifica los beneficios colaterales para la salud de las medidas de mitigación.",
        stat3: `Sólo uno de cada diez cuantifican o controlan estos beneficios. (<a href="https://www.who.int/publications/i/item/9789240074729" target="_blank" rel="noopener noreferrer" class="text-link">Evaluación de la OMS de la salud en las NDC, 2023</a>)`
      }
    },
    pt: {
      title: "Como os governos nacionais e locais estão se comprometendo com o clima e a saúde?",
      introText: "As Contribuições Nacionalmente Determinadas (NDCs) são planos nacionais de ação climática que descrevem os compromissos de cada país para reduzir as emissões de gases de efeito estufa (GEE) e se adaptar aos impactos das mudanças climáticas. Como parte do Acordo de Paris de 2015, os países se comprometeram a enviar uma NDC atualizada a cada cinco anos.",
      closingText: `O <a href="https://climateandhealthalliance.org/resource/healthy-ndcs-3-0-embedding-health-in-national-climate-plans-for-2035/" target="_blank" rel="noopener noreferrer" class="text-link">Healthy NDCs Scorecards da Global Climate and Health Alliance</a> classifica as NDCs dos países com base em sua capacidade de enfrentar as ameaças à saúde decorrentes das mudanças climáticas e minimizar danos futuros.`,
      statLabels: {
        stat1: "Em 2023, quase todas (90%) as NDCs do Acordo de Paris incluem considerações sobre saúde.",
        stat2: "Cerca de um terço identifica os co-benefícios para a saúde das ações de mitigação.",
        stat3: `Apenas cerca de um em cada dez quantifica e/ou monitora esses benefícios. (<a href="https://www.who.int/publications/i/item/9789240074729" target="_blank" rel="noopener noreferrer" class="text-link">Revisão da OMS 2023 sobre Saúde nas NDCs</a>)`
      }
    }
  };

  $: currentContent = content[$currentLanguage] || content.en;

  // How Are Governments Committing to Climate and Health Component
  // Shows statistics about NDCs and government commitments
</script>

<section
  class="governments-section"
  style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}"
>
  <div class="governments-content">
    <div class="section-header">
      <h1 class="section-title">
        {currentContent.title}
      </h1>
    </div>

    <div class="intro-text">
      <p class="intro-paragraph">
        {currentContent.introText}
      </p>
    </div>

    <!-- Stats Section -->
    <div class="stats-row">
      <!-- 90% Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_pct.png"
          alt="Statistical visualization showing 90 percent of NDCs include health considerations"
          class="stat-image"
        />
        <p class="stat-label">
          {currentContent.statLabels.stat1}
        </p>
      </div>
      <!-- Pie Chart Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_pie.png"
          alt="Pie chart showing about one third of NDCs identify health co-benefits of mitigation"
          class="stat-image"
        />
        <p class="stat-label">
          {currentContent.statLabels.stat2}
        </p>
      </div>
      <!-- Fraction Stat -->
      <div class="stat-item">
        <img
          src="./img/cop30/stats_fraction.png"
          alt="Fraction diagram showing only one in ten NDCs quantify and monitor health benefits"
          class="stat-image"
        />
        <p class="stat-label">
          {@html currentContent.statLabels.stat3}
        </p>
      </div>
    </div>
    <div class="stats-caption"></div>
    <br />
    <div class="intro-text">
      <p class="intro-paragraph">
        {@html currentContent.closingText}
      </p>
    </div>
  </div>
</section>

<style>
  .governments-section {
    width: 100%;
    padding: 4rem 0;
    /* background: #f8fafc; */
    margin: 2rem 0;
  }

  .governments-content {
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

  .text-link {
    color: var(--hex-blue);
    text-decoration: underline;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }

  .text-link:hover {
    opacity: 0.8;
  }
  .stats-row {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 4rem;
    margin: 3rem 0 1.5rem 0;
    flex-wrap: wrap;
    max-width: 100%;
    overflow: visible; /* Allow content to wrap instead of overflow */
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    flex: 0 0 auto;
  }

  .stat-image {
    height: 120px;
    width: auto;
    object-fit: contain;
    margin-bottom: 1rem;
  }

  .stat-label {
    font-size: 1rem;
    line-height: 1.4;
    color: var(--dark-text);
    margin: 0;
    max-width: 200px;
    font-weight: 500;
  }
  .stats-caption {
    text-align: center;
    margin-top: 2rem;
  }

  .stats-caption p {
    font-size: 0.95rem;
    color: var(--medium-text);
    font-style: italic;
    margin: 0;
  }

  .stats-credit {
    text-align: right;
    margin-top: 0.5rem;
  }

  .stats-credit p {
    font-size: 0.75rem;
    color: var(--medium-text);
    margin: 0;
    font-weight: 400;
  } /* Responsive design */
  @media (max-width: 768px) {
    .governments-section {
      padding: 3rem 0;
    }

    .governments-content {
      padding: 0 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .intro-paragraph {
      font-size: 1.1rem;
      line-height: 1.5;
    }

    .stats-row {
      gap: 2.5rem;
    }

    .stat-image {
      height: 100px;
    }

    .stat-label {
      font-size: 0.95rem;
      max-width: 180px;
    }
  }

  @media (max-width: 480px) {
    .governments-section {
      padding: 2rem 0;
    }

    .governments-content {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .stats-row {
      flex-direction: column;
      gap: 2rem;
      align-items: center;
    }

    .stat-image {
      height: 90px;
    }

    .stat-label {
      font-size: 0.9rem;
      max-width: 250px;
    }

    .stats-caption p {
      font-size: 0.85rem;
    }

    .stats-credit p {
      font-size: 0.7rem;
    }
  }
</style>
