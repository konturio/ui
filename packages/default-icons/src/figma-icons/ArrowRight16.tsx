import { SVGProps, memo } from 'react';
const ArrowRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.97956 4.4701C8.17482 4.27484 8.4914 4.27484 8.68666 4.4701L11.863 7.64646C12.0583 7.84173 12.0583 8.15831 11.863 8.35357L8.68666 11.5299C8.4914 11.7252 8.17482 11.7252 7.97956 11.5299C7.7843 11.3347 7.7843 11.0181 7.97956 10.8228L10.3024 8.50002L4.49023 8.50003C4.21409 8.50003 3.99023 8.27617 3.99023 8.00003C3.99023 7.72389 4.21409 7.50003 4.49023 7.50003L10.3024 7.50002L7.97956 5.17721C7.7843 4.98195 7.7843 4.66536 7.97956 4.4701Z"
      fill="currentColor"
    />
  </svg>
);
ArrowRight16.displayName = 'ArrowRight16';
const Memo = memo(ArrowRight16);
export default Memo;
