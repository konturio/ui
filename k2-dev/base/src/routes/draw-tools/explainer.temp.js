// @ts-nocheck

import { EditableGeoJsonLayer } from '@nebula.gl/layers';
import { ViewMode } from '@nebula.gl/edit-modes';
import { Deck } from '@deck.gl/core';
import { MapboxLayer } from '@deck.gl/mapbox';

let geoJSON = { 
  type: 'FeatureCollection',
  features: [],
};

/**
 * Create Editable deck GL layer using Nebula
 */
/* https://github.com/uber/nebula.gl/blob/master/examples/editor/example.js */
const DeckGLLayer = new EditableGeoJsonLayer({
  data: geoJSON,
  mode: ViewMode,
  selectedFeatureIndexes: [],
  onEdit: ({ updatedData }) => {
    geoJSON = updatedData
  },
});

/**
 * Inject Nebula layer in DeckGL
 */
/* https://deck.gl/#/documentation/getting-started/using-standalone */
const map = new mapboxgl.Map({...});

const deck = new Deck({
  gl: map.painter.context.gl,
  layers: [DeckGLLayer]
  // initialViewState: {
  //   latitude: 37.8,
  //   longitude: -122.45,
  //   zoom: 15
  // },
  // controller: true // { doubleClickZoom: false },
});
// deck.setProps({layers: [DeckGLLayer] }) for updates 
// ?? getCursor={layer.getCursor.bind(layer)} 


/**
 * Convert Deck GL layer in mapbox layer 
 */

// Only once
const MapBoxLayer = new MapboxLayer({id: 'editable-layer', deck});
map.addLayer(MapBoxLayer);

// map.addLayer(myDeckLayer);
// Before labels  https://docs.mapbox.com/mapbox-gl-js/example/geojson-layer-in-stack/

// Вкладывать друг в друга - настройки через пропы 
<Nebula>
  { (nebulaLayers) => (
    <DeckGl layers={nebulaLayers}>
      { (deckLayers) => <MapBoxMap layers={deckLayers.join(appLayers)}/> }
    </DeckGl>
  ) }
</Nebula>


// Как пропы - простая апи - сложный запутанный компонент MapBoxMap, не явные зависимости
<MapBoxMap
  layers={deckLayers.join(appLayers)}
  editableLayers={[]}
  deckLayers={}
/>

// Имперически - как дробить на модули?
<MapBoxMap
  layers={deckLayers.join(appLayers)}
  ref={mapRef}
/>

// Изменение пропсов чилда через react.сlone() скрытая имплеметация

const mapbox = useRef();

<Nebula ref={NebulaInstance} layers={[EditableLayer]}>
  <DeckGl ref={DeckGlInstance} layers={[]}>
    <MapBoxMap ref={mapbox} layers={appLayers} layerManager={} />
  </DeckGl>
</Nebula>