import { SVGProps, memo } from 'react';

const Plus24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 3.35001C12.359 3.35001 12.65 3.64102 12.65 4.00001V11.35L19.9999 11.35C20.3589 11.35 20.6499 11.641 20.6499 12C20.6499 12.359 20.3589 12.65 19.9999 12.65L12.65 12.65V20C12.65 20.359 12.359 20.65 12 20.65C11.641 20.65 11.35 20.359 11.35 20V12.65L3.99991 12.65C3.64093 12.65 3.34991 12.359 3.34991 12C3.34991 11.641 3.64093 11.35 3.99991 11.35L11.35 11.35L11.35 4.00001C11.35 3.64102 11.641 3.35001 12 3.35001Z"
      fill="currentColor"
    />
  </svg>
);

Plus24.displayName = 'Plus24';
const Memo = memo(Plus24);
export default Memo;
