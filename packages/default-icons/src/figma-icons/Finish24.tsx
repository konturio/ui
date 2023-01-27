import { SVGProps, memo } from 'react';

const Finish24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.4488 6.52983C20.7085 6.7777 20.7181 7.18914 20.4702 7.44882L10.9247 17.4488C10.8021 17.5773 10.6322 17.65 10.4545 17.65C10.2769 17.65 10.107 17.5773 9.98436 17.4488L5.52982 12.7821C5.28195 12.5225 5.29152 12.111 5.55119 11.8632C5.81086 11.6153 6.22231 11.6249 6.47018 11.8845L10.4545 16.0586L19.5298 6.5512C19.7777 6.29152 20.1891 6.28196 20.4488 6.52983Z"
      fill="currentColor"
    />
  </svg>
);

Finish24.displayName = 'Finish24';
const Memo = memo(Finish24);
export default Memo;
