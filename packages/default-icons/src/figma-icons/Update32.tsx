import { SVGProps, memo } from 'react';

const Update32 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
      d="M2 19v-5m0 0h5m-5 0 4.218 3.655a8.222 8.222 0 0 0 3.514 2.03 8.36 8.36 0 0 0 4.079.118 8.248 8.248 0 0 0 3.63-1.824 7.996 7.996 0 0 0 2.277-3.312M22 5v5m0 0h-5m5 0-4.218-3.655a8.222 8.222 0 0 0-3.514-2.03 8.36 8.36 0 0 0-4.079-.118 8.248 8.248 0 0 0-3.63 1.824 7.995 7.995 0 0 0-2.277 3.312"
    />
  </svg>
);

Update32.displayName = 'Update32';
const Memo = memo(Update32);
export default Memo;
