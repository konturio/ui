import { SVGProps, memo } from 'react';

const LayerLegend = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <rect x={2} y={2} width={12} height={12} rx={6} fill="currentColor" />
  </svg>
);

LayerLegend.displayName = 'LayerLegend';
const Memo = memo(LayerLegend);
export default Memo;
