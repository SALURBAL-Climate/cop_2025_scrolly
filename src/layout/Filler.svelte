<script>
  import { themes } from '../config.js';
  import { getContext } from 'svelte';

  export let theme = getContext('theme');
  export let center = true;
  export let wide = false;
  export let short = false;
</script>

<section
  style="color: {themes[theme]['text']}; background-color: {themes[theme][
    'background'
  ]};"
>
  <div
    class="middle"
    class:center
    class:col-medium={!wide}
    class:col-wide={wide}
    class:height-full={!short}
    class:short
  >
    <slot />
  </div>
</section>

<style>
  section {
    padding: 31px 0;
  }
  .short {
    min-height: 50vh;
  }
</style>
