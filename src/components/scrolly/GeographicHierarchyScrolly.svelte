<script>
  import Scroller from '../../layout/Scroller.svelte';
  import { Map, MapSource, MapLayer } from '../../../libs/@onsvisual/svelte-maps';

  // Props passed from parent
  export let threshold;
  export let id;
  export let bounds;
  export let map_scrolly_2;
  export let zoom;
  export let center;
  export let custom_2;
  
  // Data props
  export let geojson_municipio_centroid;
  export let geojson_municipio;
  export let geojson_l3;
  export let geojson_l25;
  export let geojson_l2;
  export let geojson_l1ux;
  export let geojson_l1ad;
  export let geojson_ex_l3;
  export let geojson_ex_l25;
  export let geojson_ex_l2;
  
  // Source configs
  export let src_municipio;
  export let src_l3;
  export let src_l25;
  export let src_l2;
  export let src_l1ux;
  export let src_l1ad;
  export let src_ex_l3;
  export let src_ex_l25;
  export let src_ex_l2;
  
  // Style props
  export let style_l1;
  export let style_l2;
  export let style_l25;
  export let style_l3;
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
