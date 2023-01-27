import { SVGProps, memo } from 'react';

const Search24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 4.65001C7.49299 4.65001 4.65 7.493 4.65 11C4.65 14.507 7.49299 17.35 11 17.35C14.507 17.35 17.35 14.507 17.35 11C17.35 7.493 14.507 4.65001 11 4.65001ZM3.35 11C3.35 6.77503 6.77502 3.35001 11 3.35001C15.225 3.35001 18.65 6.77503 18.65 11C18.65 15.225 15.225 18.65 11 18.65C6.77502 18.65 3.35 15.225 3.35 11Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.5404 15.5404C15.7942 15.2865 16.2058 15.2865 16.4596 15.5404L20.4596 19.5404C20.7135 19.7942 20.7135 20.2058 20.4596 20.4596C20.2058 20.7135 19.7942 20.7135 19.5404 20.4596L15.5404 16.4596C15.2865 16.2058 15.2865 15.7942 15.5404 15.5404Z"
      fill="currentColor"
    />
  </svg>
);

Search24.displayName = 'Search24';
const Memo = memo(Search24);
export default Memo;
