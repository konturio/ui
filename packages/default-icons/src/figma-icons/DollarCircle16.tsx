import { SVGProps, memo } from 'react';

const DollarCircle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.99792 8C2.99792 5.23742 5.23743 2.99791 8.00001 2.99791C10.7626 2.99791 13.0021 5.23742 13.0021 8C13.0021 10.7626 10.7626 13.0021 8.00001 13.0021C5.23743 13.0021 2.99792 10.7626 2.99792 8ZM8.00001 1.99791C4.68515 1.99791 1.99792 4.68514 1.99792 8C1.99792 11.3149 4.68515 14.0021 8.00001 14.0021C11.3149 14.0021 14.0021 11.3149 14.0021 8C14.0021 4.68514 11.3149 1.99791 8.00001 1.99791ZM8.50001 4.69874C8.50001 4.4226 8.27615 4.19874 8.00001 4.19874C7.72386 4.19874 7.50001 4.4226 7.50001 4.69874V5.29916H7.4498C6.56591 5.29916 5.84938 6.01569 5.84938 6.89958C5.84938 7.78346 6.56591 8.49999 7.4498 8.49999H8.55021C8.88181 8.49999 9.15063 8.76881 9.15063 9.10041C9.15063 9.43201 8.88181 9.70083 8.55021 9.70083H8.0007C8.00047 9.70083 8.00024 9.70083 8.00001 9.70083C7.99977 9.70083 7.99954 9.70083 7.99931 9.70083H6.34938C6.07324 9.70083 5.84938 9.92469 5.84938 10.2008C5.84938 10.477 6.07324 10.7008 6.34938 10.7008H7.50001V11.3012C7.50001 11.5774 7.72386 11.8012 8.00001 11.8012C8.27615 11.8012 8.50001 11.5774 8.50001 11.3012V10.7008H8.55021C9.4341 10.7008 10.1506 9.9843 10.1506 9.10041C10.1506 8.21653 9.4341 7.49999 8.55021 7.49999H7.4498C7.1182 7.49999 6.84938 7.23118 6.84938 6.89958C6.84938 6.56798 7.1182 6.29916 7.4498 6.29916H9.65063C9.92677 6.29916 10.1506 6.0753 10.1506 5.79916C10.1506 5.52302 9.92677 5.29916 9.65063 5.29916H8.50001V4.69874Z"
      fill="currentColor"
    />
  </svg>
);

DollarCircle16.displayName = 'DollarCircle16';
const Memo = memo(DollarCircle16);
export default Memo;
