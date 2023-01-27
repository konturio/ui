import { SVGProps, memo } from 'react';

const ArrowLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.0203 4.47009C7.82504 4.27483 7.50846 4.27483 7.31319 4.47009L4.13683 7.64646C4.04306 7.74022 3.99038 7.8674 3.99038 8.00001C3.99038 8.13262 4.04306 8.2598 4.13683 8.35356L7.31319 11.5299C7.50846 11.7252 7.82504 11.7252 8.0203 11.5299C8.21556 11.3347 8.21556 11.0181 8.0203 10.8228L5.69749 8.50001L11.5096 8.50002C11.7858 8.50002 12.0096 8.27616 12.0096 8.00002C12.0096 7.72388 11.7858 7.50002 11.5096 7.50002L5.69749 7.50001L8.0203 5.1772C8.21556 4.98194 8.21556 4.66535 8.0203 4.47009Z"
      fill="currentColor"
    />
  </svg>
);

ArrowLeft16.displayName = 'ArrowLeft16';
const Memo = memo(ArrowLeft16);
export default Memo;
