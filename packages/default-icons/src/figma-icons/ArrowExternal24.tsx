import { SVGProps, memo } from 'react';

const ArrowExternal24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.25 7.90001C6.89101 7.90001 6.6 7.60899 6.6 7.25001C6.6 6.89102 6.89101 6.60001 7.25 6.60001H16.75C17.109 6.60001 17.4 6.89102 17.4 7.25001V16.75C17.4 17.109 17.109 17.4 16.75 17.4C16.391 17.4 16.1 17.109 16.1 16.75V8.81924L7.70962 17.2096C7.45578 17.4635 7.04422 17.4635 6.79038 17.2096C6.53654 16.9558 6.53654 16.5442 6.79038 16.2904L15.1808 7.90001H7.25Z"
      fill="currentColor"
    />
  </svg>
);

ArrowExternal24.displayName = 'ArrowExternal24';
const Memo = memo(ArrowExternal24);
export default Memo;
