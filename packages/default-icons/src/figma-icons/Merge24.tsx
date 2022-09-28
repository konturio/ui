import { SVGProps, memo } from 'react';

const Merge24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M9 19C12.866 19 16 15.866 16 12C16 8.13401 12.866 5 9 5C5.13401 5 2 8.13401 2 12C2 15.866 5.13401 19 9 19Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5C11.134 5 8 8.13401 8 12C8 15.866 11.134 19 15 19Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Merge24.displayName = 'Merge24';
const Memo = memo(Merge24);
export default Memo;
