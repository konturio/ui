import { SVGProps, memo } from 'react';

const CornerUpLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.35355 3.31312C6.54881 3.50838 6.54881 3.82496 6.35355 4.02023L3.37377 7L6.35355 9.97978C6.54881 10.175 6.54881 10.4916 6.35355 10.6869C6.15829 10.8822 5.84171 10.8822 5.64644 10.6869L2.31311 7.35356C2.11785 7.1583 2.11785 6.84171 2.31311 6.64645L5.64644 3.31312C5.84171 3.11786 6.15829 3.11786 6.35355 3.31312Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.16666 7C2.16666 6.72386 2.39052 6.5 2.66666 6.5H10.6667C11.5065 6.5 12.312 6.83363 12.9058 7.4275C13.4997 8.02136 13.8333 8.82681 13.8333 9.66667V12.3333C13.8333 12.6095 13.6095 12.8333 13.3333 12.8333C13.0572 12.8333 12.8333 12.6095 12.8333 12.3333V9.66667C12.8333 9.09203 12.6051 8.54093 12.1987 8.1346C11.7924 7.72827 11.2413 7.5 10.6667 7.5H2.66666C2.39052 7.5 2.16666 7.27614 2.16666 7Z"
      fill="currentColor"
    />
  </svg>
);

CornerUpLeft16.displayName = 'CornerUpLeft16';
const Memo = memo(CornerUpLeft16);
export default Memo;
