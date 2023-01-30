import { SVGProps, memo } from 'react';

const LayerPeriphery = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12 5.1547L17.9282 8.57735L17.9282 15.4226L12 18.8453L6.0718 15.4227L6.0718 8.57735L12 5.1547Z"
      fill="white"
      stroke="#24D225"
      strokeWidth={2}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17.1962 9.57735C17.1962 9.22008 17.0056 8.88996 16.6962 8.71132L12.5 6.28868C12.1906 6.11004 11.8094 6.11004 11.5 6.28868L7.30385 8.71132C6.99445 8.88996 6.80385 9.22008 6.80385 9.57735V14.4226C6.80385 14.7799 6.99445 15.11 7.30385 15.2887L11.5 17.7113C11.8094 17.89 12.1906 17.89 12.5 17.7113L16.6962 15.2887C17.0056 15.11 17.1962 14.7799 17.1962 14.4226V9.57735ZM14.9417 10.879C14.9417 10.5217 14.7511 10.1916 14.4417 10.0129L12.5 8.8919C12.1906 8.71327 11.8094 8.71327 11.5 8.8919L9.55831 10.0129C9.24891 10.1916 9.05831 10.5217 9.05831 10.879V13.121C9.05831 13.4783 9.24891 13.8084 9.55831 13.9871L11.5 15.1081C11.8094 15.2867 12.1906 15.2867 12.5 15.1081L14.4417 13.9871C14.7511 13.8084 14.9417 13.4783 14.9417 13.121V10.879Z"
      fill="#9DF09E"
    />
  </svg>
);

LayerPeriphery.displayName = 'LayerPeriphery';
const Memo = memo(LayerPeriphery);
export default Memo;
