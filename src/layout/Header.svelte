<script>
  import { getContext } from 'svelte';
  import Icon from '@iconify/svelte';

  export let theme = getContext('theme');
  export let filled = false;
  export let center = true;
</script>

<nav class="header-container">
  <div class="logo-section">
    <a href="https://lacurbanhealth.org">
      <img
        src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
        alt="SALURBAL Climate"
        class="logo"
      />
    </a> 
    Bringing urban health to the table 
at COP30
  </div>

  <div class="social-section">
    <a href="https://www.facebook.com/LACUrbanHealth">
      <Icon icon="il:facebook" />
    </a>
    <a href="https://x.com/lacurbanhealth">
      <Icon icon="mdi:twitter" />
    </a>
    <a href="https://www.instagram.com/salurbalclimate/">
      <Icon icon="mdi:instagram" />
    </a>
    <a href="https://www.youtube.com/@salurbal">
      <Icon icon="mdi:youtube" />
    </a>
    <a href="https://www.linkedin.com/company/salurbal-project">
      <Icon icon="mdi:linkedin" />
    </a>
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
  }

  .logo-section {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid red;
    flex: 1;
  }

  .logo {
    height: 25px;
    width: auto;
    object-fit: contain;
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
 
</style>
