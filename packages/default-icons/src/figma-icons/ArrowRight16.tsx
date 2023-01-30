import { SVGProps, memo } from 'react';

const ArrowRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.97956 4.47009C8.17482 4.27483 8.4914 4.27483 8.68666 4.47009L11.863 7.64646C12.0583 7.84172 12.0583 8.1583 11.863 8.35356L8.68666 11.5299C8.4914 11.7252 8.17482 11.7252 7.97956 11.5299C7.7843 11.3347 7.7843 11.0181 7.97956 10.8228L10.3024 8.50001L4.49023 8.50002C4.21409 8.50002 3.99023 8.27616 3.99023 8.00002C3.99023 7.72388 4.21409 7.50002 4.49023 7.50002L10.3024 7.50001L7.97956 5.1772C7.7843 4.98194 7.7843 4.66536 7.97956 4.47009Z"
      fill="currentColor"
    />
  </svg>
);

ArrowRight16.displayName = 'ArrowRight16';
const Memo = memo(ArrowRight16);
export default Memo;
