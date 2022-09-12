import { SVGProps, memo } from 'react';

const Expand24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.369 10.369L19.369 4.63096M19.369 4.63096L13.6309 4.63096M19.369 4.63096L13.924 10.076"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.63095 13.631L4.63095 19.3691M4.63095 19.3691L10.369 19.3691M4.63095 19.3691L10.076 13.924"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Expand24.displayName = 'Expand24';
const Memo = memo(Expand24);
export default Memo;
