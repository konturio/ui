import { SVGProps, memo } from 'react';
const ArrowLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.0203 4.4701C7.82504 4.27484 7.50846 4.27484 7.31319 4.4701L4.13683 7.64646C4.04306 7.74023 3.99038 7.86741 3.99038 8.00002C3.99038 8.13263 4.04306 8.2598 4.13683 8.35357L7.31319 11.5299C7.50846 11.7252 7.82504 11.7252 8.0203 11.5299C8.21556 11.3347 8.21556 11.0181 8.0203 10.8228L5.69749 8.50002L11.5096 8.50003C11.7858 8.50003 12.0096 8.27617 12.0096 8.00003C12.0096 7.72388 11.7858 7.50003 11.5096 7.50003L5.69749 7.50002L8.0203 5.17721C8.21556 4.98194 8.21556 4.66536 8.0203 4.4701Z"
      fill="currentColor"
    />
  </svg>
);
ArrowLeft16.displayName = 'ArrowLeft16';
const Memo = memo(ArrowLeft16);
export default Memo;
