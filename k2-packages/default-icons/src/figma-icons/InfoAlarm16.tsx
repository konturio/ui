import { SVGProps, memo } from 'react';

const InfoAlarm16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M6.69066 1.74455L0.205221 12.6799C0.071506 12.9138 0.000754715 13.179 6.00468e-06 13.449C-0.000742706 13.7191 0.0685372 13.9847 0.200953 14.2193C0.333369 14.4539 0.524306 14.6495 0.754766 14.7864C0.985227 14.9234 1.24718 14.997 1.51456 15H14.4854C14.7528 14.997 15.0148 14.9234 15.2452 14.7864C15.4757 14.6495 15.6666 14.4539 15.799 14.2193C15.9315 13.9847 16.0007 13.7191 16 13.449C15.9992 13.179 15.9285 12.9138 15.7948 12.6799L9.30934 1.74455C9.17284 1.51726 8.98064 1.32935 8.7513 1.19893C8.52195 1.06851 8.2632 1 8 1C7.7368 1 7.47805 1.06851 7.2487 1.19893C7.01936 1.32935 6.82716 1.51726 6.69066 1.74455Z"
      fill="currentColor"
    />
    <path d="M8 6V9" stroke="white" strokeWidth={1.6} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M8 12.3333H8.00667" stroke="white" strokeWidth={1.6} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

InfoAlarm16.displayName = 'InfoAlarm16';
const Memo = memo(InfoAlarm16);
export default Memo;
