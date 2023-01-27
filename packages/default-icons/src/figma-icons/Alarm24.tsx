import { SVGProps, memo } from 'react';

const Alarm24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.6999 2.58808C11.0968 2.36464 11.5446 2.24725 12 2.24725C12.4555 2.24725 12.9032 2.36464 13.3001 2.58808C13.697 2.81152 14.0296 3.13348 14.2658 3.52289L14.2676 3.52598L22.743 17.6749C22.9744 18.0756 23.0967 18.53 23.098 18.9927C23.0993 19.4554 22.9794 19.9104 22.7503 20.3124C22.5212 20.7144 22.1908 21.0494 21.792 21.2841C21.3932 21.5187 20.9399 21.6449 20.4772 21.65L20.47 21.65L3.52288 21.65C3.06019 21.6449 2.6069 21.5187 2.2081 21.2841C1.80929 21.0494 1.47889 20.7144 1.24975 20.3124C1.02061 19.9104 0.900723 19.4554 0.902018 18.9927C0.903314 18.53 1.02575 18.0757 1.25713 17.675L1.26234 17.6659L9.73241 3.52598L9.73428 3.52289C9.97049 3.13348 10.3031 2.81152 10.6999 2.58808ZM12 3.54725C11.768 3.54725 11.5399 3.60705 11.3377 3.72088C11.136 3.83445 10.9669 3.99798 10.8466 4.19575C10.8463 4.1962 10.8461 4.19665 10.8458 4.19711L2.38058 18.3291C2.26422 18.5322 2.20267 18.7622 2.20201 18.9963C2.20135 19.2321 2.26243 19.4638 2.37916 19.6686C2.49589 19.8734 2.66421 20.0441 2.86737 20.1636C3.06964 20.2827 3.29941 20.3469 3.53403 20.35H20.466C20.7006 20.3469 20.9304 20.2827 21.1327 20.1636C21.3358 20.0441 21.5042 19.8734 21.6209 19.6686C21.7376 19.4638 21.7987 19.2321 21.798 18.9963C21.7974 18.7622 21.7358 18.5323 21.6195 18.3291L13.1543 4.19711C13.154 4.19665 13.1537 4.1962 13.1535 4.19575C13.0332 3.99798 12.8641 3.83445 12.6623 3.72088C12.4602 3.60705 12.232 3.54725 12 3.54725ZM12 8.35C12.359 8.35 12.65 8.64101 12.65 9V13C12.65 13.359 12.359 13.65 12 13.65C11.641 13.65 11.35 13.359 11.35 13V9C11.35 8.64101 11.641 8.35 12 8.35ZM11.35 17C11.35 16.641 11.641 16.35 12 16.35H12.01C12.369 16.35 12.66 16.641 12.66 17C12.66 17.359 12.369 17.65 12.01 17.65H12C11.641 17.65 11.35 17.359 11.35 17Z"
      fill="currentColor"
    />
  </svg>
);

Alarm24.displayName = 'Alarm24';
const Memo = memo(Alarm24);
export default Memo;
