import('jest-fetch-mock');

declare module '*.styl' {
  const s: { [className: string]: string };
  export default s;
}

declare module '*.css' {
  const s: { [className: string]: string };
  export default s;
}

interface Window {
  KC_API_URL: string;
  KC_APP_URL: string;
  KC_ISOCHRONE_URL: string;
}

export as namespace GeoJSON;
