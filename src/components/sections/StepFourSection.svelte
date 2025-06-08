<script>
  import Section from '../../layout/Section.svelte';
  import Arrow from '../../ui/Arrow.svelte';
</script>

<Section>
  <h3>
    Step 4. Creating a hierarchy of geographic units within each SALURBAL city
  </h3>
  <p class="text-medium">
    In order to capture within-city differences and accommodate data available
    for different geographic levels, we defined units at multiple geographic
    "levels".
  </p>
  <p class="text-medium">
    Each SALURBAL city is referred to as a Level 1 unit (L1). Administrative
    units that compose each city (as described in step 3) are referred to Level
    2 units (L2). We also defined smaller geographic units, which are similar to
    neighborhoods nested within each L2. These are referred to as Level 3 units
    (L3s).
  </p>
  <p class="text-medium">
    In countries where L3s were not defined for the entire territory, SALURBAL
    created L3 proxies by combining other available geographic units. When L3s
    were too small for our research purposes, neighborhoods were proxied using
    slightly larger units. We refer to these as Level 2.5 units (L2.5s).
  </p>
  <p class="text-medium">
    Let's go back to São Paulo to see how these different geographic levels
    apply to a real city.
  </p>
  <div
    style="display: flex; justify-content: center; align-items: center; margin-top: 1rem;"
  >
    <Arrow color="black" animation={true} />
  </div>
</Section>
