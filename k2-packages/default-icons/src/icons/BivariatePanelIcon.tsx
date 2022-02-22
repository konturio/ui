import { memo } from 'react';

const BivariatePanelIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"{...props}>
    <path d="M17 11H11V17H17V11Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M7 11H1V17H7V11Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M17 1H11V7H17V1Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M7 1H1V7H7V1Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
));

BivariatePanelIcon.displayName = 'BivariatePanelIcon ';

export default BivariatePanelIcon;
