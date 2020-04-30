import React from 'react';

const CloseIcon = React.memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="14" height="14" viewBox="0 0 14 14" {...props}>
    <path
      d="M13.9844 1.42188L8.40625 7L13.9844 12.5781L12.5781 13.9844L7 8.40625L1.42188 13.9844L0.015625 12.5781L5.59375 7L0.015625 1.42188L1.42188 0.015625L7 5.59375L12.5781 0.015625L13.9844 1.42188Z"
      fill="currentColor"
    />
  </svg>
));

export default CloseIcon;
