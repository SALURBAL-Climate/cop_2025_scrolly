<script>
  import Section from '@/layout/Section.svelte';
  import Media from '@/layout/Media.svelte';
  import { Map, MapSource, MapLayer, MapTooltip } from '@/../libs/@onsvisual/svelte-maps/index.mjs';
  import { bounds } from '@/data/mapBounds.js';
  import { getTopo } from '@/utils.js';
  import { colors } from '@/layout/branding.js';

  // Internal state - no longer accepting props
  let map_static_1;
  let center;
  let hovered;
   
  
  // Data source for SALURBAL centroids
  const src__salurbal_centroid = {
    url: './data/salurbal_l1ad_centroid.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_salurbal_centroid;
  getTopo(src__salurbal_centroid.url, src__salurbal_centroid.layer).then(
    (res) => {
      geojson_salurbal_centroid = res;
    }
  );
</script>

<Section>
  <h3>Step 1. Identifying cities with a population of 100,000 or more.</h3>
  <div class="two-col-container">
    <div class="left-col">
      <p class="text-medium">
        The SALURBAL city universe was defined as all urban agglomerations with
        at least 100,000 residents as of 2010.
      </p>
      <p class="text-medium">
        We used the <a href="http://atlasofurbanexpansion.org/" target="_blank"
          >Atlas of Urban Expansion</a
        >
        and country census data from
        <a href="https://citypopulation.de/" target="_blank"
          >citypopulation.de</a
        > to obtain a list of all cities (as defined in these sources) with 100,000
        residents or more in 2010. We combined both lists and eliminated duplicates.
      </p>
    </div>    <div class="right-col">
      <Media col="medium" caption="Interactive map of all 371 SALURBAL cities">
        <div class="chart-sml">
          {#if geojson_salurbal_centroid}
            <Map
              id="static_map_1"
              style="./data/style-osm-grey.json"
              location={{ bounds: bounds.southAmericaShifted }}
              controls={true}
              scales={false}
              dragPan={true}
              bind:map={map_static_1}
              bind:center
            >
              <MapSource
                map_id="static_map_1"
                id="static_map_1-src"
                type="geojson"
                data={geojson_salurbal_centroid}
                promoteId={'l1_label'}
                maxzoom={13}
              >
                <MapLayer
                  map_id="static_map_1"
                  id="static_map_1-circle"
                  type="circle"
                  paint={{
                    'circle-color': colors.warning,
                    'circle-radius': 2.5,
                    'circle-stroke-color': 'black',
                    'circle-stroke-width': 0.1,
                  }}
                  hover={true}
                  bind:hovered
                >
                  <MapTooltip map_id="static_map_1" content={`${hovered}`} />
                </MapLayer>
              </MapSource>
            </Map>
          {/if}
        </div>
      </Media>
    </div>
  </div>
</Section>

<style>
  .two-col-container {
    display: flex;
    justify-content: space-between;
  }

  .left-col {
    flex: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .right-col {
    flex: 3;
    margin-top: 0.5rem;
  }

  .chart-sml {
    font-size: 0.85em;
    height: 350px;
  }

  @media (max-width: 768px) {
    .two-col-container {
      flex-direction: column;
    }

    .left-col,
    .right-col {
      flex: 1;
      width: 100%;
    }
  }
</style>
