1. Deck gl layer added in map not show in map style, WTF?
```js
map.getStyle().layers.map(l => l.id).includes('deck-gl-layer') // false
map.getLayer('deck-gl-layer') // { id: "deck-gl-layer", type: "custom", _featureFilter: {…}, implementation: {…}, visibility: "visible" }
```

2. Deck gl layer draw under water layer, and I can't move it, WTF?
```js
map.moveLayer(
  'deck-gl-layer',
  map.getStyle().layers.find(l => l.type === 'symbol').id
) // Not help

// If beforeId is omitted, the layer will be appended to the end of the layers array and appear above all other layers on the map. 
map.moveLayer('deck-gl-layer') // not help too =(
```

3. When I draw in nebula my cursor bounce between 0,0 coordinates and current cursor position, WTF?


Working example?
https://urbica.github.io/react-map-gl/#/Components/CustomLayer
https://codepen.io/1chandu1/pen/gOOrXWJ