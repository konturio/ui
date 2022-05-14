import { SVGProps, memo } from 'react';

const StepForward = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.71 7.29C8.61676 7.19676 8.50607 7.1228 8.38425 7.07234C8.26243 7.02188 8.13186 6.99591 8 6.99591C7.86814 6.99591 7.73757 7.02188 7.61575 7.07234C7.49393 7.1228 7.38324 7.19676 7.29 7.29C7.19676 7.38324 7.1228 7.49393 7.07234 7.61575C7.02188 7.73758 6.99591 7.86814 6.99591 8C6.99591 8.13186 7.02188 8.26243 7.07234 8.38425C7.1228 8.50607 7.19676 8.61676 7.29 8.71L10.59 12L7.29 15.29C7.19627 15.383 7.12188 15.4936 7.07111 15.6154C7.02034 15.7373 6.9942 15.868 6.9942 16C6.9942 16.132 7.02034 16.2627 7.07111 16.3846C7.12188 16.5064 7.19627 16.617 7.29 16.71C7.38296 16.8037 7.49356 16.8781 7.61542 16.9289C7.73728 16.9797 7.86799 17.0058 8 17.0058C8.13201 17.0058 8.26272 16.9797 8.38458 16.9289C8.50644 16.8781 8.61704 16.8037 8.71 16.71L12.71 12.71C12.8037 12.617 12.8781 12.5064 12.9289 12.3846C12.9797 12.2627 13.0058 12.132 13.0058 12C13.0058 11.868 12.9797 11.7373 12.9289 11.6154C12.8781 11.4936 12.8037 11.383 12.71 11.29L8.71 7.29ZM16 7C15.7348 7 15.4804 7.10536 15.2929 7.2929C15.1054 7.48043 15 7.73479 15 8V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17C16.2652 17 16.5196 16.8946 16.7071 16.7071C16.8946 16.5196 17 16.2652 17 16V8C17 7.73479 16.8946 7.48043 16.7071 7.2929C16.5196 7.10536 16.2652 7 16 7Z"
      fill="currentColor"
    />
  </svg>
);

StepForward.displayName = 'StepForward';
const Memo = memo(StepForward);
export default Memo;
