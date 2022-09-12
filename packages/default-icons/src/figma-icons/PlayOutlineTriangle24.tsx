import { SVGProps, memo } from 'react';

const PlayOutlineTriangle24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M5.2 5.65268C5.2 4.797 6.1174 4.25457 6.86716 4.66694L18.4077 11.0143C19.1849 11.4417 19.1849 12.5583 18.4077 12.9857L6.86716 19.3331C6.1174 19.7454 5.2 19.203 5.2 18.3473V5.65268Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PlayOutlineTriangle24.displayName = 'PlayOutlineTriangle24';
const Memo = memo(PlayOutlineTriangle24);
export default Memo;
