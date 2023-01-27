import { SVGProps, memo } from 'react';

const CornerUpRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.64645 3.31312C9.84171 3.11786 10.1583 3.11786 10.3536 3.31312L13.6869 6.64645C13.8821 6.84171 13.8821 7.1583 13.6869 7.35356L10.3536 10.6869C10.1583 10.8822 9.84171 10.8822 9.64645 10.6869C9.45118 10.4916 9.45118 10.175 9.64645 9.97978L12.6262 7L9.64645 4.02023C9.45118 3.82496 9.45118 3.50838 9.64645 3.31312Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.33333 7.5C4.75869 7.5 4.20759 7.72827 3.80127 8.1346C3.39494 8.54093 3.16666 9.09203 3.16666 9.66667V12.3333C3.16666 12.6095 2.94281 12.8333 2.66666 12.8333C2.39052 12.8333 2.16666 12.6095 2.16666 12.3333V9.66667C2.16666 8.82681 2.50029 8.02136 3.09416 7.4275C3.68802 6.83363 4.49348 6.5 5.33333 6.5H13.3333C13.6095 6.5 13.8333 6.72386 13.8333 7C13.8333 7.27614 13.6095 7.5 13.3333 7.5H5.33333Z"
      fill="currentColor"
    />
  </svg>
);

CornerUpRight16.displayName = 'CornerUpRight16';
const Memo = memo(CornerUpRight16);
export default Memo;
