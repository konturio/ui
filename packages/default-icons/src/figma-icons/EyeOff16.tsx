import { SVGProps, memo } from 'react';

const EyeOff16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1049_4206)">
      <path
        d="M6.6 2.82666C7.05889 2.71924 7.52871 2.66555 8 2.66666C12.6667 2.66666 15.3333 7.99999 15.3333 7.99999C14.9287 8.75706 14.446 9.46982 13.8933 10.1267M9.41333 9.41333C9.23023 9.60982 9.00943 9.76743 8.7641 9.87674C8.51877 9.98605 8.25393 10.0448 7.98539 10.0496C7.71685 10.0543 7.45011 10.0049 7.20107 9.90432C6.95204 9.80373 6.72581 9.65401 6.5359 9.46409C6.34598 9.27418 6.19626 9.04795 6.09567 8.79892C5.99508 8.54988 5.94568 8.28314 5.95042 8.0146C5.95516 7.74606 6.01394 7.48122 6.12325 7.23589C6.23256 6.99056 6.39017 6.76976 6.58667 6.58666M11.96 11.96C10.8204 12.8287 9.43274 13.3099 8 13.3333C3.33333 13.3333 0.666667 7.99999 0.666667 7.99999C1.49593 6.45459 2.64609 5.1044 4.04 4.03999L11.96 11.96Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M0.666667 0.666656L15.3333 15.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_1049_4206">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

EyeOff16.displayName = 'EyeOff16';
const Memo = memo(EyeOff16);
export default Memo;
