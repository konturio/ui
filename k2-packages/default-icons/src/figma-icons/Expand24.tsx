import { SVGProps, memo } from 'react';

const Expand24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.369 11.369L19.369 4.63096M19.369 4.63096L12.6309 4.63096M19.369 4.63096L13.924 10.076"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M4.63095 12.631L4.63095 19.369M4.63095 19.369L11.369 19.369M4.63095 19.369L10.076 13.924"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Expand24.displayName = 'Expand24';
const Memo = memo(Expand24);
export default Memo;
