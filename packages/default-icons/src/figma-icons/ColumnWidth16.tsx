import { SVGProps, memo } from 'react';

const ColumnWidth16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2.8125 2.75H1.875C1.80625 2.75 1.75 2.80625 1.75 2.875V13.125C1.75 13.1938 1.80625 13.25 1.875 13.25H2.8125C2.88125 13.25 2.9375 13.1938 2.9375 13.125V2.875C2.9375 2.80625 2.88125 2.75 2.8125 2.75ZM14.125 2.75H13.1875C13.1187 2.75 13.0625 2.80625 13.0625 2.875V13.125C13.0625 13.1938 13.1187 13.25 13.1875 13.25H14.125C14.1938 13.25 14.25 13.1938 14.25 13.125V2.875C14.25 2.80625 14.1938 2.75 14.125 2.75ZM12.2703 7.87969L10.2766 6.30625C10.2599 6.29313 10.2398 6.28497 10.2187 6.28271C10.1976 6.28045 10.1763 6.28419 10.1572 6.29348C10.1382 6.30278 10.1221 6.31726 10.1109 6.33527C10.0996 6.35328 10.0937 6.37409 10.0938 6.39531V7.4375H5.90625V6.45625C5.90625 6.3625 5.79688 6.30938 5.72344 6.36719L3.72969 7.94219C3.7162 7.95261 3.70527 7.96599 3.69776 7.98129C3.69024 7.9966 3.68634 8.01342 3.68634 8.03047C3.68634 8.04752 3.69024 8.06434 3.69776 8.07964C3.70527 8.09495 3.7162 8.10833 3.72969 8.11875L5.72188 9.69375C5.79531 9.75156 5.90469 9.7 5.90469 9.60469V8.5625H10.0922V9.54375C10.0922 9.6375 10.2016 9.69063 10.275 9.63281L12.2672 8.05781C12.3266 8.0125 12.3266 7.925 12.2703 7.87969Z"
      fill="currentColor"
    />
  </svg>
);

ColumnWidth16.displayName = 'ColumnWidth16';
const Memo = memo(ColumnWidth16);
export default Memo;
