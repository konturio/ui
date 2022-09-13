import { SVGProps, memo } from 'react';

const PlayActive24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10 8L16 12L10 16V8Z" stroke="white" strokeWidth={1.3} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

PlayActive24.displayName = 'PlayActive24';
const Memo = memo(PlayActive24);
export default Memo;
