import { SVGProps, memo } from 'react';

const AddLayer24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.5 16.5L12 20.5L20.5 16.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M6.53471 10.0719L3.5 11.5L12 15.5L20.5 11.5L17.4626 10.0706"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path d="M12 3V11M8 7H16" stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

AddLayer24.displayName = 'AddLayer24';
const Memo = memo(AddLayer24);
export default Memo;
