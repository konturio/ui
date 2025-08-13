import { SVGProps, memo } from 'react';
const Send24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.899 11.4073C21.41 11.6372 21.41 12.3628 20.899 12.5928L3.63613 20.361C3.10963 20.598 2.55861 20.0821 2.76038 19.5411L5.48846 12.2272C5.5431 12.0807 5.5431 11.9194 5.48846 11.7728L2.76038 4.45886C2.55861 3.91791 3.10963 3.40203 3.63613 3.63896L20.899 11.4073ZM17.6151 11.355L4.52256 5.46341L6.70648 11.3185C6.71101 11.3307 6.71541 11.3428 6.71969 11.355L17.6151 11.355ZM6.71613 12.655C6.71298 12.6639 6.70977 12.6727 6.70648 12.6815L4.52256 18.5366L17.5927 12.655L6.71613 12.655Z"
      fill="currentColor"
    />
  </svg>
);
Send24.displayName = 'Send24';
const Memo = memo(Send24);
export default Memo;
