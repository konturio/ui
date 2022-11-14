import { SVGProps, memo } from 'react';

const EditLine24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M19.617 7.94975L14.6673 3L11.4853 6.18198M19.617 7.94975L16.435 11.1317L11.4853 6.18198M19.617 7.94975L10.4246 17.1421H5.47488V12.1924L11.4853 6.18198"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.49999 20.0586H21.8086"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

EditLine24.displayName = 'EditLine24';
const Memo = memo(EditLine24);
export default Memo;
