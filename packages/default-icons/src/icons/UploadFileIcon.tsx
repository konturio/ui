import { memo } from 'react';

const UploadFileIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" strokeWidth="1.3" d="M12 3v18M3 12h18" />
  </svg>
));

UploadFileIcon.displayName = 'UploadFileIcon';

export default UploadFileIcon;
