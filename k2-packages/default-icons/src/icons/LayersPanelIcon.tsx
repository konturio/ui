import { memo } from 'react';

const LayersPanelIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" {...props}>
    <path d="M1 16L11 21L21 16" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M1 11L11 16L21 11" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M11 1L1 6L11 11L21 6L11 1Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
));

LayersPanelIcon.displayName = 'LayersPanelIcon';

export default LayersPanelIcon;
