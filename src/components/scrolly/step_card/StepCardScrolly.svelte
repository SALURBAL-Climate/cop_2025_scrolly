<script>  import { onMount } from 'svelte';
  import Scroller from '@layout/Scroller.svelte';
  import { colors } from '@/layout/branding.js';
  import { cardSteps } from './data.js';

  // Local state
  let threshold = 0.5;
  let id = { card_scrolly_1: null };
  let currentStep = 0;
  let currentCard = cardSteps[0];

  // Update card when step changes
  function updateCardForStep(stepId) {
    const stepIndex = parseInt(stepId.replace('step', '')) - 1;
    if (stepIndex >= 0 && stepIndex < cardSteps.length) {
      currentStep = stepIndex;
      currentCard = cardSteps[stepIndex];
    }
  }

  // Actions for scrolly steps
  let actions = {
    card_scrolly_1: {}
  };

  // Populate actions from cardSteps
  cardSteps.forEach((step, index) => {
    actions.card_scrolly_1[`step${index + 1}`] = () => updateCardForStep(`step${index + 1}`);
  });

  // Track previous IDs for actions
  let idPrev = { card_scrolly_1: null };

  function runActions(codes = []) {
    codes.forEach((code) => {
      if (id[code] != idPrev[code]) {
        if (actions[code][id[code]]) {
          actions[code][id[code]]();
        }
        idPrev[code] = id[code];
      }
    });
  }

  $: {
    if (id) {
      runActions(Object.keys(actions));
    }
  }

  onMount(() => {
    // Initialize with first step
    updateCardForStep('step1');
  });
</script>

<div style="height: 3rem" />

<Scroller {threshold} bind:id={id['card_scrolly_1']} splitscreen={true}>
  <div slot="background">
    <figure>
      <div class="col-full height-full card-background">
        <div class="card-container">
          {#each cardSteps as card, index}
            <div 
              class="card-visual card-visual-{index}"
              class:active={index === currentStep}
            >
              <div class="card-content">
                <div class="card-icon">
                  {@html card.icon}
                </div>
                <h3 class="card-title">{card.title}</h3>
                <p class="card-description">{card.description}</p>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </figure>
  </div>
  <div slot="foreground">
    {#each cardSteps as step, index}
      <section data-id="step{index + 1}">
        <div class="col-medium">
          <h2>{step.title}</h2>
          <p>{step.content}</p>
        </div>
      </section>
    {/each}
  </div>
</Scroller>

<style>
  .card-background {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .card-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-visual {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 400px;
    opacity: 0;
    transition: opacity 0.6s ease-in-out;
    z-index: 1;
  }

  .card-visual.active {
    opacity: 1;
    z-index: 10;
  }

  .card-visual:first-child {
    opacity: 1;
  }

  .card-content {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    text-align: center;
    min-height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .card-icon {
    width: 80px;
    height: 80px;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card-icon :global(svg) {
    width: 100%;
    height: 100%;
  }

  .card-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 1rem;
    line-height: 1.3;
  }

  .card-description {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    margin: 0;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .card-visual {
      width: 90%;
      max-width: 350px;
    }

    .card-content {
      padding: 1.5rem;
      min-height: 250px;
    }

    .card-icon {
      width: 60px;
      height: 60px;
      margin-bottom: 1rem;
    }

    .card-title {
      font-size: 1.25rem;
    }

    .card-description {
      font-size: 0.9rem;
    }
  }
</style>
