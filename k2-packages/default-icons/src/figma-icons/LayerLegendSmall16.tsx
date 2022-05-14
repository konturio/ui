import { SVGProps, memo } from 'react';

const LayerLegendSmall16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <rect x={4} y={4} width={8} height={8} rx={4} fill="#646F78" />
  </svg>
);

LayerLegendSmall16.displayName = 'LayerLegendSmall16';
const Memo = memo(LayerLegendSmall16);
export default Memo;
