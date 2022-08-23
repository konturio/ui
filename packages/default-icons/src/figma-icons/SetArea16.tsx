import { SVGProps, memo } from 'react';

const SetArea16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2 5.75V3.5C2 3.10218 2.15804 2.72064 2.43934 2.43934C2.72064 2.15804 3.10218 2 3.5 2H5.75M10.25 14H12.5C12.8978 14 13.2794 13.842 13.5607 13.5607C13.842 13.2794 14 12.8978 14 12.5V10.25M14 5.75V3.5C14 3.10218 13.842 2.72064 13.5607 2.43934C13.2794 2.15804 12.8978 2 12.5 2H10.25M5.75 14H3.5C3.10218 14 2.72064 13.842 2.43934 13.5607C2.15804 13.2794 2 12.8978 2 12.5V10.25"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

SetArea16.displayName = 'SetArea16';
const Memo = memo(SetArea16);
export default Memo;
