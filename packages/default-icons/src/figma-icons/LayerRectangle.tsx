import { SVGProps, memo } from 'react';
const LayerRectangle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M2 2H14V14H2V2Z" fill="currentColor" />
  </svg>
);
LayerRectangle.displayName = 'LayerRectangle';
const Memo = memo(LayerRectangle);
export default Memo;
