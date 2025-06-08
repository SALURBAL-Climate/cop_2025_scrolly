<script>
  import Scroller from '../../layout/Scroller.svelte';
  import { Map, MapSource, MapLayer, MapPopup } from '../../../libs/@onsvisual/svelte-maps';

  // Props passed from parent
  export let threshold;
  export let id;
  export let bounds;
  export let map_scrolly_1;
  export let zoom;
  export let center;
  export let hovered;
  export let custom_1;
  
  // Data props
  export let geojson_municipio_centroid;
  export let geojson_municipio;
  export let geojson_l2;
  export let geojson_l1ux;
  export let geojson_l1ad;
  export let geojson_metro;
  export let geojson_monterrey_l2;
  export let geojson_monterrey_unbuilt;
  export let geojson_monterrey_l1ux;
  export let geojson_monterrey_l1ad;
  export let geojson_rio_cuarto_l1ad;
  export let geojson_rio_cuarto_l2;
  export let geojson_rio_cuarto_l1ux;
  
  // Source configs
  export let src_municipio;
  export let src_l2;
  export let src_l1ux;
  export let src_l1ad;
  export let src_metro;
  export let src_monterrey_l2;
  export let src_monterrey_unbuilt;
  export let src_monterrey_l1ux;
  export let src_monterrey_l1ad;
  export let src_rio_cuarto_l1ad;
  export let src_rio_cuarto_l2;
  export let src_rio_cuarto_l1ux;
  
  // Style props
  export let style_l1;
  export let style_l2;
  export let style_ux;
  export let style_unurban;
  export let style_metro;
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
          {#if id.map_scrolly_1 == 'map08'}
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
          {/if}
          <MapSource
            map_id="map_scrolly_1"
            id="municipio_centroid"
            type="geojson"
            data={geojson_municipio_centroid}
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
            data={geojson_municipio}
            promoteId={src_municipio.code}
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
            data={geojson_l2}
            promoteId={src_l2.code}
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
            data={geojson_l1ux}
            promoteId={src_l1ux.code}
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
            data={geojson_l1ad}
            promoteId={src_l1ad.code}
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
            data={geojson_metro}
            promoteId={src_metro.code}
            maxzoom={13}
          >
            <MapLayer
              map_id="map_scrolly_1"
              id="metro_line"
              custom={custom_1}
              type="line"
            />
          </MapSource>
          <MapSource
            map_id="map_scrolly_1"
            id="monterrey_l2"
            type="geojson"
            data={geojson_monterrey_l2}
            promoteId={src_monterrey_l2.code}
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
            data={geojson_monterrey_unbuilt}
            promoteId={src_monterrey_unbuilt.code}
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
            data={geojson_monterrey_l1ux}
            promoteId={src_monterrey_l1ux.code}
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
            data={geojson_monterrey_l1ad}
            promoteId={src_monterrey_l1ad.code}
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
            data={geojson_rio_cuarto_l1ad}
            promoteId={src_rio_cuarto_l1ad.code}
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
            data={geojson_rio_cuarto_l2}
            promoteId={src_rio_cuarto_l2.code}
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
            data={geojson_rio_cuarto_l1ux}
            promoteId={src_rio_cuarto_l1ux.code}
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
  }

  .boundary-metro-legend {
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
