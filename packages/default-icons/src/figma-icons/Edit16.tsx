import { SVGProps, memo } from 'react';

const Edit16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.04472 4.60469L2.6849 8.96459L2.6849 13.3153L7.03565 13.3153L11.3955 8.95544M7.04472 4.60469L9.84163 1.80778L14.1924 6.15853L11.3955 8.95544M7.04472 4.60469L11.3955 8.95544"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Edit16.displayName = 'Edit16';
const Memo = memo(Edit16);
export default Memo;
