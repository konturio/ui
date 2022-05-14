import { SVGProps, memo } from 'react';

const SortDrag16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M4 5H12" stroke="#69737D" />
    <path d="M4 8H12" stroke="#69737D" />
    <path d="M4 11H12" stroke="#69737D" />
  </svg>
);

SortDrag16.displayName = 'SortDrag16';
const Memo = memo(SortDrag16);
export default Memo;
