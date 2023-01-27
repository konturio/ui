import { SVGProps, memo } from 'react';

const InfoAlarm16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.205221 12.6799L6.69066 1.74455C6.82716 1.51726 7.01936 1.32935 7.2487 1.19893C7.47805 1.06851 7.7368 1 8 1C8.2632 1 8.52195 1.06851 8.7513 1.19893C8.98064 1.32935 9.17284 1.51726 9.30934 1.74455L15.7948 12.6799C15.9285 12.9138 15.9992 13.179 16 13.449C16.0007 13.7191 15.9315 13.9847 15.799 14.2193C15.6666 14.4539 15.4757 14.6495 15.2452 14.7864C15.0148 14.9234 14.7528 14.997 14.4854 15H1.51456C1.24718 14.997 0.985227 14.9234 0.754766 14.7864C0.524306 14.6495 0.333369 14.4539 0.200953 14.2193C0.0685372 13.9847 -0.000742706 13.7191 6.00468e-06 13.449C0.000754715 13.179 0.0715059 12.9138 0.205221 12.6799ZM8.80001 6C8.80001 5.55817 8.44184 5.2 8.00001 5.2C7.55818 5.2 7.20001 5.55817 7.20001 6V9C7.20001 9.44182 7.55818 9.8 8.00001 9.8C8.44184 9.8 8.80001 9.44182 8.80001 9V6ZM8.00001 11.5333C7.55818 11.5333 7.20001 11.8915 7.20001 12.3333C7.20001 12.7752 7.55818 13.1333 8.00001 13.1333H8.00668C8.44851 13.1333 8.80668 12.7752 8.80668 12.3333C8.80668 11.8915 8.44851 11.5333 8.00668 11.5333H8.00001Z"
      fill="currentColor"
    />
  </svg>
);

InfoAlarm16.displayName = 'InfoAlarm16';
const Memo = memo(InfoAlarm16);
export default Memo;
