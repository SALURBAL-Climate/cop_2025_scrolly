<script>
  export let iconSrc;
  export let iconAlt;
  export let description;
  export let alignment = 'left'; // 'left' or 'right'
</script>

<div class="action-item {alignment}">
  <div class="action-icon">
    <img src={iconSrc} alt={iconAlt} class="icon-image" />
  </div>
  <div class="action-text">
    <p class="action-description">
      {description}
    </p>
  </div>
</div>

<style>
  .action-item {
    display: flex;
    align-items: center;
    gap: 3rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .action-item.left {
    flex-direction: row;
  }

  .action-item.right {
    flex-direction: row-reverse;
  }

  .action-icon {
    flex-shrink: 0;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: var(--hex-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
  }

  .icon-image {
    width: 80px;
    height: 80px;
    object-fit: contain;
    filter: brightness(0) invert(1); /* Make icons white */
  }

  .action-text {
    flex: 1;
    text-align: left;
  }

  .action-item.right .action-text {
    text-align: right;
  }

  .action-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--dark-text);
    margin: 0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .action-item {
      flex-direction: column !important;
      text-align: center;
      gap: 1.5rem;
    }

    .action-text {
      text-align: center !important;
    }

    .action-icon {
      width: 100px;
      height: 100px;
      padding: 15px;
    }

    .icon-image {
      width: 70px;
      height: 70px;
    }

    .action-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .action-icon {
      width: 80px;
      height: 80px;
      padding: 12px;
    }

    .icon-image {
      width: 56px;
      height: 56px;
    }

    .action-description {
      font-size: 0.95rem;
    }
  }
</style>
