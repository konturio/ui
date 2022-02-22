import { memo } from 'react';

const DrawPointIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
    <path
      d="M13.2944 7.14721C13.2944 12.1644 7.49138 16.8075 7.14721 16.8075C6.80305 16.8075 1 12.1644 1 7.14721C1 3.7522 3.7522 1 7.14721 1C10.5422 1 13.2944 3.7522 13.2944 7.14721Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <circle cx="7.14746" cy="7.90381" r="1.5" fill="currentColor" />
  </svg>
));

DrawPointIcon.displayName = 'DrawPointIcon';

export default DrawPointIcon;
