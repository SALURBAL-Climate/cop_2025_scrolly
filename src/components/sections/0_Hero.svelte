<script>
  // Add any necessary imports or logic here
</script>

<section class="hero-section">
  <div class="hero-content">
    <div class="hero-header">
      <!-- <div class="update-text">Updated: May 2025</div> -->
      <div class="logos">
        <img
          src="./img/cop30/EN_Logo_SALURBAL-Climate_png.png"
          alt="SALURBAL Climate"
          class="logo-right"
        />
      </div>
    </div>

    <div class="hero-text">
      <h1 class="main-title">
        Bringing <span class="highlight-yellow">urban health</span> to the table
        at <span class="highlight-green">COP30</span>: A guide for
        <span class="highlight-blue">public health</span> researchers and practitioners
      </h1>

      <div class="subtitle-questions">
        <p class="subtitle-italic">How do "COPs" work?</p>
        <p class="subtitle-italic">
          What role does public health research play?
        </p>
        <p class="subtitle-italic">
          How can researchers translate health evidence to drive climate action?
        </p>
      </div>
    </div>
  </div>
</section>

<style>
  .hero-section {
    height: calc(100vh - 30px);
    background-image: url('/img/cop30/hero_image.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: flex;
    position: relative;
    font-family: 'Lato', sans-serif;
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

  .logo-left,
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

  .highlight-yellow {
    background-color: rgba(244, 214, 116, 0.6);
    padding: 0em  0em 0em 0em;
    border-radius: 2px;
    color: #1a365d;
  }

  .highlight-green {
    background-color: rgba(111, 209, 166, 0.6);
    padding: 0em  0em 0em 0em;
    border-radius: 2px;
    color: #1a365d;
  }

  .highlight-blue {
    background-color: rgb(116, 161, 210);
    padding: 0em  0em 0em 0em;
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

  @media (max-width: 768px) {
    .hero-header {
      flex-direction: column;
      gap: 1rem;
      align-items: center;
    }

    .main-title {
      font-size: 2.5rem;
    }

    .subtitle-italic {
      font-size: 1.1rem;
    }

    .logos {
      gap: 1rem;
    }

    .logo-left,
    .logo-right {
      height: 40px;
    }
  }
</style>
