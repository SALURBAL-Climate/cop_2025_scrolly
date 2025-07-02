<script>
  export let iconSrc;
  export let iconAlt;
  export let description;
  export let alignment = 'left'; // 'left' or 'right'
</script>

<div class="action-item {alignment}">
  <img src={iconSrc} alt={iconAlt} class="action-icon" />
  <div class="action-text">
    <p class="action-description">
      {@html description}
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
    width: 220px;
    height: 220px;
    object-fit: contain;
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

  /* Mobile responsive design */
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
      width: 150px;
      height: 150px;
    }

    .action-description {
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .action-item {
      gap: 1rem;
    }

    .action-icon {
      width: 120px;
      height: 120px;
    }

    .action-description {
      font-size: 0.95rem;
    }
  }
</style>
