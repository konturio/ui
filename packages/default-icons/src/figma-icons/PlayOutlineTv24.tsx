import { SVGProps, memo } from 'react';

const PlayOutlineTv24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.35 9.45221C8.35 8.54037 9.33771 8.13095 10.0195 8.47689L15.0405 11.0247C15.8532 11.437 15.8531 12.563 15.0405 12.9753L10.0195 15.5231C9.33771 15.869 8.35 15.4596 8.35 14.5478V9.45221ZM9.65 9.7472V14.2528L14.0897 12L9.65 9.7472Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.349998 5.5C0.349998 4.31259 1.31259 3.35 2.5 3.35H21.5C22.6874 3.35 23.65 4.31259 23.65 5.5V18.5C23.65 19.6874 22.6874 20.65 21.5 20.65H2.5C1.31259 20.65 0.349998 19.6874 0.349998 18.5V5.5ZM2.5 4.65C2.03056 4.65 1.65 5.03056 1.65 5.5V18.5C1.65 18.9694 2.03056 19.35 2.5 19.35H21.5C21.9694 19.35 22.35 18.9694 22.35 18.5V5.5C22.35 5.03056 21.9694 4.65 21.5 4.65H2.5Z"
      fill="currentColor"
    />
  </svg>
);

PlayOutlineTv24.displayName = 'PlayOutlineTv24';
const Memo = memo(PlayOutlineTv24);
export default Memo;
