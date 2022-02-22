import { memo } from 'react';

const CloseIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
  </svg>
));

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;
