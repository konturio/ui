import { SVGProps, memo } from 'react';

const PlayActive24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM10.3606 7.45917C10.1611 7.3262 9.90464 7.3138 9.69329 7.42691C9.48194 7.54002 9.35 7.76028 9.35 8V16C9.35 16.2397 9.48194 16.46 9.69329 16.5731C9.90464 16.6862 10.1611 16.6738 10.3606 16.5408L16.3606 12.5408C16.5414 12.4203 16.65 12.2173 16.65 12C16.65 11.7827 16.5414 11.5797 16.3606 11.4592L10.3606 7.45917ZM14.8282 12L10.65 14.7855V9.21454L14.8282 12Z"
      fill="currentColor"
    />
  </svg>
);

PlayActive24.displayName = 'PlayActive24';
const Memo = memo(PlayActive24);
export default Memo;
