<script>
  import { themes } from '../config.js';
  import { getContext } from 'svelte';
  import { currentLanguage } from '../stores/language.js';
  import Icon from '@iconify/svelte';
  export let theme = getContext('theme');

  // Content for each language
  const content = {
    en: {
      authors: "Authors: Katy Indvik¹, Elizabeth Cardona², Carolina Rendón¹, Mariana Lazo¹, Nelson Gouveia³, Waleska Caiaffa⁴, Olga Lucia Sarmiento⁵, Ana Diez Roux¹",
      designedBy: "Designed by: Carolina Rendón and Martin Gillis",
      engineeredBy: "Engineered by: Ran Li",
      mediaContact: "Media contact: Carolina Rendon",
      acknowledgements: "Acknowledgements: José Siri (Consultant, WHO) provided valuable feedback.",
      funding: "Climate Change and Urban Health in Latin America (“SALURBAL-Climate”) is funded by the Wellcome Trust (227810/Z/23/Z, AVDR/OLS). This product was also supported by funding from the National Institute on Minority Health and Health Disparities, Grant #P20MD019221.",
      affiliations: "1. Urban Health Collaborative, Drexel University. 2. INCAP, Institute of Nutrition of Central America and Panama. 3. University of São Paulo Medical School. 4. Observatory for Urban Health in Belo Horizonte, Federal University of Minas Gerais. 5. School of Medicine, Universidad de los Andes.",
      followUs: "Follow us:",
      contactUs: "Contact us",
      privacyLegal: "Privacy and legal"
    },
    es: {
      authors: "Autores: Katy Indvik¹, Elizabeth Cardona², Carolina Rendón¹, Mariana Lazo¹, Nelson Gouveia³, Waleska Caiaffa⁴, Olga Lucia Sarmiento⁵, Ana Diez Roux¹",
      designedBy: "Diseñado por: Carolina Rendón y Martin Gillis",
      engineeredBy: "Desarrollado por: Ran Li",
      mediaContact: "Contacto en prensa: Carolina Rendón",
      acknowledgements: "Agradecimientos: José Siri (Consultor, OMS) aportó comentarios valiosos.",
      funding: "Cambio Climático y Salud Urbana en América Latina (SALURBAL-Clima) está financiado por el Wellcome Trust (227810/Z/23/Z, AVDR/OLS). Este producto también ha sido financiado por el Instituto Nacional de Salud de las Minorías y Disparidades Sanitarias, subvención n.º P20MD019221. (Evaluación de la OMS de la salud en las NDC, 2023).",
      affiliations: "1. Urban Health Collaborative, Drexel University. 2. INCAP, Institute of Nutrition of Central America and Panama. 3. University of São Paulo Medical School. 4. Observatory for Urban Health in Belo Horizonte, Federal University of Minas Gerais. 5. School of Medicine, Universidad de los Andes.",
      followUs: "Síguenos:",
      contactUs: "Contáctanos",
      privacyLegal: "Privacidad y legal"
    },
    pt: {
      authors: "Autores: Katy Indvik¹, Elizabeth Cardona², Carolina Rendón¹, Mariana Lazo¹, Nelson Gouveia³, Waleska Caiaffa⁴, Olga Lucia Sarmiento⁵, Ana Diez Roux¹",
      designedBy: "Projetado por: Carolina Rendón e Martin Gillis",
      engineeredBy: "Desenvolvido por: Ran Li",
      mediaContact: "Contato com a mídia: Carolina Rendón",
      acknowledgements: "Agradecimentos: José Siri (Consultor, OMS) forneceu contribuições valiosas.",
      funding: "O projeto Mudanças Climáticas e Saúde Urbana na América Latina (“SALURBAL-Clima”) é financiado pelo Wellcome Trust (227810/Z/23/Z, AVDR/OLS). Este produto também foi financiado pelo Instituto Nacional de Saúde das Minorias e Disparidades na Saúde, Subsídio nº P20MD019221.",
      affiliations: "1. Urban Health Collaborative, Drexel University. 2. Instituto de Nutrição da América Central e Panamá (INCAP). 3. Faculdade de Medicina, Universidade de São Paulo. 4. Observatório de Saúde Urbana de Belo Horizonte, Universidade Federal de Minas Gerais. 5. Faculdade de Medicina, Universidad de los Andes.",
      followUs: "Siga-nos:",
      contactUs: "Entre em contato",
      privacyLegal: "Privacidade e legal"
    }
  };

  $: currentContent = content[$currentLanguage] || content.en;
</script>

<footer
  class="parent"
  style="color: {themes[theme]['text']}; background-color: {themes[theme][
    'pale'
  ]};"
>
  <div class="col-wide" data-analytics="footer">
 
    <!-- Authors and Credits Section -->
    <div class="authors-credits-section">

  

      <p class="authors-block">
        <strong>{currentContent.authors.split(':')[0]}:</strong> {currentContent.authors.split(':')[1]}
      </p>
      
      <p class="credits-line">
        <strong>{currentContent.designedBy.split(':')[0]}:</strong> {currentContent.designedBy.split(':')[1]}
      </p>
      
      <p class="credits-line">
        <strong>{currentContent.engineeredBy.split(':')[0]}:</strong> {currentContent.engineeredBy.split(':')[1]}
      </p>
      

      
      <p class="credits-line">
        <strong>{currentContent.acknowledgements.split(':')[0]}:</strong> {currentContent.acknowledgements.split(':')[1]}
      </p>
      
      {#if $currentLanguage === 'pt'}
        <p class="credits-line">
          <strong>Tradução para o português por:</strong> Amanda Magalhães
        </p>
      {/if}

      <p class="funding-line">
        {currentContent.funding}
      </p>
      
      <p class="affiliations-line">
        {currentContent.affiliations}
      </p>
          <p class="authors-block">
       <a href="https://doi.org/10.5281/zenodo.16422653" target="_blank" aria-label="Cite this work - DOI on Zenodo">
        <img src="https://zenodo.org/badge/DOI/10.5281/zenodo.16422653.svg" alt="DOI: 10.5281/zenodo.16422653" class="doi-badge" />
        </a>
      </p>
      
    </div>

    <!-- Original Footer Content -->
    <div class="container_container">
      <div class="item">        <a href="https://drexel.edu/lac/" target="_blank" aria-label="Visit SALURBAL Climate website">
          <div id="svg-container">
            <img
              id="my-svg"
              src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
              alt="SALURBAL Climate logo - Climate Change and Urban Health in Latin America"
            />
          </div>
        </a>
      </div>
      <div>
        <div class="item" id="follow-section">
          {currentContent.followUs}          <div class="container">
            <a href="https://www.facebook.com/LACUrbanHealth" aria-label="Visit SALURBAL Climate on Facebook" target="_blank">
              <div class="social-icon"><Icon icon="il:facebook" /></div>
            </a>
            <a href="https://x.com/lacurbanhealth" aria-label="Follow SALURBAL Climate on Twitter/X" target="_blank">
              <div class="social-icon"><Icon icon="mdi:twitter" /></div>
            </a>
            <a href="https://www.instagram.com/salurbalclimate/" aria-label="Follow SALURBAL Climate on Instagram" target="_blank">
              <div class="social-icon"><Icon icon="mdi:instagram" /></div>
            </a>
            <a href="https://www.youtube.com/@salurbal" aria-label="Subscribe to SALURBAL on YouTube" target="_blank">
              <div class="social-icon"><Icon icon="mdi:youtube" /></div>
            </a>
            <a href="https://www.linkedin.com/company/salurbal-project" aria-label="Connect with SALURBAL Project on LinkedIn" target="_blank">
              <div class="social-icon"><Icon icon="mdi:linkedin" /></div>
            </a>
        
          </div>
        </div>
      </div>
    </div>

    <div class="link-tree">
      <ul>
        <li>
          <a
            href="https://drexel.edu/uhc/about/contact/"
            class="link"
            style="color: {themes[theme]['text']}">{currentContent.contactUs}</a
          >
        </li>
        <li>
          <a
            href="https://drexel.edu/privacy"
            class="link"
            style="color: {themes[theme]['text']}">{currentContent.privacyLegal}</a
          >
        </li>
      </ul>
    </div>
  </div>
</footer>

<style>
  .container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .container_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

 
  #follow-section {
    min-width: 200px;
  }

  .social-icon {
    font-size: 1.5rem;
  }

  /* DOI Badge Styling */
  .doi-badge-container {
    margin-top: 1rem;
    text-align: center;
  }

  .doi-badge {
    height: 20px;
    transition: opacity 0.3s ease;
  }

  .doi-badge:hover {
    opacity: 0.8;
  }
  footer {
    padding-bottom: 72px;
    padding-top: 36px;
    font-size: 18px;
  }

  /* Authors and Credits Styling */
  .authors-credits-section {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    text-align: left;
  }

  .authors-block,
  .credits-line,
  .funding-line,
  .affiliations-line {
    margin: 0 0 0.8rem 0;
    font-size: 0.9rem;
    line-height: 1.4;
  }

  .funding-line {
    margin-top: 0.5rem;
  }

  .affiliations-line {
    font-size: 0.8rem;
    margin-top: 1rem;
  }

  .email-link {
    color: inherit;
    text-decoration: underline;
  }

  .email-link:hover {
    opacity: 0.8;
  }

  /* Remove old complex styling */
  #svg-container {
    width: 150px; /* Set the desired width of the container */
    height: 60px; /* Set the desired height of the container */
  }
  .link-tree {
    margin-top: 3rem;
  }
  footer a.link {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-decoration: underline;
    display: inline-block;
  }
  footer a.link:hover {
    text-decoration: none;
  }
  footer a.link:active {
    outline: 3px solid transparent;
    background-color: #fd0;
    -webkit-box-shadow:
      0 -2px #fd0,
      0 4px #222;
    box-shadow:
      0 -2px #fd0,
      0 4px #222;
    color: #222;
    text-decoration: none;
  } 
  ul {
    padding: 0;
    margin: 0;
  }
  li {
    margin-right: 18px;
    display: inline-block;
  } 
  a img:hover {
    cursor: pointer;
  }
</style>
