import { memo } from 'react';

const TripleDotIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M13 7C13.5523 7 14 7.44772 14 8C14 8.55228 13.5523 9 13 9C12.4477 9 12 8.55228 12 8C12 7.44772 12.4477 7 13 7Z"
      fill="currentColor"
    />
    <path
      d="M8 7C8.55228 7 9 7.44772 9 8C9 8.55228 8.55228 9 8 9C7.44772 9 7 8.55228 7 8C7 7.44772 7.44772 7 8 7Z"
      fill="currentColor"
    />
    <path
      d="M3 7C3.55228 7 4 7.44772 4 8C4 8.55228 3.55228 9 3 9C2.44772 9 2 8.55228 2 8C2 7.44772 2.44772 7 3 7Z"
      fill="currentColor"
    />
  </svg>
));

TripleDotIcon.displayName = 'TripleDotIcon';

export default TripleDotIcon;
