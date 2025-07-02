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

 
</style>
