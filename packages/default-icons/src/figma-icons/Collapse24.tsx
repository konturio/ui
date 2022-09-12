import { SVGProps, memo } from 'react';

const Collapse24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M13.6309 4.63096L13.6309 10.369M13.6309 10.369L19.369 10.369M13.6309 10.369L20.076 3.92401"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.369 19.3691L10.369 13.631M10.369 13.631L4.63096 13.631M10.369 13.631L3.92401 20.076"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Collapse24.displayName = 'Collapse24';
const Memo = memo(Collapse24);
export default Memo;
