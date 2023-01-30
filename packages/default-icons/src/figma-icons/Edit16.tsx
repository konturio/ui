import { SVGProps, memo } from 'react';

const Edit16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1049_4202)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.48808 1.45422C9.68334 1.25896 9.99992 1.25896 10.1952 1.45422L14.5459 5.80497C14.7412 6.00023 14.7412 6.31682 14.5459 6.51208L7.38921 13.6689C7.29544 13.7627 7.16826 13.8153 7.03565 13.8153L2.6849 13.8153C2.40876 13.8153 2.1849 13.5915 2.1849 13.3153L2.1849 8.96459C2.1849 8.83198 2.23758 8.70481 2.33134 8.61104L9.48808 1.45422ZM9.84163 2.51488L7.75183 4.60469L11.3955 8.24833L13.4853 6.15852L9.84163 2.51488ZM10.6884 8.95544L7.04473 5.3118L3.1849 9.17169L3.1849 12.8153L6.82854 12.8153L10.6884 8.95544Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1049_4202">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Edit16.displayName = 'Edit16';
const Memo = memo(Edit16);
export default Memo;
