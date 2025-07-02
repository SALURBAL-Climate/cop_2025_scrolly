<script>
  import { getContext } from 'svelte';
  import Icon from '@iconify/svelte';

  export let theme = getContext('theme');
  export let filled = false;
  export let center = true;
</script>

<nav class="header-container">
  <div class="logo-section">    <a href="https://drexel.edu/lac/" target="_blank" aria-label="Visit SALURBAL Climate website">
      <img
        src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
        alt="SALURBAL Climate logo - Climate Change and Urban Health in Latin America"
        class="logo"
      />
    </a><!-- <div class="separator">|</div> -->
    <div class="title-text">
      <span class="title-full">Bringing health to the table at COP30</span>
      <span class="title-mobile">Health at COP30</span>
    </div>
  </div>
  <div class="social-section">
    <a href="https://www.facebook.com/LACUrbanHealth" aria-label="Visit SALURBAL Climate on Facebook" target="_blank">
      <Icon icon="il:facebook" />
    </a>
    <a href="https://x.com/lacurbanhealth" aria-label="Follow SALURBAL Climate on Twitter/X" target="_blank">
      <Icon icon="mdi:twitter" />
    </a>
    <a href="https://www.instagram.com/salurbalclimate/" aria-label="Follow SALURBAL Climate on Instagram" target="_blank">
      <Icon icon="mdi:instagram" />
    </a>
    <a href="https://www.youtube.com/@salurbal" aria-label="Subscribe to SALURBAL on YouTube" target="_blank">
      <Icon icon="mdi:youtube" />
    </a>
    <a href="https://www.linkedin.com/company/salurbal-project" aria-label="Connect with SALURBAL Project on LinkedIn" target="_blank">
      <Icon icon="mdi:linkedin" />
    </a>
    <div class="pdf-container">
      <a href="https://drive.google.com/file/d/1768UAX-wSDKQwYeKp2PFfA3jvp2fBgpk/view" target="_blank" aria-label="View PDF guide" class="pdf-link">
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
    height: 100%;
    border-left: 1px solid #cdcdcd7d;
    padding-left: 0.5rem;
  }

  .pdf-link {
    gap: 0.01rem;
    text-decoration: none;
  }

  .pdf-text {
    font-size: 0.75rem;
    font-weight: 600;
    color: #333;
  }
 
</style>
