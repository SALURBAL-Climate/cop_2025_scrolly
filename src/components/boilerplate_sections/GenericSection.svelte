<script>
  import Section from '../../layout/Section.svelte';
  import Arrow from '../../ui/Arrow.svelte';

  // Props
  export let title = 'Section Title';
  export let content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quam deleniti dolorum aspernatur cupiditate labore debitis facilis veniam? Illo cupiditate, perspiciatis doloribus consequuntur blanditiis asperiores nemo optio at sed laboriosam.';
  export let arrow = true;
</script>

<Section>
  <h3>{title}</h3>
  <p>{content}</p>
  {#if arrow}
    <div style="display: flex; justify-content: center; align-items: center;">
      <Arrow color="black" animation={true} />
    </div>
  {/if}
</Section>

<div style="height: 3rem" />
