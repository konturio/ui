import { SVGProps, memo } from 'react';

const SmartCity24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.06097 6.061C9.89597 5.402 10.917 5 12 5C13.083 5 14.104 5.402 14.939 6.061L16.006 4.994C14.902 4.072 13.511 3.5 12 3.5C10.489 3.5 9.09797 4.072 7.99397 4.994L9.06097 6.061ZM17.389 3.611L18.452 2.548C16.711 0.984 14.459 0 12 0C9.54097 0 7.28897 0.984 5.54797 2.548L6.61097 3.611C8.08797 2.312 9.97297 1.5 12 1.5C14.027 1.5 15.912 2.312 17.389 3.611ZM12 6.95898C10.068 6.95898 8.5 8.52698 8.5 10.459C8.5 13.084 12 16.959 12 16.959C12 16.959 15.5 13.084 15.5 10.459C15.5 8.52598 13.932 6.95898 12 6.95898ZM12 12.008C11.172 12.008 10.5 11.336 10.5 10.508C10.5 9.67999 11.172 9.00798 12 9.00798C12.828 9.00798 13.5 9.67999 13.5 10.508C13.5 11.336 12.828 12.008 12 12.008ZM14.839 15.7609C15.058 15.4439 15.279 15.1029 15.494 14.7469L23 18.4999L12 23.9999L1 18.4999L8.505 14.7479C8.72 15.1039 8.941 15.4449 9.16 15.7619L7.35 16.6669L12.424 19.2039L14.291 18.2709L13.285 17.7679C13.461 17.5649 13.737 17.2369 14.064 16.8159L15.632 17.5999L17.074 16.8789L14.839 15.7609ZM6.008 17.3369L3.683 18.4999L8.758 21.0369L11.083 19.8739L6.008 17.3369ZM10.1 21.7079L12 22.6579L14.325 21.4949L12.425 20.5449L10.1 21.7079ZM13.767 19.8749L15.667 20.8249L17.534 19.8919L15.634 18.9419L13.767 19.8749ZM16.975 18.2709L18.875 19.2209L20.317 18.4999L18.417 17.5499L16.975 18.2709Z"
      fill="currentColor"
    />
  </svg>
);

SmartCity24.displayName = 'SmartCity24';
const Memo = memo(SmartCity24);
export default Memo;