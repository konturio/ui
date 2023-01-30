import { SVGProps, memo } from 'react';

const Close16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.64645 2.64645C2.84171 2.45118 3.15829 2.45118 3.35355 2.64645L13.3536 12.6464C13.5488 12.8417 13.5488 13.1583 13.3536 13.3536C13.1583 13.5488 12.8417 13.5488 12.6464 13.3536L2.64645 3.35355C2.45118 3.15829 2.45118 2.84171 2.64645 2.64645Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.3536 2.64645C13.1583 2.45118 12.8417 2.45118 12.6464 2.64645L2.64645 12.6464C2.45118 12.8417 2.45118 13.1583 2.64645 13.3536C2.84171 13.5488 3.15829 13.5488 3.35355 13.3536L13.3536 3.35355C13.5488 3.15829 13.5488 2.84171 13.3536 2.64645Z"
      fill="currentColor"
    />
  </svg>
);

Close16.displayName = 'Close16';
const Memo = memo(Close16);
export default Memo;
