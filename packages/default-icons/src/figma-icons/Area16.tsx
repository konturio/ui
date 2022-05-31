import { SVGProps, memo } from 'react';

const Area16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M8.65688 3L3.00002 8.65688" stroke="currentColor" />
    <path d="M4.45867 3.04443L3.04444 4.45867" stroke="currentColor" />
    <path d="M12.944 11.5297L11.5298 12.9439" stroke="currentColor" />
    <path d="M12.8996 7.24255L7.2427 12.8994" stroke="currentColor" />
    <path d="M12.9439 3.04443L3.04443 12.9439" stroke="currentColor" />
  </svg>
);

Area16.displayName = 'Area16';
const Memo = memo(Area16);
export default Memo;
