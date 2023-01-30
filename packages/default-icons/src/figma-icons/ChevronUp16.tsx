import { SVGProps, memo } from 'react';

const ChevronUp16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.64645 11.3536C2.84171 11.5488 3.15829 11.5488 3.35355 11.3536L8 6.70711L12.6464 11.3536C12.8417 11.5488 13.1583 11.5488 13.3536 11.3536C13.5488 11.1583 13.5488 10.8417 13.3536 10.6464L8.35355 5.64645C8.15829 5.45118 7.84171 5.45118 7.64645 5.64645L2.64645 10.6464C2.45118 10.8417 2.45118 11.1583 2.64645 11.3536Z"
      fill="currentColor"
    />
  </svg>
);

ChevronUp16.displayName = 'ChevronUp16';
const Memo = memo(ChevronUp16);
export default Memo;
