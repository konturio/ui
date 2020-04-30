import('jest-fetch-mock')

declare module '*.styl' {
  const styles: { [className: string]: string };
  export default styles;
}

interface Window {
  KC_API_URL: string;
  KC_APP_URL: string;
}

export as namespace GeoJSON;
