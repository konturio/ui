import { memo } from 'react';

const SearchIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M14 14L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="10" cy="10" r="5" stroke="currentColor" strokeWidth="2" />
  </svg>
));

SearchIcon.displayName = 'SearchIcon';

export default SearchIcon;
