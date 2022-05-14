import { SVGProps, memo } from 'react';

const LayerLegend16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <rect x={2} y={2} width={12} height={12} rx={6} fill="#646F78" />
  </svg>
);

LayerLegend16.displayName = 'LayerLegend16';
const Memo = memo(LayerLegend16);
export default Memo;
