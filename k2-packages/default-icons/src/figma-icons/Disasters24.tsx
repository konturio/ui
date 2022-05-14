import { SVGProps, memo } from 'react';

const Disasters24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5 15.3333C5 18 7.92847 20.5714 9.39271 21.5238C9.23002 21.2063 8.90463 20.2857 8.90463 19.1429C8.90463 18 9.88079 16.7619 10.3689 16.2857C10.3689 16.7619 10.3689 17.7143 10.8569 19.1429C11.345 20.5714 13.2973 21.5238 14.2735 22C15.575 21.3651 18.2341 19.9134 19.6424 15.3333C20.8138 11.5238 18.8289 8.66667 17.6901 7.71429C17.6901 8.03175 17.4948 8.95238 16.7139 10.0952C15.933 11.2381 14.1108 11.8413 13.2973 12C13.9481 11.2063 15.152 9.04762 14.7616 6.7619C14.3711 4.47619 11.6704 2.63492 10.3689 2C10.8569 3.11111 11.345 5.90476 9.39271 8.19048C6.95232 11.0476 5 12 5 15.3333Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Disasters24.displayName = 'Disasters24';
const Memo = memo(Disasters24);
export default Memo;
