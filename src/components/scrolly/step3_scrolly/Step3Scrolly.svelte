<script>  import { onMount } from 'svelte';
  import Scroller from '@layout/Scroller.svelte';
  import { Map, MapSource, MapLayer, MapPopup } from '@/../libs/@onsvisual/svelte-maps/index.mjs';
  import { bounds } from '@/data/mapBounds.js';
  import { getTopo } from '@/utils.js';
  import { colors } from '@/layout/branding.js';
  import { dataSources, getDataSourceKeys } from '@/data/data.js';

  // Local state instead of props from parent
  let threshold = 0.5;
  let id = { map_scrolly_1: null }; // Initialize with scrolly key
  let map_scrolly_1;
  let zoom;
  let center;
  let hovered;
  let custom_1;
  
  // GeoJSON data storage - dynamically created based on data sources
  const geojsonData = {};
  
  // Initialize all geojson variables
  getDataSourceKeys().forEach(key => {
    geojsonData[key] = null;
  });
    // Style props
  let style_l1 = `color: ${colors.error}; font-weight: 900;`;
  let style_l2 = `color: ${colors.primary}; font-weight: 900;`;
  let style_ux = `color: ${colors.warning}; font-weight: 900;`;
  let style_unurban = `color: ${colors.teal}; font-weight: 900;`;
  let style_metro = `color: ${colors.purple}; font-weight: 900;`;
    // Load data on mount
  onMount(() => {
    // Load all data sources dynamically
    getDataSourceKeys().forEach(key => {
      const source = dataSources[key];
      getTopo(source.url, source.layer).then((res) => {
        geojsonData[key] = res;
      });
    });
  });
  
  // Actions for scrolly steps
  function fitBounds(map, bounds) {
    if (map) {
      map.fitBounds(bounds, { animate: true, padding: 30 });
    }
  }
  
  // Custom styles for different map steps
  const custom_1_map01 = {
    mapid: 'map01',
    layers: {      municipio_centroid: {
        'circle-color': colors.error,
        'circle-radius': 7,
        'circle-stroke-color': colors.error,
        'circle-stroke-width': 1,
      },
      sp_popup: true,
    },
  };
  
  let actions = {
    map_scrolly_1: {
      map01: () => {
        fitBounds(map_scrolly_1, bounds.southAmerica);
        custom_1 = custom_1_map01;
      },
      map02: () => {
        fitBounds(map_scrolly_1, bounds.l1ad);
        custom_1 = {
          mapid: 'map02',          layers: {
            l2_line: {
              'line-color': colors.primary,
              'line-width': 5,
            },
          },
        };
      },
      map04: () => {
        fitBounds(map_scrolly_1, bounds.l1ad);
        custom_1 = {
          mapid: 'map04',          layers: {
            l1ux: {
              'line-color': colors.warning,
              'line-width': 5,
            },
            l2_line: {
              'line-color': colors.primary,
              'line-width': 2,
              'line-opacity': 1,
            },
            l2_fill: {
              'fill-color': colors.warning,
              'fill-opacity': 0.5,
            },
          },
        };
      },
      map05: () => {
        fitBounds(map_scrolly_1, bounds.l1ad);
        custom_1 = {
          mapid: 'map05',          layers: {
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
          },
        };
      },
      map06: () => {
        fitBounds(map_scrolly_1, bounds.monterrey);
        custom_1 = {
          mapid: 'map06',          layers: {
            monterrey_l1ad_line: {
              'line-color': colors.error,
              'line-width': 4,
            },
            monterrey_l1ux_line: {
              'line-color': 'black',
              'line-width': 1,
              'line-opacity': 0.5,
            },
            monterrey_unbuilt_fill: {
              'fill-color': colors.teal,
              'fill-opacity': 0.2,
            },
            monterrey_l2_line: {
              'line-color': colors.primary,
              'line-width': 1.5,
            },
          },
        };
      },
      map07: () => {
        fitBounds(map_scrolly_1, bounds.rio_cuarto);
        custom_1 = {
          mapid: 'map07',          layers: {
            rio_cuarto_l2_line: {
              'line-color': colors.primary,
              'line-width': 1.5,
            },
            rio_cuarto_l1ad_line: {
              'line-color': colors.error,
              'line-width': 6,
            },
            rio_cuarto_l1ad_fill: {
              'fill-color': colors.error,
              'fill-opacity': 0.25,
            },
            rio_cuarto_l1ux_line: {
              'line-color': colors.warning,
              'line-width': 2,
            },
          },
        };
      },
      map08: () => {
        fitBounds(map_scrolly_1, bounds.metro);
        custom_1 = {
          mapid: 'map08',          layers: {
            municipio_line: {
              'line-color': colors.primary,
              'line-width': 3,
            },
            metro_line: {
              'line-color': colors.purple,
              'line-width': 4,
            },
            l1_fill: {
              'fill-color': colors.error,
              'fill-opacity': 0.3,
            },
            l1ad_line: {
              'line-color': colors.error,
              'line-width': 6,
            },
          },
        };
      },
    },
  };
  
  // Initialize custom styles
  custom_1 = custom_1_map01;
  
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
          bind:center
        >
          {#if id == 'map08'}
            <div class="sticky-legend">
              <div class="boundary-metro-legend" />
              <div class="boundary-legend-text">
                Locally defined Metropolitan Region of São Paulo
              </div>
              <div class="boundary-sp-muni-legend" />
              <div class="boundary-legend-text">Municiplidade of São Paulo</div>
              <div class="boundary-l1-legend" />
              <div class="boundary-legend-text">
                SALURBAL defined city of São Paulo
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
            id="municipio"
            type="geojson"
            data={geojsonData.municipio}
            promoteId={dataSources.municipio.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="municipio_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>

          <MapSource
            map_id="map_scrolly_1"
            id="l2"
            type="geojson"
            data={geojsonData.l2}
            promoteId={dataSources.l2.code}
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
            id="l1ux"
            type="geojson"
            data={geojsonData.l1ux}
            promoteId={dataSources.l1ux.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="l1ux"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="l1ad"
            type="geojson"
            data={geojsonData.l1ad}
            promoteId={dataSources.l1ad.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="l1ad_line"
              custom={custom_1}
              type="line"
            />
            <MapLayer
              map_id="map_scrolly_1"
              id="l1_fill"
              custom={custom_1}
              type="fill"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="metro"
            type="geojson"
            data={geojsonData.metro}
            promoteId={dataSources.metro.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="metro_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>          <MapSource
            map_id="map_scrolly_1"
            id="monterrey_l2"
            type="geojson"
            data={geojsonData.monterrey_l2}
            promoteId={dataSources.monterrey_l2.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="monterrey_l2_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="monterrey_unbuilt"
            type="geojson"
            data={geojsonData.monterrey_unbuilt}
            promoteId={dataSources.monterrey_unbuilt.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="monterrey_unbuilt_fill"
              custom={custom_1}
              type="fill"
            />
          </MapSource>

          <MapSource
            map_id="map_scrolly_1"
            id="monterrey_l1ux"
            type="geojson"
            data={geojsonData.monterrey_l1ux}
            promoteId={dataSources.monterrey_l1ux.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="monterrey_l1ux_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="monterrey_l1ad"
            type="geojson"
            data={geojsonData.monterrey_l1ad}
            promoteId={dataSources.monterrey_l1ad.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="monterrey_l1ad_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="rio_cuarto_l1ad"
            type="geojson"
            data={geojsonData.rio_cuarto_l1ad}
            promoteId={dataSources.rio_cuarto_l1ad.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="rio_cuarto_l1ad_line"
              custom={custom_1}
              type="line"
            />
            <MapLayer
              map_id="map_scrolly_1"
              id="rio_cuarto_l1ad_fill"
              custom={custom_1}
              type="fill"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="rio_cuarto_l2"
            type="geojson"
            data={geojsonData.rio_cuarto_l2}
            promoteId={dataSources.rio_cuarto_l2.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="rio_cuarto_l2_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="rio_cuarto_l1ux"
            type="geojson"
            data={geojsonData.rio_cuarto_l1ux}
            promoteId={dataSources.rio_cuarto_l1ux.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="rio_cuarto_l1ux_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
        </Map>
      </div>
    </figure>
  </div>

  <div slot="foreground">
    <section data-id="map01">
      <div class="col-medium">
        <p>We'll use São Paulo, Brazil as an example.</p>
      </div>
    </section>
    <section data-id="map02">
      <div class="col-medium">
        <p>
          These are the <span style={style_l2}>administrative units</span>
          (<em>municípios</em>) in São Paulo, Brazil.
        </p>
      </div>
    </section>
    <section data-id="map04">
      <div class="col-medium">
        <p>
          Through visual inspection of satellite imagery, we identified <span
            style={style_ux}
          >
            all administrative units that included any portion of the built-up
            area</span
          > of each SALURBAL city.
        </p>
      </div>
    </section>
    <section data-id="map05">
      <div class="col-medium">
        <p>
          The combination of these <span style={style_l2}
            >administrative units</span
          >
          is considered a

          <span style={style_l1}>SALURBAL city.</span>
        </p>
      </div>
    </section>
    <section data-id="map06">
      <div class="col-medium">
        <p>
          In cases where the <span style={style_l2}>administrative units </span>
          that compose a city are very large, a
          <span style={style_l1}>SALURBAL city</span>
          may include some areas that are
          <span style={style_unurban}>not built-up or urbanized.</span> This is because
          any administrative unit that included even a small portion of the built-up
          area was included in the geographic definition of the city.
        </p>
        <p>
          The example shown here is Monterrey, Mexico with a population of
          around 5 million residents. Some of the <em>municipios</em> included as
          part of Monterrey have only a small portion of the city's urbanized area.
        </p>
      </div>
    </section>
    <section data-id="map07">
      <div class="col-medium">
        <p>
          While some cities are composed of many of these units, nearly half of
          <span style={style_l1}>SALURBAL cities</span>
          include only one
          <span style={style_l2}> administrative unit</span>.
        </p>
        <p>
          The example shown here is Rio Cuarto, Argentina with a population of
          around 270,000 residents. The <span style={style_ux}>city</span> of
          Rio Cuarto is made up of a single
          <span style={style_l2}><em>departamento</em></span>.
        </p>
      </div>
    </section>
    <section data-id="map08">
      <div class="col-medium text-medium">
        <p>
          It is important to note that <span style={style_l1}
            >SALURBAL cities</span
          >
          may not coincide with
          <span style={style_metro}>political boundaries or definitions</span>
          that may be more familiar to public officials and local residents. Our
          boundaries intentionally reflect urban agglomerations that often extend
          beyond city cores.
        </p>

        <p>
          This is the case for São Paulo, Brazil, where
          <span style={style_l1}
            >our definition based on the built-up extent</span
          >
          varies slightly compared to the
          <span style={style_metro}
            >locally defined Metropolitan Region of São Paulo</span
          >, and extends beyond the
          <span style={style_l2}>municipalidade of São Paulo</span>. All
          SALURBAL city definitions were reviewed by SALURBAL team members in
          each country, before creating a final list of 371 cities.
        </p>
      </div>
    </section>
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
