import { SVGProps, memo } from 'react';

const PlayOutline = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 9.45221C9 9.10875 9.39914 8.89102 9.72535 9.05654L14.7464 11.6043C15.0845 11.7759 15.0845 12.2241 14.7464 12.3957L9.72535 14.9435C9.39914 15.109 9 14.8913 9 14.5478V9.45221Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x={1}
      y={4}
      width={22}
      height={16}
      rx={1.5}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

PlayOutline.displayName = 'PlayOutline';
const Memo = memo(PlayOutline);
export default Memo;
