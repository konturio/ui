import { SVGProps, memo } from 'react';

const InfoError16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_302_731)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM8.80001 4C8.80001 3.55817 8.44184 3.2 8.00001 3.2C7.55818 3.2 7.20001 3.55817 7.20001 4V8C7.20001 8.44182 7.55818 8.8 8.00001 8.8C8.44184 8.8 8.80001 8.44182 8.80001 8V4ZM8.00001 10.5333C7.55818 10.5333 7.20001 10.8915 7.20001 11.3333C7.20001 11.7752 7.55818 12.1333 8.00001 12.1333H8.00668C8.44851 12.1333 8.80668 11.7752 8.80668 11.3333C8.80668 10.8915 8.44851 10.5333 8.00668 10.5333H8.00001Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_302_731">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

InfoError16.displayName = 'InfoError16';
const Memo = memo(InfoError16);
export default Memo;
