<script>
  import { themes } from '../config.js';
  import { getContext } from 'svelte';
  import Icon from '@iconify/svelte';
  export let theme = getContext('theme');
</script>

<footer
  class="parent"
  style="color: {themes[theme]['text']}; background-color: {themes[theme][
    'pale'
  ]};"
>
  <div class="col-wide" data-analytics="footer">
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
          Follow us:          <div class="container">
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
            style="color: {themes[theme]['text']}">Contact us</a
          >
        </li>
        <li>
          <a
            href="https://drexel.edu/privacy"
            class="link"
            style="color: {themes[theme]['text']}">Privacy and legal</a
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
  footer {
    padding-bottom: 72px;
    padding-top: 36px;
    font-size: 18px;
  }
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
