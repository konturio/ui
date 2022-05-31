import { SVGProps, memo } from 'react';

const BookOpen24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M21 4H15.6C14.6452 4 13.7295 4.3746 13.0544 5.0414C12.3793 5.70819 12 6.61256 12 7.55556V20C12 19.2928 12.2845 18.6145 12.7908 18.1144C13.2972 17.6143 13.9839 17.3333 14.7 17.3333H21V4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 4H8.4C9.35478 4 10.2705 4.3746 10.9456 5.0414C11.6207 5.70819 12 6.61256 12 7.55556V20C12 19.2928 11.7155 18.6145 11.2092 18.1144C10.7028 17.6143 10.0161 17.3333 9.3 17.3333H3V4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

BookOpen24.displayName = 'BookOpen24';
const Memo = memo(BookOpen24);
export default Memo;
