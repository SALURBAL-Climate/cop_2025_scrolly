<script>
  import { currentLanguage } from '../../stores/language.js';

  // Content for each language
  const content = {
    en: {
      ariaLabel: "Hero section with background image showing a panoramic view of Belém, Brazil with the Amazon rainforest and urban skyline, representing the host city for COP30 climate conference",
      logoAlt: "SALURBAL Climate Logo",
      mainTitle: {
        part1: "Bringing",
        highlight1: "public health", 
        part2: "to the table at",
        highlight2: "COP30",
        part3: ": A guide for",
        highlight3: "researchers",
        part4: "and practitioners"
      },
      questions: [
        "How does a Climate COP work?",
        "What role does public health research play in this space?", 
        "How can researchers engage with the COP process?"
      ]
    },
    es: {
      ariaLabel: "Sección principal con imagen de fondo mostrando una vista panorámica de Belém, Brasil con la selva amazónica y el horizonte urbano, representando la ciudad anfitriona de la conferencia climática COP30",
      logoAlt: "Logo SALURBAL Climate",
      mainTitle: {
        part1: "Poniendo la",
        highlight1: "salud pública",
        part2: "sobre la mesa en la",
        highlight2: "COP30",
        part3: ": Guía para",
        highlight3: "investigadores",
        part4: "y profesionales de salud pública"
      },
      questions: [
        "¿Cómo funciona la COP sobre el cambio climático?",
        "¿Qué papel desempeña la salud pública en este espacio?",
        "¿Cómo pueden participar los investigadores en el proceso de la COP?"
      ]
    },
    pt: {
      ariaLabel: "Seção principal com imagem de fundo mostrando uma vista panorâmica de Belém, Brasil com a floresta amazônica e o horizonte urbano, representando a cidade anfitriã da conferência climática COP30",
      logoAlt: "Logo SALURBAL Climate",
      mainTitle: {
        part1: "Levando a",
        highlight1: "saúde pública",
        part2: "à mesa na",
        highlight2: "COP30",
        part3: ": um guia para",
        highlight3: "pesquisadores",
        part4: "e profissionais"
      },
      questions: [
        "Como funciona uma COP do Clima?",
        "Qual é o papel da pesquisa em saúde pública nesse espaço?",
        "Como os pesquisadores podem se envolver no processo da COP?"
      ]
    }
  };

  // Reactive statement to get current content
  $: currentContent = content[$currentLanguage] || content.en;
  
  // Flag for long title (Spanish)
  $: isLongTitle = $currentLanguage === 'es';
</script>

<section 
  class="hero-section" 
  role="banner"
  aria-label={currentContent.ariaLabel}
>
  <div class="hero-content">
    <div class="hero-header">
      <!-- <div class="update-text">Updated: May 2025</div> -->
      <div class="logos">
        <a href="https://drexel.edu/lac/" target="_blank">
          <img
            src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
            alt={currentContent.logoAlt}
            class="logo-right"
          />
        </a>
      </div>
    </div>

    <div class="hero-text">
      <h1 class="main-title" class:long-title={isLongTitle}>
        {currentContent.mainTitle.part1} <span class="highlight-yellow">{currentContent.mainTitle.highlight1}</span> {currentContent.mainTitle.part2}
        <span class="highlight-green">{currentContent.mainTitle.highlight2}</span>{currentContent.mainTitle.part3}
        <span class="highlight-blue">{currentContent.mainTitle.highlight3}</span> {currentContent.mainTitle.part4}
      </h1>

      <div class="subtitle-questions">
        {#each currentContent.questions as question}
          <p class="subtitle-italic">
            {question}
          </p>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    height: calc(100vh - 30px);
    background-image: url('https://salurbal-climate.github.io/cop_2025_scrolly/img/cop30/hero_image.jpg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    font-family: 'Lato', sans-serif;
    width: 100%;
    overflow: hidden;
  }

  .hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(168, 168, 168, 0.83);
    z-index: 1;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    padding: 2rem;
    text-align: center;
  }

  .hero-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    justify-content: flex-end;
    margin-top: 1rem;
  }

  .update-text {
    font-size: 0.9rem;
    color: #666;
    font-weight: 300;
  }

  .logos {
    display: flex;
    gap: 2rem;
    align-items: center;
  }

  .logo-right {
    height: 60px;
    width: auto;
    object-fit: contain;
  }

  .hero-text {
    max-width: 900px;
    margin: 0 auto;
  }

  .main-title {
    font-size: 3.2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 2.5rem;
    color: #1a365d;
  }

  .main-title.long-title {
    font-size: 2.8rem;
  }

  .highlight-yellow {
    background-color: #f7db78;
    padding: 0em 0em 0em 0em;
    border-radius: 2px;
    color: #1a365d;
    z-index: 444;
  }

  .highlight-green {
    background-color: #6ecea5;
    padding: 0em 0em 0em 0em;
    border-radius: 2px;
    color: #1a365d;
  }

  .highlight-blue {
    background-color: #76a3d3;
    padding: 0em 0em 0em 0em;
    border-radius: 2px;
    color: #1a365d;
  }

  .subtitle-questions {
    padding-bottom: 5rem;
  }

  .subtitle-italic {
    font-size: 1.4rem;
    font-style: italic;
    color: #4a5568;
    margin: 0.5rem 0;
    font-weight: 400;
    line-height: 1.4;
  }
  @media (max-width: 900px) {
    .hero-section {
      height: 120vh;
    }
  }
  @media (max-width: 480px) {
    .hero-section {
      height: 100vh;
    }

    .hero-header {
      flex-direction: column;
      /* gap: 1rem; */
      align-items: center;
      margin-top: 3rem;
    }

    .main-title {
      font-size: 2.5rem;
    }

    /* .main-title.long-title {
      font-size: 2.2rem;
    } */

    .subtitle-italic {
      font-size: 1.1rem;
    }

    .logos {
      gap: 1rem;
    }

    .logo-right {
      height: 40px;
    }
  }
</style>
