<script>
  import { getContext, onMount } from 'svelte';
  import Icon from '@iconify/svelte';
  import LanguageSelector from '../components/ui/LanguageSelector.svelte';
  import { currentLanguage, setLanguage } from '../stores/language.js';

  export let theme = getContext('theme');
  export let filled = false;
  export let center = true;

  // Content for each language
  const content = {
    en: {
      titleFull: "Bringing health to the table at COP30",
      titleMobile: "Health at COP30",
      logoAlt: "SALURBAL Climate logo - Climate Change and Urban Health in Latin America",
      visitWebsite: "Visit SALURBAL Climate website",
      facebook: "Visit SALURBAL Climate on Facebook",
      twitter: "Follow SALURBAL Climate on Twitter/X", 
      instagram: "Follow SALURBAL Climate on Instagram",
      youtube: "Subscribe to SALURBAL on YouTube",
      linkedin: "Connect with SALURBAL Project on LinkedIn",
      pdf: "View PDF guide",
      pdfUrl: "https://zenodo.org/records/16413141/files/EN%20COP%2030%20&%20Health%20June%20Final.pdf?download=1"
    },
    es: {
      titleFull: "Llevando la salud a la mesa en COP30",
      titleMobile: "Salud en COP30",
      logoAlt: "Logo SALURBAL Climate - Cambio Climático y Salud Urbana en América Latina",
      visitWebsite: "Visitar el sitio web de SALURBAL Climate",
      facebook: "Visitar SALURBAL Climate en Facebook",
      twitter: "Seguir SALURBAL Climate en Twitter/X",
      instagram: "Seguir SALURBAL Climate en Instagram", 
      youtube: "Suscribirse a SALURBAL en YouTube",
      linkedin: "Conectar con SALURBAL Project en LinkedIn",
      pdf: "Ver guía PDF",
      pdfUrl: "https://zenodo.org/records/16413141/files/ES%20COP%2030%20&%20Health%20July%20Final.pdf?download=1"
    },
    pt: {
      titleFull: "Trazendo saúde à mesa na COP30",
      titleMobile: "Saúde na COP30",
      logoAlt: "Logo SALURBAL Climate - Mudanças Climáticas e Saúde Urbana na América Latina",
      visitWebsite: "Visitar o site SALURBAL Climate",
      facebook: "Visitar SALURBAL Climate no Facebook",
      twitter: "Seguir SALURBAL Climate no Twitter/X",
      instagram: "Seguir SALURBAL Climate no Instagram",
      youtube: "Inscrever-se no SALURBAL no YouTube", 
      linkedin: "Conectar com SALURBAL Project no LinkedIn",
      pdf: "Ver guia PDF",
      pdfUrl: "https://zenodo.org/records/16413141/files/PT%20COP%2030%20&%20Health%20July%20Final.pdf?download=1"
    }
  };

  // Reactive statement to get current content
  $: currentContent = content[$currentLanguage] || content.en;

  // Initialize language from URL on component mount
  onMount(() => {
    // The language store will already be initialized from URL,
    // but this ensures the component is properly synced
    console.log('Header mounted with language:', $currentLanguage);
  });

  function handleLanguageChange(event) {
    setLanguage(event.detail.code);
    console.log('Language changed to:', event.detail);
    // The URL will be automatically updated by the setLanguage function
  }
</script>

<nav class="header-container">
  <div class="logo-section">
    <a href="https://drexel.edu/lac/" target="_blank" aria-label={currentContent.visitWebsite}>
      <img
        src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
        alt={currentContent.logoAlt}
        class="logo"
      />
    </a><!-- <div class="separator">|</div> -->
    <div class="title-text">
      <span class="title-full">{currentContent.titleFull}</span>
      <span class="title-mobile">{currentContent.titleMobile}</span>
    </div>
  </div>
  <div class="social-section">
    <LanguageSelector 
      currentLanguage={$currentLanguage} 
      on:languageChanged={handleLanguageChange} 
    />
    <a href="https://www.facebook.com/LACUrbanHealth" aria-label={currentContent.facebook} target="_blank">
      <Icon icon="il:facebook" />
    </a>
    <a href="https://x.com/lacurbanhealth" aria-label={currentContent.twitter} target="_blank">
      <Icon icon="mdi:twitter" />
    </a>
    <a href="https://www.instagram.com/salurbalclimate/" aria-label={currentContent.instagram} target="_blank">
      <Icon icon="mdi:instagram" />
    </a>
    <a href="https://www.youtube.com/@salurbal" aria-label={currentContent.youtube} target="_blank">
      <Icon icon="mdi:youtube" />
    </a>
    <a href="https://www.linkedin.com/company/salurbal-project" aria-label={currentContent.linkedin} target="_blank">
      <Icon icon="mdi:linkedin" />
    </a>
    <div class="pdf-container">
      <a href={currentContent.pdfUrl} target="_blank" aria-label={currentContent.pdf} class="pdf-link">
        <Icon icon="material-icon-theme:pdf" />
        <span class="pdf-text">PDF</span>
      </a>
    </div>
  </div>
</nav>

<style>
  .header-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background-color: white;
    border-bottom: 1px solid #cdcdcd7d;
    z-index: 9999;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2%;
    font-family: 'Lato', sans-serif;
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    /* border: 1px solid red; */
    flex: 1;
  }

  .logo {
    height: 25px;
    width: auto;
    object-fit: contain;
  }

  .separator {
    color: #777;
    font-weight: 300;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
  .title-text {
    font-size: 0.85rem;
    font-weight: 500;
    color: #000000;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    min-width: 0;
    margin-left: 1rem;
    font-family: 'Lato', sans-serif;
  }

  .title-mobile {
    display: none;
  }

  .title-full {
    display: inline;
  }

  /* Mobile breakpoint */
  @media (max-width: 768px) {
    .title-full {
      display: none;
    }
    
    .title-mobile {
      display: inline;
    }
    
    .pdf-text {
      display: none;
    }
  }

  .social-section {
    display: flex;
    gap: 0.25rem;
  }

  .social-section a {
    font-size: 1rem;
    padding: 0.25rem;
    display: flex;
    align-items: center;
  }

  .pdf-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    border-left: 1px solid #cdcdcd7d;
    padding: 0 0.5rem;
  }

  .pdf-link {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    text-decoration: none;
    height: 100%;
  }

  .pdf-text {
    font-size: 0.75rem;
    font-weight: 600;
    color: #333;
  }
 
</style>
