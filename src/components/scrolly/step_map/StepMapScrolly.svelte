<script>  import { onMount } from 'svelte';
  import Scroller from '@layout/Scroller.svelte';
  import { Map, MapSource, MapLayer, MapPopup } from '@/../libs/@onsvisual/svelte-maps/index.mjs';
  import { bounds } from '@/data/mapBounds.js';
  import { getTopo } from '@/utils.js';
  import { colors } from '@/layout/branding.js';
  import { dataSources, getDataSourceKeys } from './data.js';

  // Local state instead of props from parent
  let threshold = 0.5;
  let id = { map_scrolly_1: null }; // Initialize with scrolly key
  let map_scrolly_1;
  let zoom;
  let center;
  let hovered;
  let custom_1;
    // GeoJSON data storage - simplified for template
  const geojsonData = {};
  
  // Initialize only the geojson variables we need for 3 steps
  const requiredDataSources = ['municipio_centroid', 'l2', 'l1ad'];
  requiredDataSources.forEach(key => {
    geojsonData[key] = null;
  }); 
  
  // Style props - simplified
  let style_l1 = `color: ${colors.error}; font-weight: 900;`;
  let style_l2 = `color: ${colors.primary}; font-weight: 900;`;
  // Unified step configuration - simplified to 3 steps
  const scrollySteps = [
    {
      id: 'step1',
      content: {
        text: `<p>This is the first step of the scrolly story.</p>`
      },
      mapConfig: {
        bounds: bounds.southAmerica,
        layers: {
          municipio_centroid: {
            'circle-color': colors.error,
            'circle-radius': 7,
            'circle-stroke-color': colors.error,
            'circle-stroke-width': 1,
          },
          sp_popup: true,
        }
      }
    },
    {
      id: 'step2',
      content: {
        text: `<p>This is the second step showing <span style="${style_l2}">administrative boundaries</span>.</p>`
      },
      mapConfig: {
        bounds: bounds.l1ad,
        layers: {
          l2_line: {
            'line-color': colors.primary,
            'line-width': 5,
          },
        }
      }
    },
    {
      id: 'step3',
      content: {
        text: `<p>This is the third and final step showing <span style="${style_l1}">combined areas</span>.</p>`
      },
      mapConfig: {
        bounds: bounds.l1ad,
        layers: {
          l2_line: {
            'line-color': colors.primary,
            'line-width': 2,
            'line-opacity': 1,
          },
          l2_fill: {
            'fill-color': colors.error,
            'fill-opacity': 0.5,
          },
          l1ad_line: {
            'line-color': colors.error,
            'line-width': 5,
          },
        }
      }
    }
  ];

  // Current step configuration
  let currentStep = scrollySteps[0];
  // Update map configuration when step changes
  function updateMapForStep(stepId) {
    const step = scrollySteps.find(s => s.id === stepId);
    if (step && map_scrolly_1) {
      currentStep = step;
      fitBounds(map_scrolly_1, step.mapConfig.bounds);
      custom_1 = {
        mapid: stepId,
        layers: step.mapConfig.layers
      };
    }
  }

  // Helper function for map bounds
  function fitBounds(map, bounds) {
    if (map) {
      map.fitBounds(bounds, { animate: true, padding: 30 });
    }
  }  // Load data on mount
  onMount(() => {
    // Load only required data sources for the simplified template
    requiredDataSources.forEach(key => {
      if (dataSources[key]) {
        const source = dataSources[key];
        getTopo(source.url, source.layer).then((res) => {
          geojsonData[key] = res;
        });
      }
    });
    
    // Initialize with first step
    updateMapForStep(scrollySteps[0].id);
  });
  
  // Actions for scrolly steps - simplified to use the unified structure
  let actions = {
    map_scrolly_1: {}
  };
  
  // Populate actions from scrollySteps
  scrollySteps.forEach(step => {
    actions.map_scrolly_1[step.id] = () => updateMapForStep(step.id);
  });
  
  // Initialize custom styles with first step
  custom_1 = {
    mapid: scrollySteps[0].id,
    layers: scrollySteps[0].mapConfig.layers
  };
  
  // Track previous IDs for actions
  let idPrev = { map_scrolly_1: null };
  
  function runActions(codes = []) {
    codes.forEach((code) => {
      if (id[code] != idPrev[code]) {
        if (actions[code][id[code]]) {
          actions[code][id[code]]();
        }
        idPrev[code] = id[code];
      }
    });
  }
  
  $: {
    if (id) {
      runActions(Object.keys(actions));
    }
  }
</script>

<div style="height: 3rem" />

<Scroller {threshold} bind:id={id['map_scrolly_1']} splitscreen={true}>
  <div slot="background">
    <figure>
      <div class="col-full height-full">
        <Map
          id="map_scrolly_1"
          style="./data/style-esri-world-imagery.json"
          location={{ bounds: bounds.southAmerica }}
          controls={false}
          scales={true}
          hover={true}
          bind:hovered
          bind:map={map_scrolly_1}
          bind:zoom
          bind:center        >
          {#if currentStep.showLegend}
            <div class="sticky-legend">
              <div class="boundary-metro-legend" />
              <div class="boundary-legend-text">
                Example legend item 1
              </div>
              <div class="boundary-sp-muni-legend" />
              <div class="boundary-legend-text">Example legend item 2</div>
              <div class="boundary-l1-legend" />
              <div class="boundary-legend-text">
                Example legend item 3
              </div>
            </div>
          {/if}          <MapSource
            map_id="map_scrolly_1"
            id="municipio_centroid"
            type="geojson"
            data={geojsonData.municipio_centroid}
            promoteId={'municipio_centroid'}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="municipio_centroid"
              custom={custom_1}
              type="circle"
            />
            <MapPopup map_id="map_scrolly_1" custom={custom_1} />
          </MapSource>

          <MapSource
            map_id="map_scrolly_1"
            id="l2"
            type="geojson"
            data={geojsonData.l2}
            promoteId={dataSources.l2?.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="l2_line"
              custom={custom_1}
              type="line"
            />
            <MapLayer
              map_id="map_scrolly_1"
              id="l2_fill"
              custom={custom_1}
              type="fill"
            />
          </MapSource>

          <MapSource
            map_id="map_scrolly_1"
            id="l1ad"
            type="geojson"
            data={geojsonData.l1ad}
            promoteId={dataSources.l1ad?.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="l1ad_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
        </Map>
      </div>
    </figure>
  </div>
  <div slot="foreground">
    {#each scrollySteps as step}
      <section data-id={step.id}>
        <div class="col-medium {step.content.class || ''}">
          {@html step.content.text}
        </div>
      </section>
    {/each}
  </div>
</Scroller>

<style>
  .sticky-legend {
    position: fixed;
    bottom: 2%;
    right: 1%;
    border-radius: 5px;
    background-color: white;
    padding: 10px;
    z-index: 9999;
    display: grid;
    align-items: center;
    grid-template-columns: min-content 1fr;
  }
  
  .boundary-legend-text {
    padding-left: 0.5rem;
    font-size: 1.25em;
  }  .boundary-metro-legend {
    width: 2rem;
    height: 5px;
    background-color: #8c198c;
  }
  
  .boundary-sp-muni-legend {
    width: 2rem;
    height: 5px;
    margin-top: 15px;
    margin-bottom: 15px;
    background-color: #2f8fbc;
  }
  
  .boundary-l1-legend {
    width: 2rem;
    height: 5px;
    background-color: #bc3b2f;
  }
</style>
