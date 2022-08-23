import { SVGProps, memo } from 'react';

const EditOsm24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_720_946)">
      <path
        d="M8.43496 10.2322L3.47489 15.1924L3.47489 20.1421H8.42464L13.3847 15.182M8.43496 10.2322L11.6169 7.05023L16.5667 12L13.3847 15.182M8.43496 10.2322L13.3847 15.182"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3521 0.660553H23.3521M23.3521 0.660553V6.66055M23.3521 0.660553L17.3521 6.66055"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_720_946">
        <rect width={24} height={24} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

EditOsm24.displayName = 'EditOsm24';
const Memo = memo(EditOsm24);
export default Memo;
