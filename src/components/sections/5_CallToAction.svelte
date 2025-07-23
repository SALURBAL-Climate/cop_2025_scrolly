<script>
  import { brandColors } from '../../config.js';
  import ActionItem from './ActionItem.svelte';
  import { getActionItems } from './callToActionData.js';
  import { currentLanguage } from '../../stores/language.js';

  // Content for each language
  const content = {
    en: {
      title: "Public health researchers can engage in the UNFCCC process by:"
    },
    es: {
      title: "Los investigadores de salud pública pueden participar en el proceso de la CMNUCC mediante:"
    },
    pt: {
      title: "Pesquisadores de saúde pública podem se envolver no processo da UNFCCC por meio de:"
    }
  };

  $: currentContent = content[$currentLanguage] || content.en;

  // Reactive data that updates when language changes
  $: actionItems = getActionItems($currentLanguage);

  // Call to Action Component
  // Shows how public health researchers can engage in the UNFCCC process
</script>

<section class="call-to-action-section" style="--hex-blue: {brandColors.hex_blue}; --dark-text: {brandColors.dark_text}; --medium-text: {brandColors.medium_text}">
  <div class="call-to-action-content">
    <div class="section-header">
      <h1 class="section-title">{currentContent.title}</h1>
    </div>
    
    <!-- Action Items -->
    <div class="action-items">
      {#each actionItems as item}
        <ActionItem 
          iconSrc={item.iconSrc}
          iconAlt={item.iconAlt}
          description={item.description}
          alignment={item.alignment}
        />
      {/each}
    </div>
  </div>
</section>

<style>
  .call-to-action-section {
    width: 100%;
    padding: 4rem 0;
    margin: 2rem 0;
  }

  .call-to-action-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-header {
    text-align: center;
    margin-bottom: 3rem;
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

  .action-items {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .call-to-action-section {
      padding: 3rem 0;
    }

    .call-to-action-content {
      padding: 0 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .action-items {
      gap: 2.5rem;
    }
  }

  @media (max-width: 480px) {
    .call-to-action-section {
      padding: 2rem 0;
    }

    .call-to-action-content {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 1.8rem;
    }

    .action-items {
      gap: 2rem;
    }
  }
</style>
