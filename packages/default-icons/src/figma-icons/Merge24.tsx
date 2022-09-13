import { SVGProps, memo } from 'react';

const Merge24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8 19C11.866 19 15 15.866 15 12C15 8.13401 11.866 5 8 5C4.13401 5 1 8.13401 1 12C1 15.866 4.13401 19 8 19Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16 19C19.866 19 23 15.866 23 12C23 8.13401 19.866 5 16 5C12.134 5 9 8.13401 9 12C9 15.866 12.134 19 16 19Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 7C10.4218 8.10085 9.38918 9.92984 9.38918 12C9.38918 14.0702 10.4218 15.8992 12 17C13.5782 15.8992 14.6108 14.0702 14.6108 12C14.6108 9.92984 13.5782 8.10085 12 7Z"
      fill="currentColor"
    />
  </svg>
);

Merge24.displayName = 'Merge24';
const Memo = memo(Merge24);
export default Memo;
