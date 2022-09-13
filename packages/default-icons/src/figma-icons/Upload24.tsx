import { SVGProps, memo } from 'react';

const Upload24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.35 14.5155V5.71125L8.44421 8.6171L7.52496 7.69786L11.5404 3.68239C11.6623 3.56049 11.8277 3.492 12 3.492C12.1724 3.492 12.3378 3.56048 12.4597 3.68238L16.4752 7.69786L15.5559 8.6171L12.65 5.71124V14.5155H11.35ZM3.33617 14.0703V18.858C3.33617 19.7693 4.0749 20.508 4.98617 20.508H19.0139C19.9251 20.508 20.6639 19.7693 20.6639 18.858V14.0703H19.3639V18.858C19.3639 19.0513 19.2072 19.208 19.0139 19.208H4.98617C4.79287 19.208 4.63617 19.0513 4.63617 18.858V14.0703H3.33617Z"
      fill="currentColor"
    />
  </svg>
);

Upload24.displayName = 'Upload24';
const Memo = memo(Upload24);
export default Memo;
