import { SVGProps, memo } from 'react';

const PlayTimeline24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.65 6.05516C6.65 5.75447 6.98001 5.54938 7.25989 5.70232L18.1389 11.6472C18.4204 11.801 18.4204 12.199 18.1389 12.3528L7.25989 18.2977C6.98001 18.4506 6.65 18.2455 6.65 17.9448V6.05516Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PlayTimeline24.displayName = 'PlayTimeline24';
const Memo = memo(PlayTimeline24);
export default Memo;
