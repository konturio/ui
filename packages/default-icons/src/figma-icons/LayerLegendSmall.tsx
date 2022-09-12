import { SVGProps, memo } from 'react';

const LayerLegendSmall = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <rect x={4} y={4} width={8} height={8} rx={4} fill="currentColor" />
  </svg>
);

LayerLegendSmall.displayName = 'LayerLegendSmall';
const Memo = memo(LayerLegendSmall);
export default Memo;
