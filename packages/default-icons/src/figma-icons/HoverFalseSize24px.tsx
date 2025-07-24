import { SVGProps, memo } from 'react';
const HoverFalseSize24px = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54048 5.53999C5.79432 5.28615 6.20588 5.28615 6.45972 5.53999L12.0001 11.0804L17.5405 5.53999C17.7943 5.28615 18.2059 5.28615 18.4597 5.53999C18.7136 5.79383 18.7136 6.20539 18.4597 6.45923L12.9193 11.9996L18.4597 17.54C18.7136 17.7938 18.7136 18.2054 18.4597 18.4592C18.2059 18.7131 17.7943 18.7131 17.5405 18.4592L12.0001 12.9188L6.45972 18.4592C6.20588 18.7131 5.79432 18.7131 5.54048 18.4592C5.28664 18.2054 5.28664 17.7938 5.54048 17.54L11.0809 11.9996L5.54048 6.45923C5.28664 6.20539 5.28664 5.79383 5.54048 5.53999Z"
      fill="currentColor"
    />
  </svg>
);
HoverFalseSize24px.displayName = 'HoverFalseSize24px';
const Memo = memo(HoverFalseSize24px);
export default Memo;
