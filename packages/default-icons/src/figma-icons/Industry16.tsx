import { SVGProps, memo } from 'react';
const Industry16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M14.9333 1.06665V13.8667H1.06667V9.30132C1.06837 9.14996 1.13429 9.00649 1.248 8.90665L4.448 5.47198C4.66923 5.27753 5.00629 5.2994 5.20064 5.52062C5.28725 5.61918 5.33451 5.74612 5.33333 5.87732V9.07732L8.704 5.48265C8.92 5.28233 9.25739 5.29502 9.45771 5.51102C9.55008 5.61054 9.60096 5.74153 9.6 5.87732V11.7333H12.8V1.06665H14.9333Z"
      fill="black"
    />
  </svg>
);
Industry16.displayName = 'Industry16';
const Memo = memo(Industry16);
export default Memo;
