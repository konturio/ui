import { SVGProps, memo } from 'react';

const Update16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
      d="M2 12V9h3m9-5v3h-3m-7.63-.667a5.007 5.007 0 0 1 1.366-2.07 4.878 4.878 0 0 1 2.178-1.14 4.822 4.822 0 0 1 2.447.074 4.89 4.89 0 0 1 2.108 1.269L14 6.889M2 9.11l2.53 2.423a4.892 4.892 0 0 0 2.109 1.27c.797.234 1.639.26 2.447.073a4.878 4.878 0 0 0 2.178-1.14 5.008 5.008 0 0 0 1.367-2.07"
    />
  </svg>
);

Update16.displayName = 'Update16';
const Memo = memo(Update16);
export default Memo;
