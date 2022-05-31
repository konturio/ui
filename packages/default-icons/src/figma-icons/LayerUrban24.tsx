import { SVGProps, memo } from 'react';

const LayerUrban24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.0718 8.57735L12 5.1547L17.9282 8.57735V15.4227L12 18.8453L6.0718 15.4227V8.57735Z"
      fill="white"
      stroke="#FF6D00"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1962 9L12 6L6.80385 9V15L12 18L17.1962 15V9ZM14.9417 10.3016L12 8.60322L9.05831 10.3016V13.6984L12 15.3968L14.9417 13.6984V10.3016Z"
      fill="#FFD4B5"
    />
  </svg>
);

LayerUrban24.displayName = 'LayerUrban24';
const Memo = memo(LayerUrban24);
export default Memo;
