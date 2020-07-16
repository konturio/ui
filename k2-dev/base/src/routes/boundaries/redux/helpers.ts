export function createGeoJSONSource(
  featureCollection: GeoJSON.FeatureCollection = {
    type: 'FeatureCollection' as const,
    features: [],
  },
) {
  return {
    type: 'geojson' as const,
    data: featureCollection,
  };
}
