import { SVGProps, memo } from 'react';

const ArrowExternal16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.83333 5.33334C4.55719 5.33334 4.33333 5.10948 4.33333 4.83334C4.33333 4.55719 4.55719 4.33334 4.83333 4.33334H11.1667L11.6667 4.83334V11.1667C11.6667 11.4428 11.4428 11.6667 11.1667 11.6667C10.8905 11.6667 10.6667 11.4428 10.6667 11.1667V6.04044L5.18688 11.5202C4.99162 11.7155 4.67504 11.7155 4.47977 11.5202C4.28451 11.325 4.28451 11.0084 4.47977 10.8131L9.95956 5.33334H4.83333Z"
      fill="currentColor"
    />
  </svg>
);

ArrowExternal16.displayName = 'ArrowExternal16';
const Memo = memo(ArrowExternal16);
export default Memo;
