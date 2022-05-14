import { SVGProps, memo } from 'react';

const EditLine24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.4853 6.18198L5.47488 12.1924V17.1421H10.4246L16.435 11.1317M11.4853 6.18198L14.6673 3L19.617 7.94975L16.435 11.1317M11.4853 6.18198L16.435 11.1317"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.49999 20.0586H21.8086"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

EditLine24.displayName = 'EditLine24';
const Memo = memo(EditLine24);
export default Memo;
