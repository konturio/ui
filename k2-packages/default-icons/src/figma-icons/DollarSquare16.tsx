import { SVGProps, memo } from 'react';

const DollarSquare16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00001 4.19874C8.27615 4.19874 8.50001 4.4226 8.50001 4.69874V5.29916H9.65063C9.92677 5.29916 10.1506 5.52302 10.1506 5.79916C10.1506 6.0753 9.92677 6.29916 9.65063 6.29916H7.4498C7.1182 6.29916 6.84938 6.56798 6.84938 6.89958C6.84938 7.23118 7.1182 7.5 7.4498 7.5H8.55021C9.4341 7.5 10.1506 8.21653 10.1506 9.10041C10.1506 9.9843 9.4341 10.7008 8.55021 10.7008H8.50001V11.3012C8.50001 11.5774 8.27615 11.8012 8.00001 11.8012C7.72386 11.8012 7.50001 11.5774 7.50001 11.3012V10.7008H6.34938C6.07324 10.7008 5.84938 10.477 5.84938 10.2008C5.84938 9.92469 6.07324 9.70083 6.34938 9.70083H7.99931C7.99954 9.70083 7.99977 9.70083 8.00001 9.70083C8.00024 9.70083 8.00047 9.70083 8.0007 9.70083H8.55021C8.88181 9.70083 9.15063 9.43201 9.15063 9.10041C9.15063 8.76881 8.88181 8.5 8.55021 8.5H7.4498C6.56591 8.5 5.84938 7.78346 5.84938 6.89958C5.84938 6.01569 6.56591 5.29916 7.4498 5.29916H7.50001V4.69874C7.50001 4.4226 7.72386 4.19874 8.00001 4.19874Z"
      fill="currentColor"
    />
    <rect x={2} y={2} width={12} height={12} rx={2} stroke="currentColor" />
  </svg>
);

DollarSquare16.displayName = 'DollarSquare16';
const Memo = memo(DollarSquare16);
export default Memo;
