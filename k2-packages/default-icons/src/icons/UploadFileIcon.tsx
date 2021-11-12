import { memo } from 'react';

const UploadFileIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" viewBox="0 0 25 25">
    <path
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
      strokeWidth="1.3"
      d="M12.5 4v17M4 12.5h17"
    />
  </svg>
));

UploadFileIcon.displayName = 'UploadFileIcon';

export default UploadFileIcon;
