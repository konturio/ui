import { SVGProps, memo } from 'react';

const PlayTimeline24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.35 6.4798C6.35 5.2407 7.67873 4.45642 8.76381 5.0529L18.806 10.5731C19.9314 11.1917 19.9313 12.8083 18.806 13.4269L8.76381 18.9471C7.67873 19.5436 6.35 18.7593 6.35 17.5202V6.4798ZM8.13758 6.19212C7.91784 6.07133 7.65 6.23055 7.65 6.4798V17.5202C7.65 17.7695 7.91783 17.9287 8.13757 17.8079L18.1797 12.2877C18.4068 12.1629 18.4068 11.8371 18.1797 11.7123L8.13758 6.19212Z"
      fill="currentColor"
    />
  </svg>
);

PlayTimeline24.displayName = 'PlayTimeline24';
const Memo = memo(PlayTimeline24);
export default Memo;
