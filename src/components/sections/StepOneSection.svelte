<script>
  import Section from '../../layout/Section.svelte';
  import { Map, MapSource, MapLayer, MapTooltip } from '../../../libs/@onsvisual/svelte-maps';
  import { colors } from '../../config/colors.js';
  import { bounds } from '../../config/mapBounds.js';

  // Props from parent
  export let geojson_salurbal_centroid;
  export let map_static_1;
  export let center;
  export let hovered;
</script>

<Section>
  <h3>Step 1: Identifying cities with ≥100,000 inhabitants</h3>
  <div class="two-col-container">
    <div class="left-col">
      <div style="height: 400px;">
        <Map
          id="map_static_1"
          style="./data/style-esri-world-imagery.json"
          location={{ bounds: bounds.southAmerica }}
          controls={true}
          scales={true}
          hover={true}
          bind:map={map_static_1}
          bind:center
          bind:hovered
        >
          <MapSource
            id="salurbal_centroid"
            type="geojson"
            data={geojson_salurbal_centroid}
            promoteId="salid1"
            maxzoom={13}
          >
            <MapLayer
              id="salurbal_centroid"
              type="circle"
              paint={{
                'circle-color': colors.warning,
                'circle-radius': [
                  'interpolate',
                  ['linear'],
                  ['zoom'],
                  1,
                  1,
                  4,
                  4,
                  8,
                  8,
                ],
                'circle-stroke-color': 'white',
                'circle-stroke-width': 0.5,
              }}
            />
            <MapTooltip let:data>
              <div class="map-tooltip">
                <strong>{data.salid1_name}</strong><br />
                {data.country_name}<br />
                Population: {data.population_100k}
              </div>
            </MapTooltip>
          </MapSource>
        </Map>
      </div>
    </div>
    <div class="right-col">
      <!-- ...existing content... -->
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
