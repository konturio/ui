import('jest-fetch-mock')

declare module '*.styl' {
  const styles: { [className: string]: string };
  export default styles;
}
