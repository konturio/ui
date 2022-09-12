import { SVGProps, memo } from 'react';

const PlayOutlineTriangle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M3.5 3.76845C3.5 3.198 4.1116 2.83637 4.61144 3.11129L12.3052 7.34283C12.8232 7.62778 12.8232 8.37221 12.3052 8.65716L4.61144 12.8887C4.1116 13.1636 3.5 12.802 3.5 12.2315V3.76845Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PlayOutlineTriangle16.displayName = 'PlayOutlineTriangle16';
const Memo = memo(PlayOutlineTriangle16);
export default Memo;
