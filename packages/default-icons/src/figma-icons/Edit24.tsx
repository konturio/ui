import { SVGProps, memo } from 'react';

const Edit24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M10.6016 7.36245L4.55274 13.4114L4.55275 19.4476L10.589 19.4476L16.6378 13.3987M10.6016 7.36245L14.482 3.48201L20.5182 9.51825L16.6378 13.3987M10.6016 7.36245L16.6378 13.3987"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Edit24.displayName = 'Edit24';
const Memo = memo(Edit24);
export default Memo;
