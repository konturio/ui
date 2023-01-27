import { SVGProps, memo } from 'react';

const CloseFilled24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM9.08462 8.16538C8.83078 7.91154 8.41922 7.91154 8.16538 8.16538C7.91154 8.41922 7.91154 8.83078 8.16538 9.08462L11.0808 12L8.16538 14.9154C7.91154 15.1692 7.91154 15.5808 8.16538 15.8346C8.41922 16.0885 8.83078 16.0885 9.08462 15.8346L12 12.9192L14.9154 15.8346C15.1692 16.0885 15.5808 16.0885 15.8346 15.8346C16.0885 15.5808 16.0885 15.1692 15.8346 14.9154L12.9192 12L15.8346 9.08462C16.0885 8.83078 16.0885 8.41922 15.8346 8.16538C15.5808 7.91154 15.1692 7.91154 14.9154 8.16538L12 11.0808L9.08462 8.16538Z"
      fill="currentColor"
    />
  </svg>
);

CloseFilled24.displayName = 'CloseFilled24';
const Memo = memo(CloseFilled24);
export default Memo;
