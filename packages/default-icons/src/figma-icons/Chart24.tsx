import { SVGProps, memo } from 'react';

const Chart24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 6.35C12.359 6.35 12.65 6.64101 12.65 7L12.65 17C12.65 17.359 12.359 17.65 12 17.65C11.641 17.65 11.35 17.359 11.35 17L11.35 7C11.35 6.64101 11.641 6.35 12 6.35ZM17 10.35C17.359 10.35 17.65 10.641 17.65 11V17C17.65 17.359 17.359 17.65 17 17.65C16.641 17.65 16.35 17.359 16.35 17V11C16.35 10.641 16.641 10.35 17 10.35ZM7 11.85C7.35898 11.85 7.65 12.141 7.65 12.5V17C7.65 17.359 7.35898 17.65 7 17.65C6.64101 17.65 6.35 17.359 6.35 17V12.5C6.35 12.141 6.64101 11.85 7 11.85Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5 1.7H19C20.8225 1.7 22.3 3.17746 22.3 5V19C22.3 20.8225 20.8225 22.3 19 22.3H5C3.17746 22.3 1.7 20.8225 1.7 19V5C1.7 3.17746 3.17746 1.7 5 1.7ZM5 3C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5Z"
      fill="currentColor"
    />
  </svg>
);

Chart24.displayName = 'Chart24';
const Memo = memo(Chart24);
export default Memo;
