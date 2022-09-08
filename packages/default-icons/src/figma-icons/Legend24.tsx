import { SVGProps, memo } from 'react';

const Legend24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.1675 11.9317H21.3785M11.1676 4.5913H21.3786M11.1676 19.4009H21.3786"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path d="M3.0801 20.8918L5.48067 17.5738L7.88104 20.8918L3.0801 20.8918Z" stroke="currentColor" strokeWidth={1.3} />
    <path
      d="M3.68014 6.28856L3.68014 2.89379L7.07491 2.89379L7.07491 6.28856L3.68014 6.28856Z"
      stroke="currentColor"
      strokeWidth={1.3}
    />
    <circle cx={5.48052} cy={11.9313} r={1.80039} stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

Legend24.displayName = 'Legend24';
const Memo = memo(Legend24);
export default Memo;
