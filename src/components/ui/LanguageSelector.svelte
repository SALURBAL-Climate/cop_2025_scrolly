<script>
  import { createEventDispatcher } from 'svelte';
  import Icon from '@iconify/svelte';

  const dispatch = createEventDispatcher();

  export let currentLanguage = 'en';
  
  let isOpen = false;
  let dropdownElement;

  const languages = [
    { code: 'en', name: 'English', flag: 'EN' },
    { code: 'es', name: 'Español', flag: 'ES' },
    { code: 'pt', name: 'Português', flag: 'PT' }
  ];

  function toggleDropdown() {
    isOpen = !isOpen;
  }

  function selectLanguage(language) {
    currentLanguage = language.code;
    isOpen = false;
    dispatch('languageChanged', language);
  }

  function handleClickOutside(event) {
    if (dropdownElement && !dropdownElement.contains(event.target)) {
      isOpen = false;
    }
  }

  function handleKeydown(event) {
    if (event.key === 'Escape') {
      isOpen = false;
    }
  }

  $: currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
</script>

<svelte:window on:click={handleClickOutside} on:keydown={handleKeydown} />

<div class="component-container" bind:this={dropdownElement}>
  <button 
    class="language-button" 
    on:click={toggleDropdown}
    aria-label="Select language"
    aria-expanded={isOpen}
  >
    <Icon icon="material-symbols:language" class="globe-icon" />
    <span class="current-language">{currentLang.code.toUpperCase()}</span>
    <Icon 
      icon="mdi:chevron-down" 
      class="chevron {isOpen ? 'chevron-up' : ''}"
    />
  </button>

  {#if isOpen}
    <div class="dropdown" role="menu">
      {#each languages as language}
        <button
          class="language-option {language.code === currentLanguage ? 'active' : ''}"
          on:click={() => selectLanguage(language)}
          role="menuitem"
        >
          <span class="flag">{language.flag}</span>
          <span class="language-name">{language.name}</span>
          {#if language.code === currentLanguage}
            <Icon icon="mdi:check" class="check-icon" />
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .component-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    margin-right: 1rem;
    min-width: fit-content;
  }

  .language-button {
    background: transparent;
    border: 1px solid rgb(192, 192, 192);
    cursor: pointer;
    font-size: 0.75rem;
    font-weight: 500;
    color: #333;
    border-radius: 4px;
    transition: background-color 0.2s ease;
    padding: 0.25rem 0.5rem;
    margin: 0;
    line-height: 1;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .language-button:hover {
    background-color: #f5f5f5;
  }

  .globe-icon {
    font-size: 0.875rem;
    opacity: 0.7;
  }

  .current-language {
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .chevron {
    font-size: 0.75rem;
    transition: transform 0.2s ease;
    opacity: 0.6;
  }

  .chevron-up {
    transform: rotate(180deg);
  }

  .dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    border: 1px solid #e0e0e0;
    border-radius: 6px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    min-width: 140px;
    overflow: hidden;
    z-index: 10000;
    margin-top: 2px;
  }

  .language-option {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
    padding: 0.5rem 0.75rem;
    background: white;
    border: none;
    cursor: pointer;
    font-size: 0.75rem;
    text-align: left;
    transition: background-color 0.2s ease;
  }

  .language-option:hover {
    background-color: #f8f9fa;
  }

  .language-option.active {
    background-color: #e3f2fd;
    color: #1976d2;
  }

  .flag {
    font-size: 0.65rem;
    font-weight: 600;
    width: 1.25rem;
    text-align: center;
    color: #666;
    letter-spacing: 0.5px;
  }

  .language-name {
    flex: 1;
    font-weight: 500;
  }

  .check-icon {
    font-size: 0.875rem;
    color: #1976d2;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .language-button {
      padding: 0.25rem;
    }
    
     
    .dropdown {
      right: -10px;
    }
  }
</style>
