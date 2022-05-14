import { SVGProps, memo } from 'react';

const Poly24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.8098 8.75L3.18994 2.25L4.30981 20.25L9.80981 19.25L17.8098 21.75L20.8098 7.25L13.8098 8.75Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinejoin="round"
    />
  </svg>
);

Poly24.displayName = 'Poly24';
const Memo = memo(Poly24);
export default Memo;
