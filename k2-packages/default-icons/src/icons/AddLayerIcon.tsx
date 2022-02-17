import { memo } from 'react';

const AddLayerIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path
      d="M3.5 16.5L12 20.5L20.5 16.5"
      stroke="#D7DADC"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M12 7.5L3.5 11.5L12 15.5L20.5 11.5L12 7.5Z"
      stroke="#D7DADC"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path d="M12 5L18.5 8L16.5 12H12H7.5L5.5 8L12 5Z" fill="#26303A" />
    <path d="M12 3V11M8 7H16" stroke="#D7DADC" strokeWidth="1.3" />
  </svg>
));

AddLayerIcon.displayName = 'AddLayerIcon';

export default AddLayerIcon;
