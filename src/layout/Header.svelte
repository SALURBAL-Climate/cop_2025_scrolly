<script>
  import { themes } from '../config.js';
  import { getContext } from 'svelte';
  import Icon from '@iconify/svelte';

  export let theme = getContext('theme');
  export let filled = false;
  export let center = true;
</script>

<nav class="parent">
  <div class="float-container">
    <div class="float-child col-wide middle" class:center>
      <a href="https://lacurbanhealth.org">
        <div id="svg-container">
          <img
            id="my-svg"
            src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
            alt="SALURBAL Climate"
          />
        </div>
      </a>
    </div>

    <div class="float-child container_container">
      <div class="container">
        <!-- <a href="https://github.com/Drexel-UHC">
        <div class="social-icon"><Icon icon="mdi:github" /></div>
      </a> -->
        <a href="https://www.facebook.com/LACUrbanHealth">
          <div class="social-icon"><Icon icon="il:facebook" /></div>
        </a>
        <a href="https://x.com/lacurbanhealth">
          <div class="social-icon"><Icon icon="mdi:twitter" /></div>
        </a>
        <a href="https://www.instagram.com/salurbalclimate/">
          <div class="social-icon"><Icon icon="mdi:instagram" /></div>
        </a>
        <a href="https://www.youtube.com/@salurbal">
          <div class="social-icon"><Icon icon="mdi:youtube" /></div>
        </a>
        <a href="https://www.linkedin.com/company/salurbal-project">
          <div class="social-icon"><Icon icon="mdi:linkedin" /></div>
        </a>
      </div>
    </div>
  </div>
</nav>

<style>
  #svg-container {
    width: 50px; /* Increased width for better visibility */
    height: 25px; /* Set height to 25px as requested */
    display: flex;
    align-items: center; /* Vertically center the logo */
  }

  #my-svg {
    width: 100%; /* Make the SVG width fill the container */
    height: 100%; /* Make the SVG height fill the container */
    object-fit: contain; /* Adjust the object-fit property as per your needs */
  }

  .parent {
    height: 30px; /* Reset to original height for smaller logo */
  }
  nav {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: fixed; /* Changed from relative to fixed */
    top: 0; /* Stick to the top */
    left: 0; /* Full width from left edge */
    right: 0; /* Full width to right edge */
    width: 100%; /* Ensure full width */

    margin-bottom: 0; /* Remove negative margin */
    border-bottom: 1px solid #cdcdcd7d;
    z-index: 9999; /* High z-index to stay above scrolly content */
    background-color: white; /* Add background to prevent content showing through */
  }
  a img:hover {
    cursor: pointer;
  }
  .container_container {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: space-between;
  }
  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%; /* Take full height of parent */
    /* border: 1px solid black; */
  }
  .social-icon {
    font-size: 1rem; /* Reduced from 1.5rem */
    padding: 0.25rem; /* Reduced padding */
    display: flex;
    align-items: center; /* Vertically center icons */
  }
  .float-container {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; /* Vertically center all children */
    height: 100%; /* Take full height of parent */
    padding-left: 2%;
    padding-right: 2%;
  }

  .float-child {
    width: min-content;
  }

  @media (max-width: 400px) {
    .parent {
      height: 120px;
    }

    .float-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-left: 5%;
      padding-right: 5%;
    }

    .float-child {
      width: min-content;
    }
  }
</style>
