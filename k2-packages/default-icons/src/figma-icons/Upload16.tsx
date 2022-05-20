import { SVGProps, memo } from 'react';

const Upload16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.49997 9.677C8.49997 9.95314 8.27612 10.177 7.99997 10.177C7.72383 10.177 7.49997 9.95314 7.49997 9.677V3.96843L5.67655 5.79186C5.48129 5.98712 5.16471 5.98712 4.96945 5.79186C4.77418 5.5966 4.77418 5.28002 4.96944 5.08476L7.64642 2.40777C7.84168 2.21251 8.15826 2.21251 8.35353 2.40777L11.0305 5.08475C11.2258 5.28002 11.2258 5.5966 11.0305 5.79186C10.8353 5.98712 10.5187 5.98712 10.3234 5.79186L8.49997 3.96843V9.677ZM3.15723 9.38017V8.88017H2.15723V9.38017V12.2387C2.15723 13.0671 2.8288 13.7387 3.65723 13.7387H12.3424C13.1708 13.7387 13.8424 13.0671 13.8424 12.2387V9.38017V8.88017H12.8424V9.38017V12.2387C12.8424 12.5148 12.6185 12.7387 12.3424 12.7387H3.65723C3.38108 12.7387 3.15723 12.5148 3.15723 12.2387V9.38017Z"
      fill="currentColor"
    />
  </svg>
);

Upload16.displayName = 'Upload16';
const Memo = memo(Upload16);
export default Memo;
