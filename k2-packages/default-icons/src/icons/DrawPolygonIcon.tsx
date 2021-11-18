import { memo } from 'react';

const DrawPolygonIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 12V4M14 12V4M12 2H4M12 14H4" stroke="#D7DADC" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel"/>
      <rect x="0.65" y="12.65" width="2.7" height="2.7" stroke="#D7DADC" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel"/>
      <rect x="0.65" y="0.65" width="2.7" height="2.7" stroke="#D7DADC" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel"/>
      <rect x="12.65" y="0.65" width="2.7" height="2.7" stroke="#D7DADC" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel"/>
      <rect x="12.65" y="12.65" width="2.7" height="2.7" stroke="#D7DADC" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel"/>
  </svg>
));

DrawPolygonIcon.displayName = 'DrawPolygonIcon';

export default DrawPolygonIcon;
