import { SVGProps, memo } from 'react';

const PlayTimeline24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 6.4798C7 5.73562 7.79828 5.26387 8.45069 5.6225L18.4928 11.1427C19.1691 11.5144 19.1691 12.4856 18.4928 12.8573L8.45069 18.3775C7.79828 18.7361 7 18.2644 7 17.5202V6.4798Z"
      stroke="#2E3D4A"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PlayTimeline24.displayName = 'PlayTimeline24';
const Memo = memo(PlayTimeline24);
export default Memo;
