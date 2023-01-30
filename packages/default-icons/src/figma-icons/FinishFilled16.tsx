import { SVGProps, memo } from 'react';

const FinishFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1558_24081)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM12.9717 5.94721C13.2187 5.68669 13.2077 5.27528 12.9472 5.0283C12.6867 4.78132 12.2753 4.79229 12.0283 5.0528L6.9681 10.3903L4.47019 7.77342C4.22232 7.51375 3.81087 7.50418 3.5512 7.75205C3.29152 7.99992 3.28196 8.41137 3.52983 8.67104L6.49952 11.7821C6.62244 11.9109 6.79279 11.9836 6.97081 11.9833C7.14883 11.983 7.31893 11.9097 7.44141 11.7805L12.9717 5.94721Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1558_24081">
        <rect width={16} height={16} rx={8} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

FinishFilled16.displayName = 'FinishFilled16';
const Memo = memo(FinishFilled16);
export default Memo;
