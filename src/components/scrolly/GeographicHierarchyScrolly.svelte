<script>
  import { onMount } from 'svelte';
  import Scroller from '../../layout/Scroller.svelte';
  import { Map, MapSource, MapLayer } from '../../../libs/@onsvisual/svelte-maps';
  import { bounds } from '../../data/mapBounds.js';
  import { getTopo } from '../../utils.js';
  // Local state instead of props from parent
  let threshold = 0.5;
  let id = { map_scrolly_2: null }; // Initialize with scrolly key
  let map_scrolly_2;
  let zoom;
  let center;
  let custom_2;
  
  // Colors
  const hex_primary = '#2F8FBC';
  const hex_secondary = '#00BB9E';
  const hex_error = '#BC3B2F';
  const hex_warning = '#BC812F';
  const hex_teal = '#00BB9E';
  
  // Data sources and geojson variables
  const src_municipio = {
    url: './data/sao_paolo_municipio_centroid.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_municipio_centroid;
  
  const src_municipio_boundaries = {
    url: './data/sao_paolo_municipio.json',
    layer: 'geog', 
    code: 'salid2',
  };
  let geojson_municipio;
  
  const src_l3 = {
    url: './data/sao_paolo_l3.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_l3;
  
  const src_l25 = {
    url: './data/sao_paolo_l25.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_l25;
  
  const src_l2 = {
    url: './data/sao_paolo_l2.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_l2;
  
  const src_l1ux = {
    url: './data/sao_paolo_l1ux.json',
    layer: 'geog',
    code: 'salid1',
  };
  let geojson_l1ux;
  
  const src_l1ad = {
    url: './data/sao_paolo_l1ad.json',
    layer: 'geog',
    code: 'salid1',
  };
  let geojson_l1ad;
  
  const src_ex_l3 = {
    url: './data/sao_paolo_ex_l3.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_ex_l3;
  
  const src_ex_l25 = {
    url: './data/sao_paolo_ex_l25.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_ex_l25;
  
  const src_ex_l2 = {
    url: './data/sao_paolo_ex_l2.json',
    layer: 'geog',
    code: 'salid2',
  };
  let geojson_ex_l2;
  
  // Style props
  let style_l1 = 'color: #bc3b2f; font-weight: bold;';
  let style_l2 = 'color: #2f8fbc; font-weight: bold;';
  let style_l25 = 'color: #4caf50; font-weight: bold;';
  let style_l3 = 'color: #ff9800; font-weight: bold;';
  
  // Load data on mount
  onMount(() => {
    getTopo(src_municipio.url, src_municipio.layer).then((res) => {
      geojson_municipio_centroid = res;
    });
    getTopo(src_municipio_boundaries.url, src_municipio_boundaries.layer).then((res) => {
      geojson_municipio = res;
    });
    getTopo(src_l3.url, src_l3.layer).then((res) => {
      geojson_l3 = res;
    });
    getTopo(src_l25.url, src_l25.layer).then((res) => {
      geojson_l25 = res;
    });
    getTopo(src_l2.url, src_l2.layer).then((res) => {
      geojson_l2 = res;
    });
    getTopo(src_l1ux.url, src_l1ux.layer).then((res) => {
      geojson_l1ux = res;
    });
    getTopo(src_l1ad.url, src_l1ad.layer).then((res) => {
      geojson_l1ad = res;
    });
    getTopo(src_ex_l3.url, src_ex_l3.layer).then((res) => {
      geojson_ex_l3 = res;
    });
    getTopo(src_ex_l25.url, src_ex_l25.layer).then((res) => {
      geojson_ex_l25 = res;
    });
    getTopo(src_ex_l2.url, src_ex_l2.layer).then((res) => {
      geojson_ex_l2 = res;
    });
  });
  
  // Actions for scrolly steps
  function fitBounds(map, bounds) {
    if (map) {
      map.fitBounds(bounds, { animate: true, padding: 30 });
    }
  }
  
  // Custom styles for different map steps
  const custom_2_map01 = {
    mapid: 'map01',
    layers: {
      l2_line: {
        'line-color': hex_primary,
        'line-width': 2,
        'line-opacity': 1,
      },
      l2_fill: {
        'fill-color': hex_error,
        'fill-opacity': 0.5,
      },
      l1ad_line: {
        'line-color': hex_error,
        'line-width': 5,
      },
    },
  };
  
  let actions = {
    map_scrolly_2: {
      map01: () => {
        fitBounds(map_scrolly_2, bounds.l1ad);
        custom_2 = custom_2_map01;
      },
      map02: () => {
        fitBounds(map_scrolly_2, bounds.l1ad);
        custom_2 = {
          mapid: 'map02',
          layers: {
            l2_line: {
              'line-color': hex_primary,
              'line-width': 5,
              'line-opacity': 1,
            },
            l2_fill: {
              'fill-color': hex_primary,
              'fill-opacity': 0.5,
            },
          },
        };
      },
      map03: () => {
        fitBounds(map_scrolly_2, bounds.l1ad);
        custom_2 = {
          mapid: 'map03',
          layers: {
            l3_line: {
              'line-color': hex_teal,
              'line-width': 2,
            },
          },
        };
      },
      map04: () => {
        fitBounds(map_scrolly_2, bounds.ex_l2);
        custom_2 = {
          mapid: 'map04',
          layers: {
            ex_l3: {
              'line-color': hex_teal,
              'line-width': 2,
            },
            ex_l2: {
              'line-color': hex_primary,
              'line-width': 8,
            },
          },
        };
      },
      map05: () => {
        fitBounds(map_scrolly_2, bounds.ex_l2);
        custom_2 = {
          mapid: 'map05',
          layers: {
            ex_l25: {
              'line-color': '#4caf50',
              'line-width': 4,
            },
            ex_l2: {
              'line-color': hex_primary,
              'line-width': 8,
            },
          },
        };
      },
      map06: () => {
        fitBounds(map_scrolly_2, bounds.l1ad);
        custom_2 = {
          mapid: 'map06',
          layers: {
            l25_line: {
              'line-color': '#4caf50',
              'line-width': 2,
            },
            l2_line: {
              'line-color': hex_primary,
              'line-width': 3,
            },
            l1ad_line: {
              'line-color': hex_error,
              'line-width': 5,
            },
          },
        };
      },
    },
  };
  
  // Initialize custom styles
  custom_2 = custom_2_map01;
    // Track previous IDs for actions
  let idPrev = { map_scrolly_2: null };
  
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
<Scroller {threshold} bind:id={id['map_scrolly_2']} splitscreen={true}>
  <div slot="background">
    <figure>
      <div class="col-full height-full">
        <Map
          id="map_scrolly_2"
          style="./data/style-esri-world-imagery.json"
          location={{ bounds: bounds.l1ad }}
          controls={false}
          scales={true}
          bind:map={map_scrolly_2}
          bind:zoom
          bind:center
        >
          <MapSource
            map_id="map_scrolly_2"
            id="municipio_centroid"
            type="geojson"
            data={geojson_municipio_centroid}
            promoteId={'municipio_centroid'}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="municipio_centroid"
              custom={custom_2}
              type="circle"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="municipio"
            type="geojson"
            data={geojson_municipio}
            promoteId={src_municipio.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="municipio"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="l3"
            type="geojson"
            data={geojson_l3}
            promoteId={src_l3.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="l3_line"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="l25"
            type="geojson"
            data={geojson_l25}
            promoteId={src_l25.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="l25_line"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="l2"
            type="geojson"
            data={geojson_l2}
            promoteId={src_l2.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="l2_line"
              custom={custom_2}
              type="line"
            />
            <MapLayer
              map_id="map_scrolly_2"
              id="l2_fill"
              custom={custom_2}
              type="fill"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="l1ux"
            type="geojson"
            data={geojson_l1ux}
            promoteId={src_l1ux.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="l1ux"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="l1ad"
            type="geojson"
            data={geojson_l1ad}
            promoteId={src_l1ad.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="l1ad_line"
              custom={custom_2}
              type="line"
            />
            <MapLayer
              map_id="map_scrolly_2"
              id="l1_fill"
              custom={custom_2}
              type="fill"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="ex_l3"
            type="geojson"
            data={geojson_ex_l3}
            promoteId={src_ex_l3.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="ex_l3"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="ex_l25"
            type="geojson"
            data={geojson_ex_l25}
            promoteId={src_ex_l25.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="ex_l25"
              custom={custom_2}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_2"
            id="ex_l2"
            type="geojson"
            data={geojson_ex_l2}
            promoteId={src_ex_l2.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_2"
              id="ex_l2"
              custom={custom_2}
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
        <strong>Level 1: "Cities"</strong>
        <p>
          The SALURBAL <span style={style_l1}>Level 1</span> for São Paulo
          encompasses all administrative units or
          <em>municípios</em> that have any overlap with the visually apparent built-up
          urban area in and around the core city of São Paulo.
        </p>
      </div>
    </section>
    <section data-id="map02">
      <div class="col-medium">
        <strong>Level 2: "Sub-cities"</strong>
        <p>
          Within the São Paulo SALURBAL city <span style={style_l1}
            >(São Paulo L1)</span
          >, we defined sub-city units as each of the
          <em>municípios</em> that compose the São Paulo urban agglomeration.
          These are the
          <span style={style_l2}>L2s</span>.
        </p>
      </div>
    </section>
    <section data-id="map03">
      <div class="col-medium">
        <strong>Level 3: "Neighborhoods"</strong>
        <p>
          <span style={style_l3}>Level 3 units or neighborhoods</span> are the smallest
          administrative units for which census data is available in each country.
        </p>
      </div>
    </section>
    <section data-id="map04">
      <div class="col-medium">
        <strong>Level 3: "Neighborhoods"</strong>
        <p>
          As shown here, each <span style={style_l3}>L3 unit</span> in a
          Brazilian city like São Paulo corresponds to a
          <em>setor censitario</em>.
        </p>
      </div>
    </section>
    <section data-id="map05">
      <div class="col-medium">
        <p>
          These <span style={style_l3}> L3 units</span> were sometimes too small
          to support meaningful neighborhood-level analysis. To address this
          issue, we used larger Brazil census geographic units (<em
            >Áreas de Ponderação</em
          >) and labeled them
          <span style={style_l25}> L2.5's</span>.
        </p>
      </div>
    </section>
    <section data-id="map06">
      <div class="col-medium">
        <p>
          The SALURBAL hierarchy of geographic units for Sao Paulo, Brazil
          consists of 621 <span style={style_l25}>
            L2.5 neighborhood units</span
          >, within 31 <span style={style_l2}> L2 sub-city units</span>, within
          a single <span style={style_l1}> L1 city unit</span>.
        </p>
      </div>
    </section>
  </div>
</Scroller>
