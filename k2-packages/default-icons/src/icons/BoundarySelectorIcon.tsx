import { memo } from 'react';

const BoundarySelectorIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="21" viewBox="0 0 18 21" fill="none" {...props}>
    <path d="M4.98737 4.07847L3.22876 1.03247" stroke="currentColor" strokeWidth="1.3" />
    <path d="M7.21138 3.78567L8.1217 0.388306" stroke="currentColor" strokeWidth="1.3" />
    <path d="M8.99111 5.15131L12.0371 3.3927" stroke="currentColor" strokeWidth="1.3" />
    <path d="M0.868433 9.84088L3.91443 8.08228" stroke="currentColor" strokeWidth="1.3" />
    <path d="M0.224216 4.94783L3.62158 5.85815" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M7.04717 7.60757L16.3557 14.9121L11.6493 15.5786L8.71884 19.3212L7.04717 7.60757Z"
      stroke="currentColor"
      strokeWidth="1.3"
    />
  </svg>
));

BoundarySelectorIcon.displayName = 'BoundarySelectorIcon';

export default BoundarySelectorIcon;
